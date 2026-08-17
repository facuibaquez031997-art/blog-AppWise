import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="m-4 px-4 md:px-8 lg:px-32 2xl:px-64">
      <nav className="flex justify-between items-center w-full h-16 bg-#e6e6ff">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-12 h-12 rounded-full"
            src="../../public/appwise-academy.webp"
            alt="logo"
          />
          <span className="text-black font-extrabold">Appwise</span>
        </Link>

        {/* Botón hamburguesa solo en móviles */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Links en pantallas medianas/grandes */}
        <div className="hidden sm:flex items-center gap-6">
          <Link className="font-bold" to="/">Inicio</Link>
          <Link className="font-bold" to="/tendencias">Tendencias</Link>
          <Link to="/login">
            <button className="bg-blue-800 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 shadow-md font-bold cursor-pointer">
              Login 🤚
            </button>
          </Link>
        </div>
      </nav>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <div className="sm:hidden flex flex-col gap-4 mt-4 bg-#e6e6ff p-4 rounded-lg">
          <Link className="font-bold" to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link className="font-bold" to="/tendencias" onClick={() => setIsOpen(false)}>Tendencias</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="bg-blue-800 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 shadow-md font-bold cursor-pointer">
              Login 🤚
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

