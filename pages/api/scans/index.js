import connectDB from '../../../lib/mongodb';
import QRCodeScan from '../../../models/QRCodeScan';
import QRCode from '../../../models/QRCode';

export default async (req, res) => {
  await connectDB();

  const { qrCodeId } = req.body;
  const qrCode = await QRCode.findById(qrCodeId);

  if (!qrCode) {
    return res.status(404).json({ error: 'QR code not found' });
  }

  qrCode.scanCount += 1;
  await qrCode.save();

  const scan = new QRCodeScan({
    qrCode: qrCodeId,
    userAgent: req.headers['user-agent'],
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
  });

  await scan.save();
  res.status(201).json(scan);
};
