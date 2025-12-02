import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const authOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });
        if (!user) return null;
        if (user.password !== credentials?.password) return null;
        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
