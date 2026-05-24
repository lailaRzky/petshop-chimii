function Nav({ aktif, setAktif }) {
  const menu = [
    { id:"beranda", label:"Beranda" },
    { id:"produk",  label:"Produk" },
    { id:"api",     label:"Data Produk API" },
    { id:"tentang", label:"Tentang" },
  ];
  return (
    <nav aria-label="Menu Utama" className="bg-white border-b-2 border-orange-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex overflow-x-auto" role="menubar">
          {menu.map(m => (
            <li key={m.id} role="none">
              <button
                role="menuitem"
                onClick={() => setAktif(m.id)}
                aria-current={aktif === m.id ? "page" : undefined}
                className={`px-5 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2
                  transition-all duration-300
                  ${aktif === m.id
                    ? "border-orange-500 text-orange-500 bg-orange-50"
                    : "border-transparent text-gray-500 hover:text-orange-400 hover:border-orange-200"
                  }`}
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;