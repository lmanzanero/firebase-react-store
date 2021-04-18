import { db } from '../config/firebase';

const phoneVerificatonMiddleware = async (req:any, res:any, next:any) => {
  try {
    const { phone } = req.body; 
    const orderRef = db.collection('orders');
    const allOrdersRes = await orderRef.where('phone', '==', phone).get();
    if (allOrdersRes.empty) {
      res.status(401).send('No matching Phone Numbers, please verify');
      return;
    }  else {
      //phone has been verified
      next();
    } 
      return
      } catch (error) {
        res.status(500).json(error);
        return;
  } 
}

export default phoneVerificatonMiddleware;