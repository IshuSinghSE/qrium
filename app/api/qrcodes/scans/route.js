import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import QRCodeScan from '../../../../models/QRCodeScan';
import QRCode from '../../../../models/QRCode';

export async function POST(req) {
  await connectDB();

  const { qrCodeId } = await req.json();
  const qrCode = await QRCode.findById(qrCodeId);

  if (!qrCode) {
    return NextResponse.json({ error: 'QR code not found' }, { status: 404 });
  }

  qrCode.scanCount += 1;
  await qrCode.save();

  const scan = new QRCodeScan({
    qrCode: qrCodeId,
    // Add other necessary fields here
  });
  await scan.save();

  return NextResponse.json(scan, { status: 201 });
}