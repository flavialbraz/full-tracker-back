import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: '30d' });
};

const register = async (name: string, email: string, password: string) => {
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashedPassword });

  return {
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user.id)
  };
};

const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    return {
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id)
    };
  } else {
    throw new Error('Invalid credentials');
  }
};

export { register, login };
