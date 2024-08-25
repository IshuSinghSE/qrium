import mongoose from 'mongoose';

const QRCodeSchema = new mongoose.Schema({
  url: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  customization: { type: Object, default: {} },
  scanCount: { type: Number, default: 0 },
});

export default mongoose.models.QRCode || mongoose.model('QRCode', QRCodeSchema);
