import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Available for Internships
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            Hi, I'm
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Ovindu Jayaweera
            </span>
            <br />
            Computer Science Student.
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            I'm an undergraduate at SLIIT, passionate about software
            engineering, algorithms, and building impactful digital experiences.
            Always eager to learn and tackle new challenges.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-600/20"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/Blue-Light-Blue-CV.pdf"
              download
              className="inline-flex items-center gap-2 bg-white border border-blue-200 hover:bg-blue-50 text-blue-700 px-5 py-3 rounded-full font-medium transition-all hover:shadow-md"
            >
              Download CV
            </a>

            <div className="flex items-center gap-3 ml-4">
              <a
                href="https://github.com/Ovindu0812"
                className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="relative hidden md:block"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-tr from-blue-100 to-blue-50 relative border-8 border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
              alt="Coding setup"
              className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            />

            {/* Floating badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                {"</>"}
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  Currently studying at
                </p>
                <p className="text-gray-900 font-bold">SLIIT</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
