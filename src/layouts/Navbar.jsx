import React, { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { CLIENT_INFO } from "../utils/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

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
    { name: "Serviços", href: "#practice-areas" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 90; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#2D0408]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-3 group shrink-0"
        >
          {!logoError ? (
            <img
              src={CLIENT_INFO.logoUrl}
              alt={`Logo ${CLIENT_INFO.name}`}
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 origin-bottom-right scale-[1.3] group-hover:scale-[1.4]"
              onError={() => setLogoError(true)}
            />
          ) : (
            <Shield className="h-8 w-8 text-[hsl(40_60%_75%)]" />
          )}
          <div className="flex flex-col z-10 relative">
            <span className="font-heading text-sm md:text-base font-bold tracking-[0.2em] text-white uppercase leading-none">
              {CLIENT_INFO.name}
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-[hsl(40_60%_75%)] uppercase font-semibold mt-1">
              Advocacia
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white/80 hover:text-[hsl(40_60%_75%)] text-sm font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block shrink-0">
          <a
            href={CLIENT_INFO.phoneHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold bg-gold-gradient text-[#2D0408] shadow-lg hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            Agendar Consulta
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white/85 hover:text-white transition-colors focus:outline-none ml-auto"
          aria-label="Alternar Menu"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#2D0408] border-b border-white/10 py-6 px-5 flex flex-col gap-5 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white/80 hover:text-[hsl(40_60%_75%)] text-base font-medium py-2 border-b border-white/5 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href={CLIENT_INFO.phoneHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 text-center py-4 rounded-full text-sm uppercase tracking-widest font-bold bg-gold-gradient text-[#2D0408] shadow-md transition-transform active:scale-[0.98]"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </nav>
  );
}