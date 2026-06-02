import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, removeFromCart, updateQuantity } from '../store/slices/cartSlice';

const CartSidebar = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.cart);
  
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => dispatch(toggleCart())}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl transform transition-transform duration-500 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-primary" />
              <h2 className="text-xl font-bold">Savat ({items.length})</h2>
            </div>
            <button onClick={() => dispatch(toggleCart())} className="p-2 hover:bg-white rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-4">
                <ShoppingBag size={64} strokeWidth={1} />
                <p className="text-lg font-medium">Savatingiz hozircha bo'sh</p>
                <button 
                  onClick={() => dispatch(toggleCart())}
                  className="btn-primary"
                >
                  Xaridni boshlash
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-24 h-24 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="font-bold text-slate-800 line-clamp-1">{item.name}</h3>
                        <button 
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-slate-300 hover:text-accent transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-sm font-bold text-primary mt-1">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                          className="p-1 hover:bg-slate-100 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                          className="p-1 hover:bg-slate-100 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 bg-slate-50 border-t">
              <div className="flex justify-between items-center mb-6">
                <span className="text-slate-500 font-medium">Jami summa:</span>
                <span className="text-2xl font-black text-slate-900">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-[0.98]">
                Rasmiylashtirish
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
