import PRODUK from "../data/produk";
import CardProduk from "./CardProduk";

function HalamanProduk({ cari, kategori }) {
  const filtered = PRODUK.filter(p => {
    const cocokCari     = p.nama.toLowerCase().includes(cari.toLowerCase());
    const cocokKategori = kategori === "Semua" || p.kategori === kategori;
    return cocokCari && cocokKategori;
  });

  return (
    <section aria-labelledby="judul-produk">
      <div className="flex items-center justify-between mb-6">
        <h2 id="judul-produk" className="text-xl font-extrabold text-gray-800">
          Semua Produk
          <span className="text-gray-400 font-normal text-sm ml-2">({filtered.length} item)</span>
        </h2>
      </div>
      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl shadow">
          <p className="text-gray-500 font-semibold">Produk tidak ditemukan</p>
          <p className="text-gray-400 text-sm mt-1">Coba kata kunci atau kategori lain</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map(p => <CardProduk key={p.id} produk={p} />)}
        </div>
      )}
    </section>
  );
}

export default HalamanProduk;