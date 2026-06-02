import { Heart, ShoppingCart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { toggleWishlist } from '../store/slices/wishlistSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <button 
          onClick={() => dispatch(toggleWishlist(product))}
          className={`absolute top-4 right-4 p-2.5 rounded-full shadow-lg transition-all duration-300 ${
            isWishlisted ? 'bg-accent text-white' : 'bg-white text-slate-400 hover:text-accent'
          }`}
        >
          <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
        </button>
      </div>
      
      <div className="p-5">
        <span className="text-xs font-bold text-primary uppercase tracking-wider">{product.category}</span>
        <h3 className="mt-1 font-semibold text-slate-800 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-black text-slate-900">${product.price}</span>
          <button 
            onClick={() => dispatch(addToCart(product))}
            className="p-2.5 bg-slate-900 text-white rounded-xl hover:bg-primary transition-colors shadow-lg shadow-slate-200"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
