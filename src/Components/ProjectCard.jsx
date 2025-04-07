import React from "react";
import { Calendar, Eye, MessageSquare, Github, Link } from "lucide-react";

const ProjectCard = ({ project, featured }) => {
  return (
    <div
      className={`bg-[#1A202C] rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className={`w-full object-cover ${
          featured ? "h-[300px]" : "h-[200px]"
        }`}
      />

      <div className="p-4 space-y-2">
        <h2 className="text-white text-lg font-semibold">{project.title}</h2>

        <div className="flex items-center text-gray-400 text-sm gap-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {project.date}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" /> 0
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" /> 0
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mt-2">{project.description}</p>

        {/* Links */}
        <div className="flex items-center gap-4 pt-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
              title="GitHub Repository"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
              title="Live Demo"
            >
              <Link className="w-5 h-5" />Live DEMO
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
