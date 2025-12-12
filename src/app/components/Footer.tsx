import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold text-white tracking-tight">
                HomeFix<span className="text-primary">.lk</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Professional cleaning services for busy homes in Sri Lanka. We
              bring the shine back to your living space with trusted care.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="hover:text-primary transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Our Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Services (Good for SEO) */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Regular Maid Service
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Sofa Shampooing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Move-in/Move-out
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>
                  No. 123, Galle Road,
                  <br />
                  Colombo 04, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+94771234567"
                  className="hover:text-white transition-colors"
                >
                  +94 77 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:hello@homefix.lk"
                  className="hover:text-white transition-colors"
                >
                  hello@homefix.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-center items-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} HomeFix.lk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
