import { Request, Response } from 'express';
import User from '../models/user.model';

export const createUser = async (req: Request, res: Response) => {
  const user = new User(req.body);
  const created = await user.save();
  return res.status(200).json(created);
};

export const findUser = async (req: Request, res: Response) => {
  const users = await User.find({});
  return res.status(200).json(users);
};
