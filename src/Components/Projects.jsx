import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
      title: "TOMATO – Zomato Clone",
      date: "June 2023 – July 2023",
      description:
        "A scalable and optimized food-ordering application replicating Zomato's real-time data features. Key features: Shimmer, Accordion, API handling, and routing.",
      image: "/src/assets/Projects/Tomato.jpg",
      github: "https://github.com/Oyeankit6/Tomato-Full-Stack",
      live: "https://tomatofoodorder20.netlify.app",
    },
    {
      title: "WANDERLUST – Airbnb Clone",
      date: "2023",
      description:
        "A full-stack accommodation booking platform like Airbnb using MongoDB, Express, React, and Node.",
      image: "/src/assets/Projects/1718381042732.jpg",
      github: "https://github.com/ankitdev/wanderlust-airbnb",
      live: "",
    },
    {
      title: "Task Management System (MERN)",
      date: "2024",
      description:
        "Collaborative task board with role-based access, status tracking, and project assignment.",
      image: "/src/assets/Projects/TaskManagmentSystem.jpg",
      github: "https://github.com/Oyeankit6/Task_Management_system",
      live: "https://taskmanagmentbyankit.netlify.app/",
    },
    {
      title: "WhatsApp Clone",
      date: "2023",
      description:
        "Real-time chat app with typing indicators, message seen status, and socket rooms.",
      image: "/src/assets/Projects/WhatsappClone.jpg",
      github: "https://github.com/Oyeankit6/WhatsApp--MERN-STACK",
      live: "https://whatsapp-clone-app.vercel.app",
    },
    {
      title: "RBAC in Next.js",
      date: "2025",
      description:
        "Scalable and secure role-based access system in Next.js with middlewares and API routes.",
      image: "/src/assets/Projects/RBAC.png",
      github: "https://github.com/ankitdev/nextjs-rbac",
      live: "https://nextjs-rbac-system.vercel.app",
    },
  ];
  

const Projects = () => {
  return (
    <section className="bg-[#1A202C] py-16 px-4 md:px-20">
      <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Recent Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} featured={index === 0} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
