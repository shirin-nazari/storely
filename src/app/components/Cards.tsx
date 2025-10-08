'use client';
import { addToCart } from '@/src/redux/cartSlice';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function Products({ products }: { products: any[] }) {
  const dispatch = useDispatch();
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
            <button
              onClick={() => dispatch(addToCart(item))}
              className="inline-block bg-cyan-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
