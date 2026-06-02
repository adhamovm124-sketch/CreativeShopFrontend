const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black text-slate-900 mb-6">Biz haqimizda</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            CREATIVE SHOP - bu shunchaki onlayn do'kon emas. Bu kreativlik va texnologiya uyg'unligi markazidir. 
            Biz har bir mahsulotni tanlashda sifat, dizayn va innovatsiyaga alohida e'tibor qaratamiz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-xl mb-3">Bizning maqsadimiz</h3>
              <p className="text-slate-500">Mijozlarimizga eng so'nggi va sifatli gadjetlarni yetkazib berish orqali ularning hayotini yanada kreativ qilish.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-xl mb-3">Sifat kafolati</h3>
              <p className="text-slate-500">Har bir mahsulot sotuvga chiqishidan oldin mutaxassislarimiz tomonidan sinchkovlik bilan tekshiriladi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
