import { generateToken } from '@/lib/auth';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req) {
  await connectDB();

  try {
    const { email, password } = await req.json();

    // Trim email and password
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const user = await User.findOne({ email: trimmedEmail });
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials, email not found' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(trimmedPassword, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid credentials, invalid password' }, { status: 401 });
    }

    const token = generateToken(user);

    // Redirect to homepage after successful login
    const response = NextResponse.json({ message: 'Login successful' });
    response.cookies.set('token', token, { httpOnly: true, secure: process.env.APP_ENV === 'production' });
    return response;

    // Continue with the rest of your logic...
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}