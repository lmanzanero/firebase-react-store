import { Request, Response } from "express";
import { db } from "../config/firebase";
import { makeid } from "../utils/utils";

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders: Order[] = [];
    const queryOrders = await db.collection("orders").get();
    queryOrders.forEach((doc: any) =>
      orders.push({ id: doc.id, ...doc.data() } as Order)
    );
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createOrder = async (req: Request, res: Response) => {
  const order: Order = req.body; 
  const referenceCode = makeid();
  const createOrder = {
      productId: order.productId,
      name: order.name,
      phone: order.phone,
      referenceCode: referenceCode,
      createdAt: Date.now()
  }
  // todo: Check to see if phone number has been verified, if not, send 401
  // Maybe this can be a middleware
  await db.collection("orders").add(createOrder);
  res.status(201).json({...createOrder, status: "Success!"});
};

const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await db.collection("orders").doc(id).get();
    return res.status(200).json({
      status: "success",
      message: "Found Order!",
      data: order.data() as Order,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const updateOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    //check if product has been paid for from other services
    const order = db.collection("orders").doc(id);
    const orderObject = {
      updatedOn: Date.now(),
    };

    await order.update(orderObject).catch((error) => {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    });

    return res.status(200).json({
      status: "success",
      message: "Order updated successfully",
      data: orderObject,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deleteOrderById = async (req: Request, res: Response) => {
  const { id } = req.params

  try { 
    const order = db.collection('orders').doc(id)
    //check to see if product exists in database
    if( (await order.get()).exists ){
      await order.delete().catch(error => {
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
      return res.status(500).send(`No Order with that ${id}`)
    }
    
  }
  catch(error) { return res.status(500).json(error.message) }
};

export {
  getAllOrders,
  createOrder,
  getOrderById,
  updateOrderById,
  deleteOrderById,
};
