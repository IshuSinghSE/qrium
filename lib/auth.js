import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export const authMiddleware = (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: 'Authorization header missing' });
    return null;
  }

  try {
    const token = authorization.split(' ')[1];
    return verifyToken(token);
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token' });
    return null;
  }
};
