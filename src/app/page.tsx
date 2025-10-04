import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>store</h1>
      <p>description in store</p>
      <Link href="/products">products</Link>
    </div>
  );
}
