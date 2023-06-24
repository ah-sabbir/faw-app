"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 right-0 z-31 transition-transform duration-250 border-b-1 border-gray-900 bg-white">
      <div className="flex items-center w-full md:w-auto">
        {/* Left Menu */}
        <ul className={`flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <li className="nav-item"><Link href="">POSTS</Link></li>
          <li className="nav-item"><Link href="">TRENDS</Link></li>
          <li className="nav-item"><Link href="">SHOP</Link></li>
        </ul>

        {/* Logo */}
        <div className="flex items-center justify-center w-full md:w-auto">
          <span className="font-bold text-lg">Fashion Anywhere</span>
        </div>
      </div>

      <div className="flex items-center mt-4 md:mt-0">
        {/* Toggle Button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path
              className={`${isOpen ? 'hidden' : 'block'}`}
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={`${isOpen ? 'block' : 'hidden'}`}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <ul className="flex content-between box-border list-disc star-[1em] end-[1em]">
          <li className="nav-item"><Link href="">Subscribe</Link></li>
          <li className="nav-item"><Link href="">Instagram</Link></li>
          <li className="nav-item"><Link href="">Facebook</Link></li>
          <li className="nav-item"><Link href="">Pinterest</Link></li>
          <li className="nav-item"><Link href="">LinkedIn</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;



