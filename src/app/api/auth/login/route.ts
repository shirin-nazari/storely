import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user)
    return Response.json({ error: 'Invalid credentials' }, { status: 404 });

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    return Response.json({ error: 'Invalid password..' }, { status: 404 });

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  );
  return Response.json({ token, user });
}
