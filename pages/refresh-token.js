import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { refreshToken } = req.body;

  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const newToken = jwt.sign({ email: payload.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token: newToken });
  } catch (error) {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
}
