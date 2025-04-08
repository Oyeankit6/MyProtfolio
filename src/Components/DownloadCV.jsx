import React from "react";

const DownloadCV = () => {

    const cvUrl = "/src/assets/ANKITResume!.pdf";

  return (
    <section id="resume" className="bg-[#1A202C] py-12 px-4 text-white flex flex-col items-center justify-center">
    <h2 className="text-3xl font-bold mb-4">Resume</h2>
    <p className="text-lg mb-6 text-gray-300 text-center max-w-xl">
      Want to know more about me? Download or view my resume below.
    </p>

    <div className="flex gap-4">
      {/* Download CV Button */}
      <a
        href={cvUrl}
        download
        className="bg-white text-[#1A202C] font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-200 transition duration-300"
      >
        Download CV
      </a>

      {/* Open CV Button */}
      <a
        href={cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white text-white font-semibold px-6 py-3 rounded-2xl hover:bg-white hover:text-[#1A202C] transition duration-300"
      >
        Open CV
      </a>
    </div>
  </section>
  );
};

export default DownloadCV;
