"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMapPin, FiPhone, FiClock, FiPackage } from "react-icons/fi";

const info = [
  { icon: FiMapPin,   label: "Location",    value: "Shop No. 47, Shiva Complex, Near Khera Hospital, Pinjore" },
  { icon: FiClock,    label: "Hours",       value: "Mon 10:30 AM–7 PM  ·  Tue–Sun 9:30 AM–8 PM" },
  { icon: FiPackage,  label: "Products",    value: "50+ disposable, packaging & party products in stock" },
  { icon: FiPhone,    label: "Contact",     value: "+91-9996807166" },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4 tracking-wide">
            About Us
          </span>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
            Pinjore&apos;s Trusted{" "}
            <span className="text-blue-600">Disposable Shop</span>
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            <strong className="text-slate-800">Jai Durga Disposals</strong> is a retail and wholesale shop
            at Shiva Complex, Pinjore, serving the community for over a decade. We stock paper cups and
            plates, aluminium containers, carry bags, party supplies, cutlery, beverages, and much more.
          </p>
          <p className="text-slate-600 leading-relaxed mb-10">
            We cater to households, street food vendors, restaurants, caterers, event organisers, and
            wholesale buyers across the Pinjore–Kalka–Panchkula region.
          </p>

          {/* Quick info grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {info.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon size={15} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-sm text-slate-700 leading-snug">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              Browse Products
            </button>
            <a
              href="https://maps.google.com/?q=30.79837238231943,76.9165610566743"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FiMapPin size={15} />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
