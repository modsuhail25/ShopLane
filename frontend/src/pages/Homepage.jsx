import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
  Zap,
  Star,
} from "lucide-react";
import ProductCard from "../components/Products/ProductCard";

/* ─── Dummy data (replace with real API calls later) ─────── */

const CATEGORIES = [
  { _id: "1", name: "Electronics" },
  { _id: "2", name: "Fashion" },
  { _id: "3", name: "Home & Kitchen" },
  { _id: "4", name: "Books" },
  { _id: "5", name: "Sports" },
  { _id: "6", name: "Beauty" },
];

const PRODUCTS = [
  {
    _id: "p1",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    price: 24999,
    stock: 12,
    category: { name: "Electronics" },
    images: ["https://m.media-amazon.com/images/I/61ddahpESML._SL1500_.jpg"],
  },
  {
    _id: "p2",
    name: "Apple iPhone 15 Pro — Natural Titanium",
    price: 134900,
    stock: 5,
    category: { name: "Electronics" },
    images: [
      "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.xlarge_2x.jpg",
    ],
  },
  {
    _id: "p3",
    name: "Nike Air Max 270 Running Shoes",
    price: 8995,
    stock: 20,
    category: { name: "Fashion" },
    images: [
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/e/ce80759Nike-AH8050-002_1.jpg?rnd=20200526195200&tr=w-1080",
    ],
  },
  {
    _id: "p4",
    name: "Prestige Stainless Steel Pressure Cooker 5L",
    price: 1899,
    stock: 3,
    category: { name: "Home & Kitchen" },
    images: ["https://m.media-amazon.com/images/I/5112Q1Pk6YL._SL1200_.jpg"],
  },
  {
    _id: "p5",
    name: "The Alchemist — Paulo Coelho (Paperback)",
    price: 299,
    stock: 50,
    category: { name: "Books" },
    images: ["https://m.media-amazon.com/images/I/617lxveUjYL._SL1500_.jpg"],
  },
  {
    _id: "p6",
    name: "boAt Airdopes 141 True Wireless Earbuds",
    price: 1299,
    stock: 0,
    category: { name: "Electronics" },
    images: ["https://m.media-amazon.com/images/I/71RFdy6y6LL._SL1500_.jpg"],
  },
  {
    _id: "p7",
    name: "Lakme Absolute Matte Melt Liquid Lip Colour",
    price: 549,
    stock: 30,
    category: { name: "Beauty" },
    images: [
      "https://www.bbassets.com/media/uploads/p/l/40176741_5-lakme-absolute-matte-melt-liquid-lip-colour.jpg",
    ],
  },
  {
    _id: "p8",
    name: "Boldfit Pro Gym Gloves with Wrist Support",
    price: 399,
    stock: 15,
    category: { name: "Sports" },
    images: ["https://m.media-amazon.com/images/I/81kmdQSmSEL._SL1500_.jpg"],
  },
];

/* ─── Section: Hero ──────────────────────────────────────── */

function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 min-h-[480px] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-accent-500 fill-accent-500" />
              <span className="text-xs font-medium text-primary-100">
                New arrivals every week
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Discover Products
              <br />
              <span className="text-primary-200">You'll Love</span>
            </h1>
            <p className="mt-4 text-primary-200 text-lg leading-relaxed max-w-md">
              Shop smart. Shop fast. The best deals on electronics, fashion, and
              everyday essentials — delivered to your door.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-sm">
                Shop Now <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200">
                View Categories
              </div>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-primary-200">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>4.8 / 5 rating</span>
              </div>
              <div className="w-px h-4 bg-primary-400" />
              <span>10,000+ happy customers</span>
            </div>
          </div>

          {/* Decorative product grid */}
          <div className="hidden md:grid grid-cols-2 gap-3 rotate-3">
            {[
              "https://m.media-amazon.com/images/I/71RFdy6y6LL._SL1500_.jpg",
              "https://m.media-amazon.com/images/I/81kmdQSmSEL._SL1500_.jpg",
              "https://m.media-amazon.com/images/I/617lxveUjYL._SL1500_.jpg",
              "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.xlarge_2x.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden aspect-square border border-white/20"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Category pills ────────────────────────────── */

function CategoryRow() {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-1">
          <div className="flex-shrink-0 bg-primary-500 text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200">
            All
          </div>
          {CATEGORIES.map((cat) => (
            <div
              key={cat._id}
              className="flex-shrink-0 bg-white border border-gray-200 hover:border-primary-500 hover:text-primary-600 text-gray-700 text-sm font-medium px-5 py-2 rounded-full transition-all duration-200"
            >
              {cat.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Featured products ─────────────────────────── */

function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-2xl text-gray-900">
            Featured Products
          </h2>
          <div className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors">
            View all <ArrowRight className="w-4 h-4" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Promo banner ──────────────────────────────── */

function PromoBanner() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent-50 rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6 text-accent-500" />
            </div>
            <div>
              <p className="font-display font-bold text-gray-900">
                Free Shipping
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                On all orders across India
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-primary-500" />
            </div>
            <div>
              <p className="font-display font-bold text-gray-900">
                Secure Payments
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                100% safe via Razorpay
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Why ShopLane ──────────────────────────────── */

const WHY_ITEMS = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Get your orders delivered within 2–5 business days anywhere in India.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "Every transaction is encrypted and protected by Razorpay.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    desc: "Not satisfied? Return within 7 days — no questions asked.",
  },
];

function WhyShopLane() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-2xl text-gray-900 text-center mb-10">
          Why ShopLane?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Destructuring `icon: Icon` renames the field to `Icon` so JSX treats it as a component */}
          {WHY_ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all duration-200"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-primary-500" />
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div>
      <Hero />
      <CategoryRow />
      <FeaturedProducts />
      <PromoBanner />
      <WhyShopLane />
    </div>
  );
}
