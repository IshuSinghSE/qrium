import connectDB from '../../../lib/mongodb';
import User from '../../../models/User';
import { generateToken } from '../../../lib/auth';
import bcrypt from 'bcryptjs';

export default async (req, res) => {
  await connectDB();

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = generateToken(user);
  res.status(200).json({ token });
};
