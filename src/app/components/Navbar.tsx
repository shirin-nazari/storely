'use client';
import React from 'react';
import storely from '@/public/storely.png';
import Image from 'next/image';
import CategorySelect from './CategorySelect';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className=" bg-blue-100 text-black flex items-center justify-around w-full h-full">
      <Image src={storely} alt="logo" className="w-20 h-15  cursor-pointer" />
      <ul className="flex justify-between w-50  cursor-pointer">
        <li>Home</li>
        <li>Products</li>
      </ul>
      <form action="" className="flex justify-between w-[40rem] ">
        <div className="flex justify-between w-[30rem] h-10 items-center bg-indigo-50 p-2 rounded-2xl">
          <input type="text" placeholder="Search Product" className="" />
          <FaSearch className="cursor-pointer text-blue-950" />
        </div>
        <CategorySelect />
      </form>
      <FaShoppingCart className="cursor-pointer text-blue-950" />
    </nav>
  );
};

export default Navbar;
