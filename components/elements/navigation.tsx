"use client";
import Link from 'next/link';
import { useState } from 'react';
import { EmailSVG, InstagramSVG, PintarestSVG, SearchSVG } from '../SVGComponent/elements';

// import all components from SVGComponent folder and SVG object
// import * as SVG from '@/SVGComponent/elements';
// import { EmailSVG } from '@/components/SVGComponent/elements';




const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="font-normal text-base leading-7 font-lato tracking-wider box-border border-b border-gray-900 bg-white fixed left-0 right-0 z-31 transition-transform duration-250">
      <div className="font-normal text-base leading-7 font-lato tracking-wide box-border w-full mx-auto px-4 max-w-7xl grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-6 pb-6 transition duration-250 ease-in-out">
        <nav className="tracking-tighter[0.075em] font-normal text-base leading-[2.7692307692rem] font-lato">
          <ul className="font-normal text-base leading-[2.7692307692rem] font-lato tracking-[.075em] box-border pl-0 flex justify-between">
            <li className="font-normal text-base leading-[2.7692307692rem] font-lato tracking-[.075em] box-border relative inline-block w-auto">
              <Link className="no-underline text-black uppercase font-bold font-lato" href="/posts">Posts</Link>
            </li>
            <li className="font-normal text-base leading-[2.7692307692rem] font-lato tracking-[.075em] box-border relative inline-block w-auto">
              <Link className="no-underline text-black uppercase font-bold font-lato" href="/my-looks">Trends</Link>
            </li>
            <li className="font-normal text-base leading-[2.7692307692rem] font-lato tracking-[.075em] box-border relative inline-block w-auto">
              <Link className="no-underline text-black uppercase font-bold bg-transparent font-lato" href="/shop">Shops</Link>
              {/* when user is logged in then shops will be my shop -> my products */}
            </li>
          </ul>
        </nav>
        <div className="navigation__logo svg font-normal text-base leading-[2.7692307692rem] font-lato tracking-[.075em] box-border max-h-[55px] max-w-[90%] mx-auto relative">
          <Link href="#"></Link>
        </div>
        <div className="font-normal text-base leading-7 font-serif tracking-tighter box-border justify-start text-center">
          <div className="font-normal text-base leading-7 font-serif tracking-tighter box-border relative inline-block" data-modal="subscribe">
            <Link className="no-underline text-black uppercase font-bold" href="/subscribe">Subscribe</Link>
          </div>
        </div>
        <nav className="font-normal text-base leading-7 font-Lato tracking-tighter box-border flex justify-between mr-3">
          <Link className="text-base leading-7 font-Lato tracking-tighter box-border bg-transparent text-black no-underline uppercase font-bold touch-manipulation inline-flex" href="https://instagram.com/fashionanywhere/">
            <InstagramSVG />
          </Link>
          <Link className="text-base leading-7 font-Lato tracking-tighter box-border bg-transparent text-black no-underline uppercase font-bold touch-manipulation inline-flex" href="https://pinterest.com/fashionanywhere/">
            <PintarestSVG/>
          </Link>
          <Link className="text-base leading-7 font-Lato tracking-tighter box-border bg-transparent text-black no-underline uppercase font-bold touch-manipulation inline-flex" href="#modal-search">
            <SearchSVG/>
          </Link>
          <Link className="text-base leading-7 font-Lato tracking-tighter box-border bg-transparent text-black no-underline uppercase font-bold touch-manipulation inline-flex" href="mailto:ahsabbir103@gmail.com">
            <EmailSVG/>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;



