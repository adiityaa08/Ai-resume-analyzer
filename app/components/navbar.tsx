import { useState } from "react";
import { Link } from "react-router";
import WipeData from "./wipedata";
import AuthButton from "./AuthButton";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Navbar container */}
        <div className="flex justify-between items-center bg-white shadow-md rounded-full px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gradient">RESUMIND</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-4 items-center">
            <Link
              to="/upload"
              className="px-4 py-2 rounded-full primary-button w-fit text-center"
            >
              Upload Resume
            </Link>
            <div className="w-32">
              <WipeData />
            </div>
            <div className="w-32">
              <AuthButton />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-white shadow-lg rounded-2xl p-4 flex flex-col gap-3">
            <Link
              to="/upload"
              className="px-4 py-2 rounded-full primary-button w-fit text-center"
              onClick={() => setIsOpen(false)}
            >
              Upload Resume
            </Link>
            <div className="w-full">
              <WipeData />
            </div>
            <div className="w-full">
              <AuthButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
