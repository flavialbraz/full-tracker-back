import express from 'express';
import { getUsers, getUserById, updateUserAttendance, deleteUser } from '../controllers/userController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', protect, getUsers);
router.get('/:id', protect, getUserById);
router.put('/:date', protect, updateUserAttendance);
router.delete('/:id', protect, deleteUser);

export default router;
