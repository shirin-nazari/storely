'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/redux/store';

const page = () => {
  const selectedShop = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      <h1 className="font-bold text-3xl text-lime-900">Storely Shopping</h1>
      <div className="flex flex-col justify-between h-lg">
        {selectedShop.map((item) => (
          <div key={item.id} className="bg-amber-600 text-black gap-10">
            <h2>{item.title}</h2>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
