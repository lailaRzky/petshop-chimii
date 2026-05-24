import { useState, useEffect } from "react";
import axios from "axios";

function HalamanAPI() {
  const [data,    setData]    = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=12")
      .then(res => { setData(res.data); setLoading(false); })
      .catch(() => { setError("Gagal memuat data. Cek koneksi internetmu."); setLoading(false); });
  }, []);

  return (
    <section aria-labelledby="judul-api">
      <header className="mb-8">
        <h2 id="judul-api" className="text-xl font-extrabold text-gray-800 mb-1">Data Produk dari API</h2>
        <p className="text-gray-500 text-sm">Sumber: Fake Store API · diambil menggunakan Axios</p>
      </header>

      {loading && (
        <div className="flex flex-col items-center justify-center py-24 gap-4"
             role="status" aria-live="polite">
          <div className="w-14 h-14 border-4 border-orange-200 border-t-orange-500 rounded-full spin" />
          <p className="text-gray-500 text-sm font-medium">Mengambil data produk...</p>
        </div>
      )}

      {error && !loading && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center" role="alert">
          <p className="text-red-500 font-semibold">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {data.map(item => (
            <article key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300 overflow-hidden group border border-orange-100 p-3">
              <div className="h-28 flex items-center justify-center mb-3 overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-gray-800 font-semibold text-xs line-clamp-2 mb-1
                             group-hover:text-orange-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-orange-500 font-extrabold text-sm">${item.price}</p>
              <span className="text-xs text-gray-400 line-clamp-1">{item.category}</span>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default HalamanAPI;