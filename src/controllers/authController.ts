import { Request, Response } from 'express';
import { register, login } from '../services/authService';

const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await register(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await login(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export { registerUser, loginUser };
