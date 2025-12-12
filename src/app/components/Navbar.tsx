"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-secondary tracking-tight">
              HomeFix<span className="text-primary">.lk</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-secondary-light hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-primary/20"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-secondary-light hover:text-primary font-medium text-lg py-2 border-b border-slate-50 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary hover:bg-primary-hover text-white text-center py-3 rounded-lg font-semibold mt-2"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
