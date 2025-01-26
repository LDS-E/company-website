"use client"; // important

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-white bg-[#63c6ae] text-xl uppercase font-bold py-5 px-10 block"
        >
          Logo
        </Link>

        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } flex-grow md:flex justify-around`} // Condicional para mostrar ou esconder
        >
          <ul className="flex flex-col md:flex-row list-none p-0 m-0">
            <li className="w-full md:w-auto border-b border-dotted border-white/20 text-center">
              <Link
                href="#"
                className="text-[#586165] uppercase text-sm font-semibold py-6 px-4 block hover:text-[#63c6ae] transition-all"
              >
                Home
              </Link>
            </li>
            <li className="w-full md:w-auto border-b border-dotted border-white/20 text-center">
              <Link
                href="#"
                className="text-[#586165] uppercase text-sm font-semibold py-6 px-4 block hover:text-[#63c6ae] transition-all"
              >
                About
              </Link>
            </li>
            <li className="w-full md:w-auto border-b border-dotted border-white/20 text-center">
              <Link
                href="#"
                className="text-[#586165] uppercase text-sm font-semibold py-6 px-4 block hover:text-[#63c6ae] transition-all"
              >
                Services
              </Link>
            </li>
            <li className="w-full md:w-auto border-b border-dotted border-white/20 text-center">
              <Link
                href="#"
                className="text-[#586165] uppercase text-sm font-semibold py-6 px-4 block hover:text-[#63c6ae] transition-all"
              >
                Our Business
              </Link>
            </li>
            <li className="w-full md:w-auto border-b border-dotted border-white/20 text-center">
              <Link
                href="#"
                className="text-[#586165] uppercase text-sm font-semibold py-6 px-4 block hover:text-[#63c6ae] transition-all"
              >
                How We Help
              </Link>
            </li>
            <li className="w-full md:w-auto border-b border-dotted border-white/20 text-center">
              <Link
                href="#"
                className="text-[#586165] uppercase text-sm font-semibold py-6 px-4 block hover:text-[#63c6ae] transition-all"
              >
                Take the Tour
              </Link>
            </li>
            <li className="w-full md:w-auto border-b border-dotted border-white/20 text-center">
              <Link
                href="#"
                className="text-[#586165] uppercase text-sm font-semibold py-6 px-4 block hover:text-[#63c6ae] transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleMenu}
          className="text-sm bg-transparent border-none text-[#586165] py-3 px-6 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
