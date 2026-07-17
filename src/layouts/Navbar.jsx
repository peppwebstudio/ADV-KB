import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLIENT_INFO, NAV_LINKS } from "../utils/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-[0_1px_0_0_hsl(38_55%_58%/0.3)] py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        <a href="#top" aria-label={`${CLIENT_INFO.name} — Início`}>
          <img src={CLIENT_INFO.logoUrl} alt={CLIENT_INFO.name} className="h-11 md:h-14 w-auto rounded-full object-cover" />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative group ${scrolled ? 'text-white/80' : 'text-white/90'} hover:text-[hsl(40_60%_75%)]`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-semibold text-[hsl(350_90%_10%)] shadow-lg shadow-[hsl(38_55%_52%/0.25)] hover:shadow-xl hover:scale-[1.03] transition-all"
        >
          Agendar Consulta
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-white' : 'text-white'}`}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav border-t border-border/20 overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-base font-medium text-white/80 hover:text-[hsl(40_60%_75%)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex justify-center rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-[hsl(350_90%_10%)]"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}