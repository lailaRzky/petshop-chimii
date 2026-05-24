import { useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Beranda from "./components/Beranda";
import HalamanProduk from "./components/HalamanProduk";
import HalamanAPI from "./components/HalamanAPI";
import Tentang from "./components/Tentang";

function App() {
  const [aktif,    setAktif]    = useState("beranda");
  const [cari,     setCari]     = useState("");
  const [kategori, setKategori] = useState("Semua");

  useEffect(() => {
    const judul = { beranda:"Beranda", produk:"Produk", api:"Data Produk API", tentang:"Tentang" };
    document.title = `Petshop Kucing — ${judul[aktif]}`;
  }, [aktif]);

  return (
    <div className="min-h-screen flex flex-col bg-orange-50">
      <Header cari={cari} setCari={setCari} kategori={kategori} setKategori={setKategori} setAktif={setAktif} />
      <Nav aktif={aktif} setAktif={setAktif} />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        {aktif === "beranda"  && <Beranda />}
        {aktif === "produk"   && <HalamanProduk cari={cari} kategori={kategori} />}
        {aktif === "api"      && <HalamanAPI />}
        {aktif === "tentang"  && <Tentang />}
      </main>
      <footer className="bg-orange-500 text-white text-center py-5 text-xs">
        <p>© 2026 Petshop Chimii</p>
      </footer>
    </div>
  );
}

export default App;