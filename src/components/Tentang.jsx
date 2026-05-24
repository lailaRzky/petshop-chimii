function Tentang() {
  return (
    <section aria-labelledby="judul-tentang" className="max-w-2xl mx-auto text-center">
      <h2 id="judul-tentang" className="text-2xl font-extrabold text-gray-800 mb-3">
        Tentang Petshop Chimii
      </h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        Petshop Chimii hadir untuk memenuhi semua kebutuhan kucing kesayanganmu.
        Produk kami 100% original dan telah dipercaya ribuan pelanggan.
      </p>
      <div className="grid grid-cols-2 gap-4 text-left">
        {[
          { judul:"Semantic HTML", ket:"header, nav, main, section, article, footer, form, fieldset, label" },
          { judul:"Tailwind CSS",  ket:"Grid responsif, Flexbox, hover, transition, shadow, gradient" },
          { judul:"React Hooks",   ket:"useState, useEffect, Conditional Rendering" },
          { judul:"Axios API",     ket:"Fetch 12 produk dari Fake Store API, loading, error handling" },
        ].map(t => (
          <article key={t.judul}
            className="bg-white rounded-2xl p-5 shadow hover:shadow-lg hover:-translate-y-1
                       border border-orange-100 transition-all duration-300">
            <h3 className="font-bold text-gray-800 text-sm mb-1">{t.judul}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">{t.ket}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Tentang;