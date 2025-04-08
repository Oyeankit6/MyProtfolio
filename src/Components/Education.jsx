import React from "react";

const Education = () => {
  return (
    <section id="education" className="bg-[#1A202C] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Education</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* B.Tech Card */}
          <div className="bg-[#2D3748] rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Bachelor of Technology</h3>
            <p className="text-gray-300">J.C. Bose University (YMCA), Faridabad</p>
            <p className="text-gray-400 text-sm">Oct 2020 – Jul 2024</p>
            <p className="text-gray-200 mt-3">Major: Computer Science Engineering</p>
            <p className="text-gray-200">CGPA: 7.05 / 10</p>
          </div>

          {/* 12th Card */}
          <div className="bg-[#2D3748] rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Higher Secondary (CBSE)</h3>
            <p className="text-gray-300">Adarsh Public School, Jind, Haryana</p>
            <p className="text-gray-400 text-sm">Completed: Jun 2020</p>
            <p className="text-gray-200 mt-3">Percentage: 75%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
