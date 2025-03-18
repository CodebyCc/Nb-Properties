"use client";

import { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
// import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold ">NB Properties</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className=" hover:text-yellow-400">
              Home
            </Link>
            <Link href="/about" className=" hover:text-yellow-400">
              About
            </Link>
            <Link href="/services" className=" hover:text-yellow-400">
              Services
            </Link>
            <Link href="/contact" className=" hover:text-yellow-400">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg absolute w-full left-0">
          <div className="p-4 space-y-4 flex flex-col items-center">
            <Link
              href="/"
              className=" hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className=" hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className=" hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className=" hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
