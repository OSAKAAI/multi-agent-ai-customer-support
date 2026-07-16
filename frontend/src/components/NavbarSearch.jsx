import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function NavbarSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;

    navigate(`/products/search?q=${encodeURIComponent(query)}`);

    setOpen(false);
    setQuery("");
  };

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="text-3xl hover:text-orange-500 transition"
      >
        {open ? <FiX /> : <FiSearch />}
      </button>

      {open && (
        <div className="absolute right-0 mt-4 flex w-96 overflow-hidden rounded-xl border bg-white shadow-xl">

          <input
            autoFocus
            type="text"
            placeholder="Search AXIOM products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="flex-1 px-5 py-4 outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-orange-500 px-6 text-white hover:bg-orange-600"
          >
            Search
          </button>

        </div>
      )}
    </div>
  );
}

export default NavbarSearch;