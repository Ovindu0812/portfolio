import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Student Management System",
      description:
        "A comprehensive full-stack application built for a university assignment to manage student records, courses, and grades.",
      tech: ["Java", "Spring Boot", "MySQL", "React"],
      github: "https://github.com/Ovindu0812",
      demo: "#",
      featured: true,
    },
    {
      title: "E-Commerce Web App",
      description:
        "A modern e-commerce platform with user authentication, product catalog, shopping cart, and payment integration mockups.",
      tech: ["MERN Stack", "Tailwind CSS", "Redux"],
      github: "https://github.com/Ovindu0812",
      demo: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that fetches real-time data from a public API and displays forecasts with dynamic UI.",
      tech: ["JavaScript", "HTML/CSS", "REST API"],
      github: "https://github.com/Ovindu0812",
      demo: "#",
      featured: false,
    },
    {
      title: "Task Tracker CLI",
      description:
        "A command-line interface tool built in Python to help users manage their daily tasks and productivity.",
      tech: ["Python", "SQLite"],
      github: "https://github.com/Ovindu0812",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600">
              A selection of my recent academic and personal projects.
            </p>
          </div>
          <a
            href="https://github.com/Ovindu0812"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            View all on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
              }}
              className={`group relative rounded-2xl border border-gray-200 p-8 hover:border-blue-300 transition-colors bg-white ${
                project.featured ? "md:col-span-1" : "md:col-span-1"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Folder className="w-6 h-6" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-sm font-medium text-gray-500">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
