import { Request, Response } from 'express';
import User from '../models/User';

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

const updateUserAttendance = async (req: Request, res: Response) => {
  try {
    const { date } = req.params;
    const { attended } = req.body;

    const user = await User.findOneAndUpdate(
      { _id: req.user.id, 'attendedDates.date': date },
      { $set: { 'attendedDates.$.attended': attended } },
      { new: true, upsert: true }
    );

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Data não encontrada' });
    }
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.json({ message: 'Usuário deletado' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export { getUsers, getUserById, updateUserAttendance, deleteUser };
