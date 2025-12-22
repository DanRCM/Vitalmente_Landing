import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import logo from "../assets/logo.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Inicio", "Beneficios", "Como Funciona", "Opiniones"];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-2xl text-vital-green">
          <img src={logo} alt="Vitalmente" className="h-10" />
          <span>Vitalmente</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-gray-600 hover:text-vital-green font-medium">
              {link}
            </a>
          ))}
          <Button>Reservar mi kit ahora</Button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b p-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-gray-600 font-medium p-2 hover:bg-gray-50 rounded">
              {link}
            </a>
          ))}
          <Button className="w-full">Reservar mi kit ahora</Button>
        </div>
      )}
    </nav>
  );
}