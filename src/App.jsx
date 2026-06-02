import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import About from './pages/About';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <CartSidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 font-medium">
            &copy; 2026 <span className="text-primary font-black">CREATIVE SHOP</span>. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
