import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Yangi To'plam 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Kreativ Texnologiyalar <span className="text-primary italic">Dunyosi</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Eng so'nggi gadjetlar va lifestyle mahsulotlari. Sifat va dizaynning mukammal uyg'unligini biz bilan kashf eting.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-2 group">
                Hozir xarid qilish <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all">
                Katalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                <Truck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Bepul yetkazib berish</h4>
                <p className="text-sm text-slate-500">$100 dan yuqori xaridlar uchun</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-slate-100 md:border-x px-0 md:px-8">
              <div className="p-3 bg-accent/10 text-accent rounded-2xl">
                <Star size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Eng yaxshi sifat</h4>
                <p className="text-sm text-slate-500">Saralangan va tekshirilgan</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 text-green-500 rounded-2xl">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Xavfsiz to'lov</h4>
                <p className="text-sm text-slate-500">100% kafolatlangan xavfsizlik</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900">Saralangan Mahsulotlar</h2>
              <p className="text-slate-500 mt-2">Haftaning eng ommabop tanlovlari</p>
            </div>
            <button className="text-primary font-bold hover:underline flex items-center gap-1">
              Barchasini ko'rish <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Yangi chegirmalardan xabardor bo'ling!</h2>
          <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Email manzilingizni qoldiring va birinchi xaridingiz uchun 15% chegirmaga ega bo'ling.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Email manzilingiz" 
              className="flex-1 px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-white/50 text-slate-900 font-medium"
            />
            <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors">
              Yozilish
            </button>
          </div>
        </div>
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </section>
    </div>
  );
};

export default Home;
