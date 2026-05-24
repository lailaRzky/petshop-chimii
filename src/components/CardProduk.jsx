import { useState } from "react";

function CardProduk({ produk }) {
  const [dikeranjang, setDikeranjang] = useState(false);

  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-xl hover:-translate-y-1
                        transition-all duration-300 overflow-hidden group border-2 border-transparent hover:border-orange-300">
      <div className="h-36 bg-gradient-to-br from-orange-100 to-amber-50
                      flex items-center justify-center
                      group-hover:scale-105 transition-transform duration-300">
        {produk.gambar ? (
          <img
            src={produk.gambar}
            alt={produk.nama}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span>{produk.nama}</span>
        )}
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full">
          {produk.kategori}
        </span>
        <h3 className="text-gray-800 font-bold text-sm mt-2 mb-1 line-clamp-1
                       group-hover:text-orange-500 transition-colors duration-200">
          {produk.nama}
        </h3>
        <p className="text-orange-500 font-extrabold text-base mb-3">
          Rp {produk.harga.toLocaleString("id-ID")}
        </p>
        <div className="flex items-center justify-between gap-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full
            ${produk.stok ? "bg-green-100 text-green-600" : "bg-red-100 text-red-400"}`}>
            {produk.stok ? "Tersedia" : "Habis"}
          </span>
          <button
            onClick={() => produk.stok && setDikeranjang(!dikeranjang)}
            disabled={!produk.stok}
            className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all duration-200
              ${dikeranjang
                ? "bg-green-500 text-white scale-105"
                : produk.stok
                  ? "bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 active:scale-95 shadow"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
          >
            {dikeranjang ? "Ditambah" : "Beli"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default CardProduk;