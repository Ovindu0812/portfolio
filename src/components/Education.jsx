import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education Journey
          </h2>
          <p className="text-gray-600">
            My academic background and the foundation of my technical knowledge.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
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
            }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2" />

            {/* SLIIT Entry */}
            <div className="relative md:flex items-center justify-between mb-16">
              <div className="md:w-5/12 mb-8 md:mb-0 md:text-right pr-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  BSc (Hons) in Computer Science
                </h3>
                <p className="text-blue-600 font-medium text-lg mb-2">
                  Sri Lanka Institute of Information Technology (SLIIT)
                </p>
                <div className="flex items-center md:justify-end gap-2 text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>2022 - Present</span>
                </div>
                <p className="text-gray-600">
                  Focusing on software engineering principles, data structures,
                  algorithms, and modern web technologies. Maintaining a strong
                  GPA while actively participating in tech clubs.
                </p>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow-md -translate-x-1/2 flex items-center justify-center z-10">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>

              <div className="md:w-5/12 pl-8">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    Key Coursework
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Object-Oriented Programming",
                      "Data Structures & Algorithms",
                      "Database Management Systems",
                      "Web Application Development",
                      "Software Engineering",
                    ].map((course, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* High School Entry */}
            <div className="relative md:flex items-center justify-between">
              <div className="md:w-5/12 mb-8 md:mb-0 md:text-right pr-8 md:order-1">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 inline-block text-left">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      G.C.E Advanced Level - Physical Science Stream
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      School Prefect & IT Club Member
                    </li>
                  </ul>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-gray-200 rounded-full border-4 border-white shadow-md -translate-x-1/2 flex items-center justify-center z-10">
                <BookOpen className="w-4 h-4 text-gray-500" />
              </div>

              <div className="md:w-5/12 pl-8 md:pl-0 md:pr-8 md:text-right">
                <h3 className="text-xl font-bold text-gray-900">
                  Secondary Education
                </h3>
                <p className="text-gray-600 font-medium mb-2">High School</p>
                <div className="flex items-center md:justify-end gap-2 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>Completed 2021</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
