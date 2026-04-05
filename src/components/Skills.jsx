import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Terminal } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "HTML/CSS"],
    },
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-purple-500" />,
      skills: ["React", "Tailwind CSS"],
    },
    {
      title: "Backend & DB",
      icon: <Database className="w-6 h-6 text-green-500" />,
      skills: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="w-6 h-6 text-orange-500" />,
      skills: ["Git", "GitHub", "Postman", "Figma", "Linux","Jira"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600">
            Technologies and tools I've learned and worked with during my
            studies and personal projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
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
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg"
                  >
                    {skill}
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
