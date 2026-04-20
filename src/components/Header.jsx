import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Education",
      href: "#education",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-blue-900 font-bold text-xl tracking-tight"
        >
          <span>Ovindu Jayaweera</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/94778724832"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-colors text-sm"
          >
            Hire Me
          </a>
          <a
            href="/Ovindu.pdf"
            download
            className="ml-2 bg-white border border-blue-200 text-blue-700 px-4 py-2 rounded-full font-medium transition-colors text-sm hover:bg-blue-50"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 font-medium py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/94778724832"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 font-medium py-2 border-b border-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hire Me
          </a>
          <a
            href="/Ovindu.pdf"
            download
            className="text-gray-800 font-medium py-2 border-b border-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
