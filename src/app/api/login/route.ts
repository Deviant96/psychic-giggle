import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextResponse, res: NextRequest) {
  const { username, password } = await req.json();

  if (username === 'user' && password === 'password') {
    return Response.json({ user: { id: 1, name: 'User', email: 'user@example.com' } });
  } else {
    return Response.json({ error: 'Invalid credentials' });
  }
}