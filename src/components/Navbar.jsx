import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-full px-8 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-2xl"
            : "bg-white/70 backdrop-blur-xl"
        }`}
      >
        {/* Logo */}

        <a
          href="#"
          className="text-3xl font-bold tracking-wide select-none"
        >
          <span className="text-pink-500">Gorakhpur</span>
          <span className="text-gray-900">Glam</span>
        </a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <li>
            <a href="#" className="hover:text-pink-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-pink-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-pink-500 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#pricing" className="hover:text-pink-500 transition">
              Pricing
            </a>
          </li>

          <li>
            <a href="#gallery" className="hover:text-pink-500 transition">
              Gallery
            </a>
          </li>

          <li>
            <a href="#reviews" className="hover:text-pink-500 transition">
              Reviews
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-pink-500 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Desktop Button */}

        <a
          href="#booking"
          className="hidden md:inline-flex bg-pink-500 hover:bg-pink-600 text-white px-7 py-3 rounded-full transition duration-300 shadow-lg"
        >
          Book Consultation
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden"
        >
          <Menu size={32} />
        </button>
      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999]">

          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl p-8">

            <div className="flex justify-between items-center mb-10">

              <h2 className="text-2xl font-bold text-pink-500">
                Menu
              </h2>

              <button onClick={closeMenu}>
                <X size={30} />
              </button>

            </div>

            <div className="flex flex-col gap-7 text-lg font-medium">

              <a href="#" onClick={closeMenu}>
                Home
              </a>

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <a href="#services" onClick={closeMenu}>
                Services
              </a>

              <a href="#pricing" onClick={closeMenu}>
                Pricing
              </a>

              <a href="#gallery" onClick={closeMenu}>
                Gallery
              </a>

              <a href="#reviews" onClick={closeMenu}>
                Reviews
              </a>

              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>

              <a
                href="#booking"
                onClick={closeMenu}
                className="bg-pink-500 text-white text-center rounded-full py-4 mt-6"
              >
                Book Consultation
              </a>

            </div>

          </div>

        </div>
      )}
    </header>
  );
}