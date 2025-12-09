import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return Response.json({ error: 'Unauthorized' });

  const data = await req.json();

  await prisma.cart.upsert({
    where: { userId: session?.user?.id },
    update: { items: data.items },
    create: { userId: session?.user?.id, items: data.items },
  });

  return Response.json({ success: true });
}
