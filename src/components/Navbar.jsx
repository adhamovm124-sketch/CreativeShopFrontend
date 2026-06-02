import { ShoppingBag, Heart, Search, Menu } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCart } from '../store/slices/cartSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-black tracking-tighter text-primary">
              CREATIVE<span className="text-slate-900">SHOP</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link to="/" className="hover:text-primary transition-colors">Asosiy</Link>
              <Link to="/shop" className="hover:text-primary transition-colors">Do'kon</Link>
              <Link to="/about" className="hover:text-primary transition-colors">Biz haqimizda</Link>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center bg-slate-100 rounded-full px-4 py-2">
              <Search size={18} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Qidirish..." 
                className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-40"
              />
            </div>
            
            <Link to="/wishlist" className="relative p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Heart size={22} />
              {wishlistItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <button 
              onClick={() => dispatch(toggleCart())}
              className="relative p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="md:hidden p-2 hover:bg-slate-100 rounded-full">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
