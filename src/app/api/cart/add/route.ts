import { prisma } from '@/lib/prisma';
export async function POST(req: Request) {
  const { userId, productId } = await req.json();
  let cart = await prisma.cart.findUnique({ where: { userId } });

  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId },
    });
  }
  const item = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId },
  });
  if (item) {
    await prisma.cartItem.update({
      where: { id: item.id },
      data: { quantity: { increment: 1 } },
    });
  } else {
    await prisma.cartItem.create({
      data: { cartId: cart.id, productId, quantity: 1 },
    });
  }
  return Response.json({ success: true });
}
