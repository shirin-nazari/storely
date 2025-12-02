'use client';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
    });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-amber-500">
      <input name="email" placeholder="email" />
      <input name="password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}
