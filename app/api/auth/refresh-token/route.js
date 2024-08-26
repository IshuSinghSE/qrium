import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  const { refreshToken } = await req.json();

  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const newToken = jwt.sign({ email: payload.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({ token: newToken }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Invalid refresh token' }, { status: 401 });
  }
}