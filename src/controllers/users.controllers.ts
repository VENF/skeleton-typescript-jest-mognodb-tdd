import { Request, Response } from 'express';
import User from '../models/user.model';

export const createUser = async (req: Request, res: Response) => {
  console.log('hola')
};

export const findUser = async (req: Request, res: Response) => {
  const users = await User.find({});
  return res.status(200).json(users)
};
