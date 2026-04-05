import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

export function Projects() {
  const universityProjects = [
    {
      title: "Genzsport",
      description:
        "University project focused on sports accessories. Core stack: Spring Boot, MySQL, and React.js. (Sport accessories - completed)",
      tech: ["Spring Boot", "MySQL", "React.js"],
      github: "https://github.com/Ovindu0812",
      demo: "#",
      featured: true,
    },
    {
      title: "Colombo Rent Car",
      description:
        "University module for a car rental service. Stack: Spring Boot, React.js, and MongoDB. Includes rent-car features and booking flows.",
      tech: ["Spring Boot", "React.js", "MongoDB"],
      github: "https://github.com/Ovindu0812",
      demo: "#",
      featured: true,
    },
  ];

  const personalProjects = [
    {
      title: "Car Sale",
      description:
        "Personal project for selling cars (SUV, Sedan, Jeep, etc.). Built with React.js, Spring Boot, and MongoDB. Features listings, filters, and contact flow.",
      tech: ["React.js", "Spring Boot", "MongoDB"],
      github: "https://github.com/Ovindu0812",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projects
            </h2>
            <p className="text-gray-600">University and personal projects.</p>
          </div>
          <a
            href="https://github.com/Ovindu0812"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            View all on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">University Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {universityProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`group relative rounded-2xl border border-gray-200 p-8 hover:border-blue-300 transition-colors bg-white`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Folder className="w-6 h-6" />
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a href={project.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} className="text-gray-400 hover:text-blue-600 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

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

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personal Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {personalProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`group relative rounded-2xl border border-gray-200 p-8 hover:border-blue-300 transition-colors bg-white`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Folder className="w-6 h-6" />
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a href={project.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} className="text-gray-400 hover:text-blue-600 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

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
        </div>
      </div>
    </section>
  );
}
