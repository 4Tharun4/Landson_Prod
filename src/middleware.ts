import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    console.log(`Request made to: ${req.url}`);
  const response = NextResponse.next();

  // Allow CORS for all origins - adjust for production
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }

  return response;
}

