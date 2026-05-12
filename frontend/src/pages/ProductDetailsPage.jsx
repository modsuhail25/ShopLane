import { useState } from "react";
import { useParams, Link } from "react-router";
import { ShoppingCart, ArrowLeft, Star, Package } from "lucide-react";
import { PRODUCTS } from "../data/product";

// Formats a number as Indian Rupees, e.g. 24999 → "₹24,999.00"
const formatPrice = (amount) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    amount,
  );

export default function ProductDetailPage() {
  // useParams reads the :id segment from the URL, e.g. /products/p1 → { id: "p1" }

  const params = useParams();

  const product = PRODUCTS.find((p) => p._id === params.id);

  // Track whether the product image failed to load
  const [imgError, setImgError] = useState(false);

  // Friendly fallback when the URL contains an unknown product id
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <p className="font-display font-bold text-xl text-gray-700">
          Product not found
        </p>
        <Link
          to="/products"
          className="mt-4 inline-block text-primary-600 hover:underline text-sm"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  const imageUrl = product.images?.[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back navigation */}
      <Link
        to="/products"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary-600 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product image */}
        <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
          {imageUrl && !imgError ? (
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <Package className="w-24 h-24 text-gray-300" />
          )}
        </div>

        {/* Product info */}
        <div className="flex flex-col">
          {product.category?.name && (
            <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3">
              {product.category.name}
            </span>
          )}

          <h1 className="font-display font-bold text-2xl text-gray-900 leading-snug">
            {product.name}
          </h1>

          {/* Star rating */}
          {product.rating && (
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.round(product.rating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300 fill-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews?.toLocaleString()} reviews)
              </span>
            </div>
          )}

          <p className="font-display font-bold text-3xl text-accent-500 mt-4">
            {formatPrice(product.price)}
          </p>

          {/* Stock status */}
          <p
            className={`text-sm mt-1 font-medium ${
              product.stock === 0
                ? "text-red-500"
                : product.stock <= 5
                  ? "text-amber-600"
                  : "text-green-600"
            }`}
          >
            {product.stock === 0
              ? "Out of stock"
              : product.stock <= 5
                ? `Only ${product.stock} left in stock — order soon!`
                : "In stock"}
          </p>

          {product.description && (
            <p className="text-gray-600 text-sm leading-relaxed mt-4 border-t border-gray-100 pt-4">
              {product.description}
            </p>
          )}

          <button
            disabled={product.stock === 0}
            // onClick={handleAddToCart}
            className="mt-6 flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-5 h-5" />
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
