const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
  url: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  customization: {
    color: { type: String, default: '#000000' },
    size: { type: Number, default: 200 },
    logo: { type: String } // Optional logo URL
  },
  createdAt: { type: Date, default: Date.now },
  scanCount: { type: Number, default: 0 },
  uniqueScanCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('QRCode', qrCodeSchema);
