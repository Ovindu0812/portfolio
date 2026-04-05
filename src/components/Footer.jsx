import React from "react";
import { Code2, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-gray-900 font-bold text-xl tracking-tight">
            <Code2 className="w-6 h-6 text-blue-600" />
            <span>Ovindu Jayaweera</span>
          </div>

          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ovindu Jayaweera — Computer Science Student @ SLIIT. All
            rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Ovindu0812"
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
