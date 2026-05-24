function Header({ cari, setCari, kategori, setKategori, setAktif }) {
  const daftarKategori = ["Semua", "Makanan", "Aksesoris", "Mainan", "Perawatan", "Sanitasi"];
  return (
    <header className="bg-orange-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl shadow">
              <img src="/gambar/kucing.jpg" alt="Logo Petshop" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <h1 className="text-white text-xl font-extrabold leading-tight">Petshop Kucing</h1>
              <p className="text-orange-100 text-xs">Lengkap & Terpercaya</p>
            </div>
          </div>
          <form
            className="flex-1 flex flex-col sm:flex-row gap-2"
            role="search"
            onSubmit={e => { e.preventDefault(); setAktif("produk"); }}
          >
            <fieldset className="flex-1 border-none p-0 m-0">
              <legend className="sr-only">Form Pencarian Produk</legend>
              <label htmlFor="cari-produk" className="sr-only">Cari produk</label>
              <input
                id="cari-produk"
                type="search"
                placeholder="Cari produk kucing..."
                value={cari}
                onChange={e => { setCari(e.target.value); setAktif("produk"); }}
                className="w-full px-4 py-2 rounded-lg border-2 border-orange-300 bg-white
                           text-gray-800 placeholder-gray-400 outline-none
                           focus:border-white transition-all duration-300"
              />
            </fieldset>
            <fieldset className="border-none p-0 m-0">
              <legend className="sr-only">Filter Kategori</legend>
              <label htmlFor="filter-kategori" className="sr-only">Filter Kategori</label>
              <select
                id="filter-kategori"
                value={kategori}
                onChange={e => { setKategori(e.target.value); setAktif("produk"); }}
                className="px-4 py-2 rounded-lg border-2 border-orange-300 bg-white
                           text-gray-700 outline-none focus:border-white
                           transition-all duration-300 cursor-pointer"
              >
                {daftarKategori.map(k => (
                  <option key={k} value={k}>{k}</option>
                ))}
              </select>
            </fieldset>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;