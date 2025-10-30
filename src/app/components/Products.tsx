'use client';
import { addToCart } from '@/src/redux/cartSlice';
import Image from 'next/image';
import React from 'react';
import useSWR from 'swr';
import { RootState } from '@/src/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import ExpandableText from './ExpandableText';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Products() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: RootState) => state.category.selectedCategory
  );
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const { data: products, error } = useSWR(
    'http://localhost:3000/api/products',
    fetcher
  );
  if (error) return <p>Error Loading...</p>;
  if (!products) return <p>Loading...</p>;

  const filteredProducts = products
    .filter((p: any) =>
      selectedCategory === '' ? true : p.category === selectedCategory
    )
    .filter((p: any) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="w-full flex flex-wrap items-center justify-evenly gap-6 p-4">
      {filteredProducts.map((item: any) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg bg-[#C6BEB3] w-xl h-lg"
          key={item.id}
        >
          <img
            className="w-fit h-60 m-auto"
            src={item.images[0]}
            alt={item.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#DC4123]">
              {item.title}
            </div>
            <ExpandableText
              classname="text-[#793937] text-base"
              text={item.description}
            />
            {/* <p className=" ">{item.description}</p> */}
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="inline-block bg-red-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              {item.price}
            </button>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#793937] mr-2 mb-2">
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
