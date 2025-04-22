"use client";

import { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import home1 from "../../public/logo-whi.png";
import Image from "next/image";
// import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          {/* <div className="text-xl font-bold ">NB Properties</div> */}
          <Link href="/">
            <Image
              src={home1}
              alt="Logo of Nb"
              width={130}
              height={130}
              className="mt-2"
              onClick={() => setIsOpen(false)}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className=" hover:text-yellow-400">
              Home
            </Link>
            <Link href="/projects" className=" hover:text-yellow-400">
              Projects
            </Link>

            <Link href="/services" className=" hover:text-yellow-400">
              Services
            </Link>

            <Link href="/about" className=" hover:text-yellow-400">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
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
        <div
          className={
            isOpen
              ? "md:hidden bg-gray-900 shadow-lg motion-preset-slide-right-lg "
              : "motion-preset-slide-left-lg"
          }
        >
          <div className="p-4 space-y-4 flex flex-col items-center">
            <Link
              href="/"
              className=" hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className=" hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>

            <Link
              href="/services"
              className=" hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/about"
              className=" hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// previous style for navbar
// absolute w-full left-0 fixed top-0
