import { Routes, Route } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-1 mt-16">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/product/:id" element={<ProductDetailsPage />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
