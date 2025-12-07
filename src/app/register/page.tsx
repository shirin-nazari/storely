'use client';

import { FormEvent, useState } from 'react';

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setMsg(data.error);
      return;
    }

    setMsg('Signup successful! You can now login.');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" type="email" required />
      <input name="password" placeholder="Password" type="password" required />

      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Signup'}
      </button>

      <p>{msg}</p>
    </form>
  );
}
