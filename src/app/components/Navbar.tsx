'use client';
import React, { useState } from 'react';
import storely from '@/public/storely.png';
import Image from 'next/image';
import CategorySelect from './CategorySelect';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-blue-100 text-black shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src={storely}
            alt="logo"
            className="w-auto h-20  cursor-pointer py-2"
            priority
          />
        </Link>
        <ul className="hidden md:flex gap-8 cursor-pointer">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
        <form action="" className="hidden md:flex justify-between w-100 gap-4 ">
          <div className="flex flex-1 items-center gap-2 rounded-2xl bg-indigo-50 px-3 py-2">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full bg-transparent outline-none"
            />
            <FaSearch className="cursor-pointer text-blue-950" />
          </div>
          <CategorySelect />
        </form>
        <Link href="/cart" aria-label="Cart">
          <FaShoppingCart className="cursor-pointer text-xl text-blue-950" />
        </Link>
        <button
          className="ml-4 grid place-items-center text-2xl md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-blue-200 bg-blue-100 px-4 pb-4 md:hidden">
          <form className="mt-4 flex-col items-center gap-y-8 ">
            <div className="flex flex-1 items-center gap-2 rounded-2xl bg-indigo-50 px-3 py-2 ">
              <input
                type="text"
                placeholder="Search Product"
                className="w-full bg-transparent outline-none"
              />
              <FaSearch className="cursor-pointer text-blue-950" />
            </div>
            <CategorySelect classname="mt-4 py-2 w-full" />
          </form>
          <ul className="flex flex-col gap-4 pt-4">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={() => setOpen(false)}>
                Products
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
