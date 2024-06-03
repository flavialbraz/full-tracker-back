import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ConnectOptions } from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

// Configuração do CORS
app.use(cors({
  origin: [process.env.FRONTEND_URL_LOCAL || 'http://localhost:3000', 'https://gym-tracker-front.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Rotas
app.use('/api/users', userRoutes);

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI!, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
  .then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));
