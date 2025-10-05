import Image from 'next/image';
import React from 'react';

export default async function Products() {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });
  const products = await res.json();
  return (
    <div className="flex flex-wrap justify-between">
      {products.map((item) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg"
          key={item.id}
        >
          <img className="w-fit h-fit" src={item.images[0]} alt={item.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">{item.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="inline-block bg-red-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              {item.price}
            </button>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
