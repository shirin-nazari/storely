import Cards from './components/Cards';

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });
  const products = await res.json();
  return (
    <div>
      <h1>store</h1>
      <Cards products={products} />
    </div>
  );
}
