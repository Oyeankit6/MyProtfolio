import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A202C] text-white py-10 px-4 border-t border-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Left: Personal Info */}
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-lg font-semibold">Ankit Kumar</h3>
          <p className="text-gray-400">Frontend Developer | MERN Stack Enthusiast</p>
          <p className="text-gray-400">Email: Ankit.kumar.cse20@gmail.com</p>
        </div>

        {/* Center: Quick Links */}
        <div className="text-center">
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-400">
            {["Home", "Skills", "Recent Projects", "Education", "Resume", "Contact"].map((item) => (
              <li
                key={item}
                onClick={() => {
                  const id = item.toLowerCase().replace(" ", "");
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Social Media & Back to Top */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-5 text-xl">
            <a href="https://github.com/oyeankit6" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ankit-kumar-cse" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/8930522231" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaWhatsapp />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-cyan-400 hover:text-white transition"
          >
            <FaArrowUp /> Back to top
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Ankit Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
