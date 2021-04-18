import { Request, Response } from 'express';
// import { auth } from '../config/firebase';

// const loginUser = (req: Request, res: Response) => {
//   const { email, password } = req.body;
//   auth.createUser(email, password)
// }

const verifyPhone = (req: Request, res: Response) => {
  res.send("PHone verification")
}

export { verifyPhone }