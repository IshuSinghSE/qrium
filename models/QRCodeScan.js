import mongoose from 'mongoose';

const QRCodeScanSchema = new mongoose.Schema({
  qrCode: { type: mongoose.Schema.Types.ObjectId, ref: 'QRCode', required: true },
  timestamp: { type: Date, default: Date.now },
  userAgent: { type: String },
  ip: { type: String },
});

export default mongoose.models.QRCodeScan || mongoose.model('QRCodeScan', QRCodeScanSchema);
