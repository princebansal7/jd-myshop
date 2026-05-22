"use client";

import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook } from "react-icons/fi";

const quickLinks = [
  { label: "Home",     href: "#home"     },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

const productCategories = [
  "Paper Cups & Plates",
  "Foil Containers & Dona",
  "Carry Bags & Packaging",
  "Wooden & Eco Cutlery",
  "Party & Birthday Supplies",
  "Catering Disposables",
  "Beverages – Wholesale",
  "Hygiene & Tissue Products",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800" />

      {/* Subtle BG orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-800/15 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative z-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg font-poppins">J</span>
              </div>
              <div>
                <div className="font-poppins font-bold text-lg text-white">Jai Durga</div>
                <div className="text-blue-400 text-xs font-semibold tracking-widest uppercase">Disposals</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Your one-stop shop for disposable products, packaging, party supplies, and catering items
              in Pinjore, Haryana. Serving the community for over a decade.
            </p>
            <div className="flex gap-2">
              {[
                { icon: FiInstagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
                { icon: FiFacebook, href: "#",  label: "Facebook",  color: "hover:text-blue-400" },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                   className={`w-8 h-8 bg-white/8 border border-white/10 rounded-lg flex items-center justify-center text-white/40 hover:bg-white/15 transition-all ${s.color}`}>
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-5 flex items-center gap-2">
              <div className="w-4 h-0.5 bg-blue-500" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product categories */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-5 flex items-center gap-2">
              <div className="w-4 h-0.5 bg-blue-500" />
              Our Products
            </h4>
            <ul className="space-y-2.5">
              {productCategories.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => scrollTo("#products")}
                    className="text-white/50 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors flex-shrink-0" />
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-5 flex items-center gap-2">
              <div className="w-4 h-0.5 bg-blue-500" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiMapPin className="text-blue-400" size={14} />
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  Shop No. 47, Shiva Complex,<br />
                  Near Khera Hospital,<br />
                  Pinjore, Haryana – 134102
                </p>
              </div>
              <a href="tel:+919996807166" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-blue-400" size={14} />
                </div>
                <span className="text-white/50 text-sm group-hover:text-blue-400 transition-colors">
                  +91-9996807166
                </span>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 text-xs">🕐</span>
                </div>
                <div className="text-white/50 text-sm">
                  Mon: 10:30 AM – 7:00 PM<br />
                  Tue – Sun: 9:30 AM – 8:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-7 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm text-center">
            © {new Date().getFullYear()} &nbsp; Jai Durga Disposals. All rights reserved. &nbsp;·&nbsp; Pinjore, Haryana, India.
          </p>
          <div className="flex items-center gap-3 text-white/30 text-xs">
            <span>Retail &amp; Wholesale</span>
            <span>·</span>
            <span>Est. 2010+</span>
            <span>·</span>
            <span>Pinjore, Haryana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
