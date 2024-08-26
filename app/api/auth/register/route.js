import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { generateToken } from '@/lib/auth';

export async function POST(req) {
  try {
    await connectDB();

    const { email, password, username } = await req.json();

    // Validate the input
    if (!email || !password || !username) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const user = new User({
      email,
      password,//: hashedPassword,
      username,
    });
    await user.save();

    // Generate JWT token
    const token = generateToken(user);

    // Set the token in an HTTP-only cookie
    const response = NextResponse.json({ message: 'Registeration successful' });
    response.cookies.set('token', token, { httpOnly: true, secure: process.env.APP_ENV === 'production' });
    return response;

  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
