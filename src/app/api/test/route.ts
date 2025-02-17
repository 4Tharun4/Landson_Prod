import { NextResponse } from 'next/server';

// Correct named export for GET method
export async function GET() {
  return NextResponse.json({ message: 'Local API is working!' });
}
