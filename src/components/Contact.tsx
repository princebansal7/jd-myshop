"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMapPin, FiClock } from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMapPin,
    title: "Store Address",
    lines: [
      "Shop No. 47, Shiva Complex",
      "Near Khera Hospital",
      "Pinjore, Haryana – 134101",
    ],
    gradient: "from-blue-500 to-blue-700",
    action: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=30.79837238231943,76.9165610566743",
    },
  },
  {
    icon: FiClock,
    title: "Business Hours",
    lines: [
      "Monday: 10:30 AM – 7:00 PM",
      "Tue – Sun: 9:30 AM – 8:00 PM",
    ],
    gradient: "from-slate-400 to-slate-600",
    action: null,
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-3 tracking-wide">
            Contact Us
          </span>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Visit or <span className="text-blue-600">Get in Touch</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            For wholesale inquiries, bulk orders, or directions — we&apos;re always happy to help!
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10 max-w-xl mx-auto">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 shadow-card border border-slate-100 hover:shadow-card-hover hover:border-blue-100 transition-all group"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                <info.icon className="text-white" size={17} />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-2">{info.title}</h4>
              {info.lines.map((line, j) => (
                <p key={j} className="text-slate-500 text-xs leading-relaxed">{line}</p>
              ))}
              {info.action && (
                <a
                  href={info.action.href}
                  target={info.action.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-block mt-3 text-blue-600 text-xs font-semibold hover:text-blue-700 transition-colors"
                >
                  {info.action.label} →
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="rounded-3xl overflow-hidden shadow-xl border border-slate-200"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex items-center gap-3">
            <FiMapPin className="text-white flex-shrink-0" size={18} />
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">Jai Durga Disposals</p>
              <p className="text-blue-200 text-xs">Shop No. 47, Shiva Complex, Near Khera Hospital, Pinjore</p>
            </div>
            <a
              href="https://maps.google.com/?q=30.79837238231943,76.9165610566743"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-blue-700 text-xs font-semibold rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
            >
              Open in Maps
            </a>
          </div>
          <div className="relative w-full h-80 md:h-[420px] bg-slate-100">
            <iframe
              src="https://maps.google.com/maps?q=Jai+Durga+Disposals,+Shop+No.+47,+Shiva+Complex,+Near+Khera+Hospital,+Pinjore,+Haryana&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jai Durga Disposals – Pinjore, Haryana"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
