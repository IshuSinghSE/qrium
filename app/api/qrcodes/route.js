import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import QRCode from '../../../models/QRCode';
import { authMiddleware } from '../../../lib/auth';

export async function POST(req) {
  await connectDB();

  const user = authMiddleware(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { url, customization } = await req.json();
  const qrCode = new QRCode({ url, createdBy: user.userId, customization });
  await qrCode.save();
  return NextResponse.json(qrCode, { status: 201 });
}

export async function GET(req) {
  await connectDB();

  const user = authMiddleware(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const qrCodes = await QRCode.find({ createdBy: user.userId });
  return NextResponse.json(qrCodes, { status: 200 });
}