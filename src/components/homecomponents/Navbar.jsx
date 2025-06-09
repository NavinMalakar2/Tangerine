


import React, { useState } from 'react';
import { Facebook, Instagram, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="p-5 flex items-center justify-between  text-white relative z-50 mr-5">
        {/* Left side */}
        <div className="flex items-center gap-5">
          <img
            src="https://graphicdesigneye.com/images/rastaurant-logo-design-service.png"
            alt="Logo"
            className="rounded-full w-10"
          />
          <span className="text-3xl font-bold">Tangerine</span>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-6 text-lg font-bold [&>a]:border-b-4 [&>a]:border-transparent [&>a]:hover:border-orange-500 [&>a]:transition-all [&>a]:duration-300 [&>a]:hover:-translate-y-1">
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Contact</a>
          <a href="#">Order Online</a>
          <div className="flex gap-4 [&>div]:hover:bg-amber-600 [&>div]:hover:border-white">
            <div className="p-1 rounded-full border">
              <a href="#">
                <Mail size={18} />
              </a>
            </div>
            <div className="p-1 rounded-full border">
              <a href="#">
                <Facebook size={18} />
              </a>
            </div>
            <div className="p-1 rounded-full border">
              <a href="#">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="absolute top-full right-0 w-64 bg-black shadow-lg p-5 flex flex-col gap-4 text-white md:hidden animate-slide-in">
            <a href="#" className="hover:text-orange-500">About</a>
            <a href="#" className="hover:text-orange-500">Menu</a>
            <a href="#" className="hover:text-orange-500">Contact</a>
            <a href="#" className="hover:text-orange-500">Order Online</a>
            <div className="flex gap-3 pt-2">
              <div className="p-1 rounded-full border">
                <a href="#">
                  <Mail size={18} />
                </a>
              </div>
              <div className="p-1 rounded-full border">
                <a href="#">
                  <Facebook size={18} />
                </a>
              </div>
              <div className="p-1 rounded-full border">
                <a href="#">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
