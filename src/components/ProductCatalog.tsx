"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  LuLayoutGrid, LuNewspaper, LuLayers, LuPackage, LuUtensils,
  LuSparkles, LuPartyPopper, LuGlassWater, LuChefHat,
} from "react-icons/lu";
import { products, categories, type Product } from "@/data/products";

// Icon + color per category
const categoryMeta: Record<string, { icon: IconType; bg: string; iconColor: string }> = {
  all:        { icon: LuLayoutGrid,  bg: "bg-blue-50",    iconColor: "text-blue-400"   },
  paper:      { icon: LuNewspaper,   bg: "bg-amber-50",   iconColor: "text-amber-400"  },
  foil:       { icon: LuLayers,      bg: "bg-slate-100",  iconColor: "text-slate-400"  },
  packaging:  { icon: LuPackage,     bg: "bg-emerald-50", iconColor: "text-emerald-400"},
  cutlery:    { icon: LuUtensils,    bg: "bg-orange-50",  iconColor: "text-orange-400" },
  hygiene:    { icon: LuSparkles,    bg: "bg-sky-50",     iconColor: "text-sky-400"    },
  party:      { icon: LuPartyPopper, bg: "bg-pink-50",    iconColor: "text-pink-400"   },
  beverages:  { icon: LuGlassWater,  bg: "bg-cyan-50",    iconColor: "text-cyan-400"   },
  catering:   { icon: LuChefHat,     bg: "bg-violet-50",  iconColor: "text-violet-400" },
};

function ProductCard({ product, categoryName, priority = false }: { product: Product; categoryName: string; priority?: boolean }) {
  const [imgError, setImgError] = useState(false);
  const meta = categoryMeta[product.categoryId] ?? categoryMeta.all;
  const Icon = meta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3 }}
      className="product-card"
    >
      <div className={`relative h-44 rounded-t-2xl overflow-hidden ${meta.bg}`}>
        {imgError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
            <Icon size={52} className={`${meta.iconColor} opacity-60`} />
            <span className="text-xs text-slate-400 text-center leading-snug font-medium">
              {product.name}
            </span>
          </div>
        ) : (
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            className="object-contain p-3"
            onError={() => setImgError(true)}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}
      </div>
      <div className="p-4">
        <span className="badge-category">{categoryName}</span>
        <h3 className="font-semibold text-slate-800 text-sm leading-snug mt-2 mb-1">
          {product.name}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = useMemo(
    () => activeCategory === "all" ? products : products.filter(p => p.categoryId === activeCategory),
    [activeCategory]
  );

  const categoryMap = useMemo(
    () => Object.fromEntries(categories.map(c => [c.id, c.name])),
    []
  );

  const countByCategory = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    for (const p of products) counts[p.categoryId] = (counts[p.categoryId] || 0) + 1;
    return counts;
  }, []);

  return (
    <section id="products" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-3 tracking-wide">
            Our Products
          </span>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Browse Our Product Range
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            50+ products across 8 categories. Visit our store in Pinjore to see the full range and get the best prices.
          </p>
        </div>

        <div className="flex gap-8 items-start">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl border border-slate-200 p-3 shadow-card">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2 pt-1">
                Categories
              </p>
              {categories.map(cat => {
                const meta = categoryMeta[cat.id] ?? categoryMeta.all;
                const Icon = meta.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`sidebar-item ${activeCategory === cat.id ? "active" : ""}`}
                  >
                    <Icon size={16} className={activeCategory === cat.id ? "text-blue-600" : "text-slate-400"} />
                    <span className="flex-1 text-left">{cat.name}</span>
                    <span className={`text-xs rounded-full px-2 py-0.5 font-medium ${
                      activeCategory === cat.id
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-100 text-slate-500"
                    }`}>
                      {countByCategory[cat.id] || 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Product area */}
          <div className="flex-1 min-w-0">
            {/* Mobile chips */}
            <div
              className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-5 -mx-4 px-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map(cat => {
                const meta = categoryMeta[cat.id] ?? categoryMeta.all;
                const Icon = meta.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                      activeCategory === cat.id
                        ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300"
                    }`}
                  >
                    <Icon size={13} />
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Count */}
            <p className="text-sm text-slate-500 mb-5">
              Showing{" "}
              <span className="font-semibold text-slate-700">{filteredProducts.length}</span>{" "}
              product{filteredProducts.length !== 1 ? "s" : ""}
              {activeCategory !== "all" && (
                <span>
                  {" "}in{" "}
                  <span className="text-blue-700 font-medium">{categoryMap[activeCategory]}</span>
                </span>
              )}
            </p>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  categoryName={categoryMap[product.categoryId] || ""}
                  priority={index < 4}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
