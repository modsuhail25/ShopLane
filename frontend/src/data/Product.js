/* ─── Dummy data (replace with real API calls later) ─────── */

export const CATEGORIES = [
  { _id: "1", name: "Electronics" },
  { _id: "2", name: "Fashion" },
  { _id: "3", name: "Home & Kitchen" },
  { _id: "4", name: "Books" },
  { _id: "5", name: "Sports" },
  { _id: "6", name: "Beauty" },
];

export const PRODUCTS = [
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
