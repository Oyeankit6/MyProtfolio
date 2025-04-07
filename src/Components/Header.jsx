import React, { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-[#1A202C]  opacity-80 text-white fixed top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center rounded-b-md rounded-[50%]" >
          <img
            className="h-10 rounded-[50%]"
            src="/src/assets/original-ead560979b865f6fa8273e27291b810d.webp"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-sm font-medium">
          {['Home', 'Blog', 'Projects', 'Open Source', 'Contact'].map((item) => (
            <span
              key={item}
              className="hover:text-cyan-400 cursor-pointer transition-colors duration-200"
            >
              {item}
            </span>
          ))}
        </nav>

        {/* Burger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4">
          {['Home', 'Blog', 'Projects', 'Open Source', 'Contact'].map((item) => (
            <div
              key={item}
              className="hover:text-cyan-400 cursor-pointer transition-colors duration-200"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
