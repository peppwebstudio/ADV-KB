import React, { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { LOGO_URL } from "../utils/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Controla o efeito de vidro/sombra ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        if (!isScrolled) setIsScrolled(true);
      } else {
        if (isScrolled) setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[hsl(350_92%_5%)]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <a href="#hero" className="flex items-center gap-3 group">
          {!logoError ? (
            <img
              src={LOGO_URL}
              alt="Logo Kataliny Bonfim"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={() => setLogoError(true)} // Ativa o fallback se o arquivo sumir
            />
          ) : (
            <Shield className="h-7 w-7 text-[hsl(40_60%_75%)]" />
          )}
          <div className="flex flex-col">
            <span className="font-heading text-sm md:text-base font-bold tracking-[0.2em] text-white uppercase leading-none">
              Kataliny Bonfim
            </span>
            <span className="text-[9px] tracking-[0.3em] text-[hsl(40_60%_75%)] uppercase font-semibold mt-1">
              Advocacia
            </span>
          </div>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-[hsl(40_60%_75%)] text-sm font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP CTA BUTTON (Dourado Premium Corrigido) */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold bg-gold-gradient text-[hsl(350_92%_5%)] shadow-lg hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            Agendar Consulta
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white/85 hover:text-white transition-colors focus:outline-none"
          aria-label="Alternar Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU PANEL (Dourado Premium Corrigido) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[hsl(350_92%_5%)] border-b border-white/10 py-6 px-5 flex flex-col gap-5 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-[hsl(40_60%_75%)] text-base font-medium py-1 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-gold-gradient text-[hsl(350_92%_5%)] shadow-md transition-transform active:scale-[0.98]"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </nav>
  );
}