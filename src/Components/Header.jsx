import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const navItems = ['Home', 'Skills', 'Recent Projects', 'Education', 'Resume', 'Contact'];

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 bg-[#1A202C]/80 backdrop-blur-md shadow-md text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full border-2 border-cyan-400 shadow-md"
            src="/src/assets/original-ead560979b865f6fa8273e27291b810d.webp"
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide items-center">
          {navItems.map((item) => (
            <span
              key={item}
              onClick={() => {
                const id = item.toLowerCase().replace(/ /g, '');
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-cyan-400 cursor-pointer transition duration-200 ease-in-out"
            >
              {item}
            </span>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 text-lg hover:text-cyan-300 transition"
            aria-label="Toggle Theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* Burger Icon */}
        <div className="md:hidden flex items-center gap-4">
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            className="text-lg hover:text-cyan-300 transition"
            aria-label="Toggle Theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-7 h-7 text-cyan-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A202C]/95 backdrop-blur-lg px-6 py-4 space-y-4 flex flex-col items-end animate-slideDown">
          {navItems.map((item) => (
            <div
              key={item}
              onClick={() => {
                const id = item.toLowerCase().replace(/ /g, '');
                const el = document.getElementById(id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }
              }}
              className="hover:text-cyan-400 text-base cursor-pointer transition-colors duration-200"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
