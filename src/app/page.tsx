import Carousel from './components/Carousel';
import Products from './components/Products';

export default async function Home() {
  return (
    <div>
      <Carousel />
      <Products />
    </div>
  );
}
