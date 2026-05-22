"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiMapPin } from "react-icons/fi";

export default function Hero() {
  const scrollToProducts = () =>
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Gradient covers full section including area behind navbar */}
      <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Soft glow orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/25 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        {/* Content — pt-24 clears the fixed navbar (h-16 = 64px) with breathing room */}
        <div className="container-custom relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/20 rounded-full text-sm font-medium mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-blue-200 animate-pulse" />
              <FiMapPin size={12} className="text-blue-200" />
              Pinjore, Haryana &bull; Retail &amp; Wholesale
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5"
            >
              Your Neighbourhood Store for{" "}
              <span className="text-blue-200">Disposables &amp; Packaging</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-blue-100 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Paper cups, plates, foil containers, party supplies, cutlery, carry bags and more —
              available at retail and wholesale prices.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <button
                onClick={scrollToProducts}
                className="flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Browse Products
                <FiArrowDown size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
