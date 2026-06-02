import { Heart, ArrowRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div className="py-20 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-accent/10 text-accent rounded-2xl">
            <Heart size={32} fill="currentColor" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900">Sevimlilar</h1>
            <p className="text-slate-500">Sizga yoqqan barcha mahsulotlar bir joyda</p>
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <Heart size={64} className="mx-auto text-slate-200 mb-6" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Hali hech narsa qo'shilmagan</h3>
            <p className="text-slate-500 mb-8">O'zingizga yoqqan mahsulotlarni sevimlilar ro'yxatiga qo'shing.</p>
            <Link to="/" className="btn-primary inline-flex items-center gap-2">
              Mahsulotlarni ko'rish <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
