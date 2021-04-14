import { Request, Response } from 'express';
import { db } from  '../config/firebase';


const getAllProudcts = async (req: Request, res: Response ) => {
  try {
    const products: Product[] = [];
    const queryProducts = await db.collection('products').get();
    queryProducts.forEach((doc: any) => products.push({id: doc.id, ...doc.data()} as Product))
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

const createProudct = async (req: Request, res: Response ) => {
  const product: Product  = req.body;
  await db.collection('products').add(product);
  res.status(201).json(product); 
}

const getProudctById = async (req: Request, res: Response ) => {
  res.send("Get Only One Product");
}

const updateProudctById = async (req: Request, res: Response ) => {
  const { name, price } = req.body;
  const { id } = req.params; 

  try {
    const product = db.collection('products').doc(id) 
    const currentData = (await product.get()).data() || {}

    const productObject = {
      name: name || currentData.name,
      price: price || currentData.price,
    }

    await product.update(productObject).catch(error => {
      return res.status(400).json({
        status: 'error',
        message: error.message
      })
    })

    return res.status(200).json({
      status: 'success',
      message: 'Product updated successfully',
      data: productObject
    })
  } catch(error) { return res.status(500).json(error.message) }
}

const deleteProudctById = async (req: Request, res: Response ) => {
  const { id } = req.params

  try { 
    const product = db.collection('products').doc(id)
    //check to see if product exists in database
    if( (await product.get()).exists ){
      await product.delete().catch(error => {
        return res.status(400).json({
          status: 'error',
          message: error.message
        })
      })
  
      return res.status(200).json({
        status: 'success',
        message: `${id} deleted successfully`,
      })
      
    } else {
      return res.status(500).send(`No Product with that ${id}`)
    }
    
  }
  catch(error) { return res.status(500).json(error.message) }
}

export { getAllProudcts, createProudct ,getProudctById, updateProudctById, deleteProudctById }
