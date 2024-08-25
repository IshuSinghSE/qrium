import connectDB from '../../../lib/mongodb';
import User from '../../../models/User';
import { generateToken } from '../../../lib/auth';

export default async (req, res) => {
  await connectDB();

  const { email, password, username } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const user = new User({ email, password, username });
  await user.save();

  const token = generateToken(user);
  res.status(201).json({ token });
};
