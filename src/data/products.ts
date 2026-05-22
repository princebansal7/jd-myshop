export interface Product {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "all",        name: "All Products",         icon: "🛒" },
  { id: "paper",      name: "Paper Products",        icon: "🧻" },
  { id: "foil",       name: "Aluminium & Foil",      icon: "🥡" },
  { id: "packaging",  name: "Packaging Materials",   icon: "📦" },
  { id: "cutlery",    name: "Cutlery & Straws",      icon: "🥄" },
  { id: "hygiene",    name: "Hygiene & Household",   icon: "🪣" },
  { id: "party",      name: "Party & Decoration",    icon: "🎉" },
  { id: "beverages",  name: "Beverages",             icon: "💧" },
  { id: "catering",   name: "Catering Supplies",     icon: "🍽️" },
];

export const products: Product[] = [
  // ── Paper Products ─────────────────────────────────────────────
  {
    id: "p1", name: "Paper Cups – 100ml (Small)",
    description: "Single-wall paper cups for water and small servings. Suitable for events and offices.",
    categoryId: "paper", image: "/images/products/paper-cups-small.jpg",
  },
  {
    id: "p2", name: "Paper Cups – 200ml (Medium)",
    description: "Standard paper cups perfect for tea, coffee, and cold beverages.",
    categoryId: "paper", image: "/images/products/paper-cups.jpg",
  },
  {
    id: "p3", name: "Paper Cups – 300ml (Large)",
    description: "Large disposable paper cups for juice stalls and events.",
    categoryId: "paper", image: "/images/products/paper-cups-large.jpg",
  },
  {
    id: "p4", name: "Paper Plates – 6 inch",
    description: "Small round paper plates for snacks, starters, and chaat.",
    categoryId: "paper", image: "/images/products/paper-plates.jpg",
  },
  {
    id: "p5", name: "Paper Plates – 9 inch",
    description: "Medium paper plates ideal for rice, curry, and main course.",
    categoryId: "paper", image: "/images/products/paper-plates-medium.jpg",
  },
  {
    id: "p6", name: "Paper Plates – 12 inch",
    description: "Large round paper plates for full meals and buffet service.",
    categoryId: "paper", image: "/images/products/paper-plates-large.jpg",
  },
  {
    id: "p7", name: "Paper Dona – Small",
    description: "Traditional small round paper dona bowls for chaat and street food.",
    categoryId: "paper", image: "/images/products/paper-dona.jpg",
  },
  {
    id: "p8", name: "Paper Dona – Large",
    description: "Larger paper dona bowls for sabzi, dal, and serving small portions.",
    categoryId: "paper", image: "/images/products/paper-dona-large.jpg",
  },
  {
    id: "p9", name: "Paper Bowl",
    description: "Round paper soup bowls suitable for noodles, rice, and liquid dishes.",
    categoryId: "paper", image: "/images/products/paper-bowl.jpg",
  },
  {
    id: "p10", name: "Paper Napkins / Tissue",
    description: "Soft 2-ply paper napkins for restaurants, events, and daily table use.",
    categoryId: "paper", image: "/images/products/paper-napkins.jpg",
  },
  {
    id: "p11", name: "Paper Carry Bags",
    description: "Brown kraft paper carry bags with handles. Eco-friendly packaging option.",
    categoryId: "paper", image: "/images/products/carry-bags.jpg",
  },

  // ── Aluminium & Foil ───────────────────────────────────────────
  {
    id: "f1", name: "Aluminium Foil Roll",
    description: "Heavy-duty silver aluminium foil roll for food wrapping, baking, and storage.",
    categoryId: "foil", image: "/images/products/aluminum-foil.jpg",
  },
  {
    id: "f2", name: "Foil Containers – Round",
    description: "Silver round aluminium containers ideal for packing curries and gravies.",
    categoryId: "foil", image: "/images/products/foil-containers-round.jpg",
  },
  {
    id: "f3", name: "Foil Containers – Rectangular",
    description: "Standard rectangular foil trays for packing rice, biryani, and full meals.",
    categoryId: "foil", image: "/images/products/foil-containers.jpg",
  },
  {
    id: "f4", name: "Aluminium Meal Tray",
    description: "Large flat aluminium trays used for catering, marriages, and bulk cooking.",
    categoryId: "foil", image: "/images/products/catering-tray.jpg",
  },
  {
    id: "f5", name: "Silver Dona – Small",
    description: "Shiny silver foil dona bowls for festive serving and puja prasad.",
    categoryId: "foil", image: "/images/products/silver-dona-small.jpg",
  },
  {
    id: "f6", name: "Silver Dona – Medium",
    description: "Medium silver foil dona for dal, chutney, and sabzi portions.",
    categoryId: "foil", image: "/images/products/silver-dona.jpg",
  },
  {
    id: "f7", name: "Silver Dona – Large",
    description: "Large silver foil dona suitable for weddings, bhog, and catering.",
    categoryId: "foil", image: "/images/products/silver-dona-large.jpg",
  },
  {
    id: "f8", name: "Butter Paper",
    description: "Grease-proof baking and wrapping paper for paranthas, burgers, and baked goods.",
    categoryId: "foil", image: "/images/products/butter-paper.jpg",
  },

  // ── Packaging Materials ─────────────────────────────────────────
  {
    id: "pk1", name: "Cloth Carry Bags",
    description: "Durable reusable cloth bags for grocery, gifting, and retail shopping.",
    categoryId: "packaging", image: "/images/products/cloth-bags.jpg",
  },
  {
    id: "pk2", name: "Non-Woven Carry Bags",
    description: "Lightweight non-woven bags available in multiple colours and sizes.",
    categoryId: "packaging", image: "/images/products/non-woven-bags.jpg",
  },
  {
    id: "pk3", name: "Table Cover Roll",
    description: "Coloured plastic table cover rolls for events, buffets, and catering setups.",
    categoryId: "packaging", image: "/images/products/table-cover.jpg",
  },
  {
    id: "pk4", name: "Wrapping Paper Roll",
    description: "Plain and printed wrapping rolls for gifting, packaging, and craft use.",
    categoryId: "packaging", image: "/images/products/wrapping-paper.jpg",
  },
  {
    id: "pk5", name: "Cling Film / Wrap",
    description: "Transparent cling film roll for food preservation and packaging.",
    categoryId: "packaging", image: "/images/products/cling-film.jpg",
  },

  // ── Cutlery & Straws ───────────────────────────────────────────
  {
    id: "c4", name: "Wooden Spoons",
    description: "Eco-friendly birchwood disposable spoons. Biodegradable alternative to plastic.",
    categoryId: "cutlery", image: "/images/products/wooden-spoons.jpg",
  },
  {
    id: "c5", name: "Wooden Forks",
    description: "Natural birchwood forks — sturdy, splinter-free, and compostable.",
    categoryId: "cutlery", image: "/images/products/wooden-forks.jpg",
  },
  {
    id: "c6", name: "Wooden Knives",
    description: "Smooth wooden knives for spreading butter, jam, and soft spreads.",
    categoryId: "cutlery", image: "/images/products/wooden-cutlery.jpg",
  },
  {
    id: "c8", name: "Paper / Bamboo Straws",
    description: "Eco-friendly paper and bamboo straws. Biodegradable, durable in liquids.",
    categoryId: "cutlery", image: "/images/products/straws-eco.jpg",
  },
  {
    id: "c9", name: "Toothpicks – Plain",
    description: "Round wooden toothpicks for restaurants, dining tables, and catering.",
    categoryId: "cutlery", image: "/images/products/toothpicks.jpg",
  },
  {
    id: "c10", name: "Toothpicks – Fancy / Flagged",
    description: "Decorative flagged toothpicks for canapes, sandwiches, and party platters.",
    categoryId: "cutlery", image: "/images/products/toothpicks-fancy.jpg",
  },

  // ── Hygiene & Household ────────────────────────────────────────
  {
    id: "h1", name: "Toilet Rolls",
    description: "Soft 2-ply toilet tissue rolls for homes, offices, hotels, and institutions.",
    categoryId: "hygiene", image: "/images/products/tissue-rolls.jpg",
  },
  {
    id: "h2", name: "Kitchen Paper Towel Roll",
    description: "Absorbent 2-ply kitchen towel rolls for wiping, cleaning, and cooking.",
    categoryId: "hygiene", image: "/images/products/kitchen-towel.jpg",
  },
  {
    id: "h3", name: "Facial Tissue Box",
    description: "Soft facial tissue box for everyday use. Available in single and multi-packs.",
    categoryId: "hygiene", image: "/images/products/facial-tissue.jpg",
  },
  {
    id: "h4", name: "Wet Wipes Pack",
    description: "Fragrant wet wipes for hands and face. Ideal for dining, travel, and events.",
    categoryId: "hygiene", image: "/images/products/wet-wipes.jpg",
  },

  // ── Party & Decoration ─────────────────────────────────────────
  {
    id: "pt1", name: "Birthday Balloons Pack",
    description: "Assorted latex balloons in bright colours. Pack of 50 for birthday parties.",
    categoryId: "party", image: "/images/products/birthday-supplies.jpg",
  },
  {
    id: "pt2", name: "Metallic Foil Balloons",
    description: "Shiny metallic balloons in heart, star, and number shapes for decorating.",
    categoryId: "party", image: "/images/products/metallic-balloons.jpg",
  },
  {
    id: "pt3", name: "Birthday Candles",
    description: "Coloured wax birthday candles in numerical and spiral shapes.",
    categoryId: "party", image: "/images/products/birthday-candles.jpg",
  },
  {
    id: "pt4", name: "Party Streamers & Ribbons",
    description: "Colourful crepe paper and foil streamers for hanging decoration.",
    categoryId: "party", image: "/images/products/party-streamers.jpg",
  },
  {
    id: "pt5", name: "Birthday Banners",
    description: "Happy Birthday bunting banners in various themes and designs.",
    categoryId: "party", image: "/images/products/birthday-banners.jpg",
  },
  {
    id: "pt6", name: "Party Hats",
    description: "Conical party hats in assorted colours and prints. Pack of 10.",
    categoryId: "party", image: "/images/products/party-hats.jpg",
  },
  {
    id: "pt7", name: "Party Table Cover",
    description: "Disposable plastic table covers with festive prints for birthday setups.",
    categoryId: "party", image: "/images/products/party-table-cover.jpg",
  },
  {
    id: "pt8", name: "Confetti Pack",
    description: "Bright paper and metallic confetti for celebrations and events.",
    categoryId: "party", image: "/images/products/confetti.jpg",
  },

  // ── Beverages ──────────────────────────────────────────────────
  {
    id: "bv1", name: "Mineral Water – 500ml",
    description: "Packaged drinking water (Bisleri, Kinley and other brands). Available in bulk.",
    categoryId: "beverages", image: "/images/products/water-bottles.jpg",
  },
  {
    id: "bv2", name: "Mineral Water – 1 Litre",
    description: "1-litre sealed mineral water bottles for events, weddings, and offices.",
    categoryId: "beverages", image: "/images/products/water-1l.jpg",
  },
  {
    id: "bv3", name: "Cold Drinks – Wholesale",
    description: "Pepsi, Coca-Cola, Sprite, Maaza, Mirinda in 250ml, 500ml and 600ml bottles.",
    categoryId: "beverages", image: "/images/products/cold-drinks.jpg",
  },

  // ── Catering Supplies ──────────────────────────────────────────
  {
    id: "ct1", name: "Disposable Dinner Tray",
    description: "Large flat aluminium / plastic trays for serving full meals at events.",
    categoryId: "catering", image: "/images/products/dinner-tray.jpg",
  },
  {
    id: "ct2", name: "3-Compartment Thali Plate",
    description: "Divided disposable plate for serving dal, sabzi, rice, and salad together.",
    categoryId: "catering", image: "/images/products/compartment-tray.jpg",
  },
  {
    id: "ct3", name: "Food Container with Lid",
    description: "Rectangular containers with snap-on lids for takeaway food packaging. Food-grade, leak-resistant.",
    categoryId: "catering", image: "/images/products/food-container.jpg",
  },
  {
    id: "ct4", name: "Disposable Soup Bowl with Lid",
    description: "Round disposable bowls with tight lids for soups, gravies, and liquid dishes.",
    categoryId: "catering", image: "/images/products/soup-bowl.jpg",
  },
  {
    id: "ct5", name: "Sugarcane Bagasse Plates",
    description: "100% biodegradable sugarcane fibre plates — strong, microwaveable, eco-friendly.",
    categoryId: "catering", image: "/images/products/sugarcane-plates.jpg",
  },
];
