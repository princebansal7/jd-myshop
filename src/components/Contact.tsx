"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMapPin, FiClock, FiNavigation, FiInfo } from "react-icons/fi";

const hours = [
  { day: "Monday",     time: "10:30 AM – 7:00 PM", open: true  },
  { day: "Tue – Sun",  time: "9:30 AM – 8:00 PM",  open: true  },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

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
            Find Us
          </span>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Visit Our <span className="text-blue-600">Store</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
            Come in for the full range and the best prices on bulk and wholesale orders.
          </p>
        </motion.div>

        {/* Card: info panel + map */}
        <div className="grid lg:grid-cols-5 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">

          {/* ── Left: Info Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 relative flex flex-col bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden"
          >
            {/* Decorative bg */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-500/10 rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full p-7 md:p-8">

              {/* Store branding */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-lg font-poppins leading-none">J</span>
                </div>
                <div>
                  <p className="font-poppins font-bold text-white text-base leading-tight">Jai Durga Disposals</p>
                  <p className="text-blue-400 text-[10px] font-semibold tracking-widest uppercase">Retail &amp; Wholesale</p>
                </div>
              </div>

              {/* Address */}
              <div className="mb-7">
                <div className="flex items-center gap-2 mb-3">
                  <FiMapPin className="text-blue-400" size={13} />
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Store Address</span>
                </div>
                <div className="pl-4 border-l-2 border-blue-700/50 space-y-0.5">
                  <p className="text-white font-semibold text-sm">Shop No. 47, Shiva Complex</p>
                  <p className="text-white/60 text-sm">Near Khera Hospital</p>
                  <p className="text-white/60 text-sm">Pinjore, Haryana – 134101</p>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-7">
                <div className="flex items-center gap-2 mb-3">
                  <FiClock className="text-blue-400" size={13} />
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Business Hours</span>
                </div>
                <div className="pl-4 border-l-2 border-blue-700/50 space-y-2.5">
                  {hours.map((h, i) => (
                    <div key={i} className="flex items-center justify-between gap-3">
                      <span className="text-white/60 text-xs w-20 flex-shrink-0">{h.day}</span>
                      <div className="flex-1 h-px bg-white/10" />
                      <span className="text-white text-xs font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Landmark pill */}
              <div className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3.5 mb-8">
                <FiInfo className="text-blue-400 flex-shrink-0 mt-0.5" size={13} />
                <p className="text-white/55 text-xs leading-relaxed">
                  Near <span className="text-white/80 font-medium">Khera Hospital</span> and{" "}
                  <span className="text-white/80 font-medium">Pinjore Bus Stand</span> inside Shiva Complex market.
                </p>
              </div>

              {/* Open now badge + CTA */}
              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">Open Today</span>
                </div>
                <a
                  href="https://maps.google.com/?q=30.79837238231943,76.9165610566743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-blue-950/60"
                >
                  <FiNavigation size={14} />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Map ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
            className="lg:col-span-3 relative min-h-[340px] md:min-h-[480px] lg:min-h-0"
          >
            <iframe
              src="https://maps.google.com/maps?q=Jai+Durga+Disposals,+Shop+No.+47,+Shiva+Complex,+Near+Khera+Hospital,+Pinjore,+Haryana&z=17&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jai Durga Disposals – Pinjore, Haryana"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
