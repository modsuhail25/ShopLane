import { ShoppingBag, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ShoppingBag className="w-5 h-5 text-primary-400" />
              <span className="font-display font-bold text-lg text-white">
                ShopLane
              </span>
            </div>
            <p className="text-sm leading-relaxed">Shop smart. Shop fast.</p>
            <p className="text-xs mt-3 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" />{" "}
              in Kerala
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4">
              Shop
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <div
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  All Products
                </div>
              </li>
              <li>
                <div
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  Categories
                </div>
              </li>
              <li>
                <div
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  New Arrivals
                </div>
              </li>
              <li>
                <div
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  Best Sellers
                </div>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4">
              Account
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <div
                  to="/profile"
                  className="hover:text-white transition-colors"
                >
                  My Profile
                </div>
              </li>
              <li>
                <div
                  to="/orders"
                  className="hover:text-white transition-colors"
                >
                  My Orders
                </div>
              </li>
              <li>
                <div to="/cart" className="hover:text-white transition-colors">
                  Cart
                </div>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4">
              Info
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <div to="/" className="hover:text-white transition-colors">
                  About
                </div>
              </li>
              <li>
                <div to="/" className="hover:text-white transition-colors">
                  Contact
                </div>
              </li>
              <li>
                <div to="/" className="hover:text-white transition-colors">
                  Privacy Policy
                </div>
              </li>
              <li>
                <div to="/" className="hover:text-white transition-colors">
                  Terms
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} ShopLane. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
