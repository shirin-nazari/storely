// import { prisma } from '@/lib/prisma';
// import bcrypt from 'bcryptjs';

// export async function POST(req: Request) {
//   const { name, email, password } = await req.json();

//   const exists = await prisma.user.findUnique({ where: { email } });
//   if (exists) return Response.json({ error: 'User Exists' }, { status: 400 });

//   const hashed = await bcrypt.hash(password, 10);
//   const user = await prisma.user.create({
//     data: { name, email, password: hashed },
//   });

//   return Response.json(user);
// }
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // آیا کاربر وجود دارد؟
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // هش کردن پسورد
    const hashedPassword = await bcrypt.hash(password, 10);

    // ساخت کاربر
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: 'User created successfully',
      user: { id: newUser.id, email: newUser.email, name: newUser.name },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
