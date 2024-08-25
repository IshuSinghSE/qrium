import connectDB from '../../../lib/mongodb';
import QRCode from '../../../models/QRCode';
import { authMiddleware } from '../../../lib/auth';

export default async (req, res) => {
  await connectDB();

  const user = authMiddleware(req, res);
  if (!user) return;

  if (req.method === 'POST') {
    const { url, customization } = req.body;
    const qrCode = new QRCode({ url, createdBy: user.userId, customization });
    await qrCode.save();
    res.status(201).json(qrCode);
  } else if (req.method === 'GET') {
    const qrCodes = await QRCode.find({ createdBy: user.userId });
    res.status(200).json(qrCodes);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
