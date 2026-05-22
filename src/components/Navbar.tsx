"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home",     href: "#home"     },
  { label: "Products", href: "#products" },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm shadow-slate-200"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2.5 flex-shrink-0"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg font-poppins leading-none">J</span>
              </div>
              <div className="leading-tight">
                <div className="font-poppins font-bold text-base text-slate-900">Jai Durga</div>
                <div className="text-blue-600 text-[10px] font-semibold tracking-widest uppercase">Disposals</div>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
          >
            <div className="p-3 space-y-1">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 text-slate-700 font-medium rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
