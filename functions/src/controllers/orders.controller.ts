import { Request, Response } from 'express';
import { db } from  '../config/firebase';


const getAllOrders = async (req: Request, res: Response ) => {
  res.send("all Orders");
}

const createOrder = async (req: Request, res: Response ) => {
  const order: Order = req.body;
  // todo: Check to see if phone number has been verified, if not, send 401
  // Maybe this can be a middleware
  await db.collection('orders').add(order);
  res.status(201).json(order); 
}

const getOrderById = async (req: Request, res: Response ) => {
  res.send("Get Only One Order");
}

const updateOrderById = async (req: Request, res: Response ) => {
  res.send("Update One Order");
}

const deleteOrderById = async (req: Request, res: Response ) => {
  res.send("Delete Order");
}

export { getAllOrders, createOrder, getOrderById, updateOrderById, deleteOrderById }