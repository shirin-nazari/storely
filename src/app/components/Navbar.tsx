import React from 'react';
import storely from '@/public/storely.png';
import Image from 'next/image';
import CategorySelect from './CategorySelect';
const Navbar = () => {
  return (
    <nav className="relative bg-blue-200 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <Image src={storely} alt="logo" className="w-20 h-15" />
      <ul>
        <li>Home</li>
        <li>Products</li>
      </ul>
      <form action="">
        <input type="text" placeholder="Search Product" />
        <CategorySelect />
      </form>
    </nav>
  );
};

export default Navbar;
