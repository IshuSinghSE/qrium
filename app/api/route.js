import { NextRequest, NextResponse } from 'next/server';

// app/api/hello
export async function GET(req, res) {
  return NextResponse.json({ message: 'Hello, world!' });
}