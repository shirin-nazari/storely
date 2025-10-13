'use client';
import React from 'react';
import storely from '@/public/storely.png';
import Image from 'next/image';
import CategorySelect from './CategorySelect';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="relative bg-blue-100 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 text-black flex items-center justify-evenly w-full">
      <Image src={storely} alt="logo" className="w-20 h-15" />
      <ul className="flex justify-between w-30">
        <li>Home</li>
        <li>Products</li>
      </ul>
      <form action="" className="flex justify-between w-100">
        <div className="flex justify-between w-50 h-10 items-center bg-indigo-50 p-2 rounded-2xl">
          <input type="text" placeholder="Search Product" className="" />
          <FaSearch />
        </div>
        <CategorySelect />
      </form>
      <FaShoppingCart />
    </nav>
  );
};

export default Navbar;
