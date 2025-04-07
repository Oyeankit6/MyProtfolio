import React from 'react';

export const Prsnlinfo = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#1A202C] text-white">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-6">
        <img
          src="/src/assets/Ankit.png"
          alt="Ankit Kumar"
          className="rounded-full shadow-2xl w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover transition duration-300"
        />
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 pb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          👋 Hi, I'm{" "}
          <span className="text-teal-400 border-r-2 border-teal-400 animate-pulse">
            Ankit Kumar
          </span>
        </h1>

        <p className="text-base sm:text-lg mb-4 max-w-xl">
          I'm a passionate and result-driven software engineer with a strong
          foundation in frontend development and solid experience in backend
          technologies.
        </p>

        <p className="text-sm sm:text-base text-gray-300 max-w-xl">
          I enjoy building projects that solve real-world problems—whether it’s
          a food delivery clone, a task manager, or a role-based access control
          system. I'm a big believer in clean code, team collaboration, and
          continuous learning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-md justify-center md:justify-start">
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/ankit-kumar-cse"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-teal-400 text-teal-300 px-6 py-3 rounded-md hover:bg-teal-400 hover:text-black transition-colors duration-300 w-full sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.99h5V24H0zM7.45 8.99h4.77v2.05h.07c.67-1.26 2.32-2.59 4.77-2.59 5.1 0 6.04 3.37 6.04 7.75V24h-5v-6.56c0-1.56-.03-3.58-2.18-3.58-2.19 0-2.52 1.71-2.52 3.47V24h-5V8.99z" />
            </svg>
            LinkedIn
          </a>

          {/* Schedule a Meeting Button */}
          <a
            href="https://calendly.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-teal-300 text-black px-6 py-3 rounded-md hover:bg-teal-400 transition-colors duration-300 w-full sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Schedule a Meeting
          </a>
        </div>
      </div>
    </div>
  );
};
