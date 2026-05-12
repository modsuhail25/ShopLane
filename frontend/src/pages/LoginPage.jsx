import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ShoppingBag } from "lucide-react";

export default function LoginPage() {
  // Controlled inputs: React stores each field's value in state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    // Prevent the browser from refreshing the page on form submit
    e.preventDefault();
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <ShoppingBag className="w-7 h-7 text-primary-500" />
          <span className="font-display font-bold text-2xl text-primary-600">
            ShopLane
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="font-display font-bold text-xl text-gray-900 mb-1">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500 mb-6">Log in to your account</p>

          {/* onSubmit fires when the user clicks submit or presses Enter */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
              />
            </div>

            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2.5 rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
            >
              {"Log in"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-primary-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
