import { useState } from "react";
import { ShoppingBag, ShoppingCart, Menu, X, Search } from "lucide-react";

// NavLink passes { isActive: true/false } — this helper picks the right CSS classes
const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-primary-600 font-medium text-sm transition-colors"
    : "text-gray-600 hover:text-primary-600 text-sm transition-colors";

export default function Navbar() {
  // Controls whether the mobile slide-down menu is visible
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div to="/" className="flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-primary-500" />
          <span className="font-display font-bold text-xl text-primary-600">
            ShopLane
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          <div to="/" end className={navLinkClass}>
            Home
          </div>
          <div to="/products" className={navLinkClass}>
            Products
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <button className="text-gray-600 hover:text-primary-600 p-2 rounded-xl hover:bg-primary-50 transition-all duration-200">
            <Search className="w-5 h-5" />
          </button>

          <button className="relative text-gray-600 hover:text-primary-600 p-2 rounded-xl hover:bg-primary-50 transition-all duration-200">
            <ShoppingCart className="w-5 h-5" />
          </button>

          <div className="hidden md:flex items-center gap-2">
            <div
              to="/login"
              className="text-gray-600 hover:text-primary-600 hover:bg-primary-50 font-medium py-2 px-4 rounded-xl transition-all duration-200 text-sm"
            >
              Login
            </div>
            <div
              to="/register"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-xl transition-all duration-200 text-sm"
            >
              Register
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-600 p-2 rounded-xl hover:bg-gray-50 transition-all"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          <div
            to="/"
            onClick={() => setMobileOpen(false)}
            className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium py-2.5 px-4 rounded-xl transition-all text-sm"
          >
            Home
          </div>
          <div
            to="/products"
            onClick={() => setMobileOpen(false)}
            className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium py-2.5 px-4 rounded-xl transition-all text-sm"
          >
            Products
          </div>
          <div className="border-t border-gray-100 pt-3 mt-2 flex flex-col gap-2">
            <div
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 font-medium py-2.5 px-4 rounded-xl border border-gray-200 text-sm text-center"
            >
              Login
            </div>
            <div
              to="/register"
              onClick={() => setMobileOpen(false)}
              className="bg-primary-500 text-white font-medium py-2.5 px-4 rounded-xl text-sm text-center"
            >
              Register
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
