import PRODUK from "../data/produk";
import CardProduk from "./CardProduk";

function Beranda() {
  return (
    <section aria-labelledby="judul-beranda">
      <div className="bg-gradient-to-r from-orange-500 to-amber-400 rounded-3xl p-8 md:p-12
                      text-white text-center mb-10 shadow-xl">
        <p className="text-orange-100 text-sm font-semibold tracking-widest uppercase mb-3">
          Toko Terlengkap untuk
        </p>
        <h2 id="judul-beranda" className="text-4xl md:text-5xl font-extrabold mb-4">
          Kucing Kesayanganmu
        </h2>
        <p className="text-orange-100 max-w-md mx-auto text-sm leading-relaxed mb-6">
          Temukan semua kebutuhan kucingmu dari makanan, mainan, aksesoris, hingga perawatan.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold">Gratis Ongkir</span>
          <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold">Produk Original</span>
          <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold">Bayar di Tempat</span>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-10">
        {[
          ["/gambar/makanan.jpg","Makanan"],
          ["/gambar/mainan.jpg","Mainan"],
          ["/gambar/aksesoris.jpg","Aksesoris"],
          ["/gambar/perawatan.jpg","Perawatan"],
          ["/gambar/sanitasi.jpg","Sanitasi"]
        ].map(([gambar, label]) => (
          <div
            key={label}
            className="bg-white rounded-2xl p-5 text-center shadow hover:shadow-md
                       hover:-translate-y-1 hover:border-orange-300 border-2 border-transparent
                       transition-all duration-300 cursor-pointer group"
          >
            <img
              src={gambar}
              alt={label}
              className="w-full h-16 object-cover rounded-xl mx-auto mb-2 group-hover:scale-110 transition-transform duration-200"
            />
            <p className="text-xs font-semibold text-gray-600">{label}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-extrabold text-gray-800 mb-5">⭐ Produk Unggulan</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {PRODUK.slice(0, 4).map(p => <CardProduk key={p.id} produk={p} />)}
      </div>
    </section>
  );
}

export default Beranda;