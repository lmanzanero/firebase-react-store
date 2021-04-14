import { Request, Response } from 'express';
// import { db } from  '../config/firebase';


const getAllOrders = async (req: Request, res: Response ) => {
  res.send("all Orders");
}

const createOrder = async (req: Request, res: Response ) => {
  res.send("Creating one order");
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