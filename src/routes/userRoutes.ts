import express from 'express';
import User from '../models/User';

const router = express.Router();

// Rota para obter todos os usuários
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

// Rota para criar um novo usuário
router.post('/', async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// Rota para obter um único usuário pelo ID
router.get('/:id', async (req, res) => {
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
});

// Rota para atualizar a participação na academia de um usuário por data
router.put('/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const { attended } = req.body;
    
    const user = await User.findOneAndUpdate({ date }, { attended }, { new: true });
    
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Data não encontrada' });
    }
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});


// Rota para deletar um usuário pelo ID
router.delete('/:id', async (req, res) => {
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
});

export default router;
