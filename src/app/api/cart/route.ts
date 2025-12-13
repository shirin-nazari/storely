import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession();
  console.log(session);
  if (!session?.user?.email) {
    return NextResponse.json([], { status: 200 }); // کاربر لاگین نیست
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const cart = await prisma.cart.findUnique({
    where: { userId: user.id },
    include: {
      items: true,
    },
  });

  return NextResponse.json(cart?.items ?? []);
}
