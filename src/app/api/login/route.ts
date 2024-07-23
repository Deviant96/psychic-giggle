import { NextApiRequest, NextApiResponse } from 'next';

export default function GET(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  if (username === 'user' && password === 'password') {
    return res.status(200).json({ user: { id: 1, name: 'User', email: 'user@example.com' } });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
}