import { useState } from "react";
import { ShoppingCart, Package } from "lucide-react";
import { Link } from "react-router";

// Intl.NumberFormat formats a number as Indian Rupees, e.g. 24999 → "₹24,999.00"
const formatPrice = (amount) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    amount,
  );

export default function ProductCard({ product }) {
  // images?.[0] uses optional chaining: safe even if `images` is undefined
  const imageUrl = product.images?.[0];

  // Track whether the image failed to load so we can show a placeholder instead
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
      {/* Image */}
      <Link to={`/product/${product._id}`} className="block">
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-50">
          {imageUrl && !imgError ? (
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <Package className="w-12 h-12 text-gray-300" />
            </div>
          )}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-semibold text-sm font-display">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Body */}
      <div className="p-4">
        {product.category?.name && (
          <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-full">
            {product.category.name}
          </span>
        )}
        <Link to={`/product/${product._id}`}>
          <h3 className="font-display font-semibold text-gray-900 text-sm mt-2 line-clamp-2 h-10 hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="font-display font-bold text-lg text-accent-500 mt-2">
          {formatPrice(product.price)}
        </p>
        <p
          className={`text-xs mt-0.5 ${product.stock > 0 && product.stock <= 5 ? "text-amber-600" : "invisible"}`}
        >
          Only {product.stock} left
        </p>

        <button
          disabled={product.stock === 0}
          className="mt-3 w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white font-medium py-2.5 px-5 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          <ShoppingCart className="w-4 h-4" />
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
