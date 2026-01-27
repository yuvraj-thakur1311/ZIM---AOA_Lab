import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    // window.location.href = "/login";
  };

  return (
    <header className="h-14 w-full flex items-center justify-between border-b border-white px-10 bg-black text-white shadow-md">
      <h1 className="text-2xl font-semibold">Lab Portal</h1>

      {/* User Icon + Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full border border-white bg-gray-400 flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          <span className="text-lg">👤</span>
        </button>

        {open && (
          <div className="absolute right-0 mt-3 w-18 bg-white text-black border border-black rounded-md shadow-lg z-50">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-sm text-left hover:bg-black hover:text-white rounded-md"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
