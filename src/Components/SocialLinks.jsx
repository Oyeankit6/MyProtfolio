import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <section  id="contact" className="bg-[#1A202C] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Connect with Me</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* GitHub */}
          <a
            href="https://github.com/oyeankit6" // <-- Replace with your actual GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2D3748] rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition duration-300"
          >
            <FaGithub className="text-4xl mb-3" />
            <h3 className="text-xl font-semibold">GitHub</h3>
            <p className="text-gray-400 text-sm mt-1">View my code and projects</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ankit-kumar-cse" // <-- Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2D3748] rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition duration-300"
          >
            <FaLinkedin className="text-4xl mb-3" />
            <h3 className="text-xl font-semibold">LinkedIn</h3>
            <p className="text-gray-400 text-sm mt-1">Let’s connect professionally</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918930522231" // <-- Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2D3748] rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition duration-300"
          >
            <FaWhatsapp className="text-4xl mb-3" />
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <p className="text-gray-400 text-sm mt-1">Chat with me directly</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
