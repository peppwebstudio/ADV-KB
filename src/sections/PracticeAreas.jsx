import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, ShieldCheck, Landmark, Search } from "lucide-react";
import { PRACTICE_AREAS } from "../utils/constants"; // Ajuste o caminho se necessário na sua estrutura

const ICONS = {
  Scale, ShieldCheck, Landmark,
};

export default function PracticeAreas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Achata a lista de serviços para a busca
  const allServices = useMemo(() => {
    const list = [];
    PRACTICE_AREAS.forEach((area) => {
      if (area.services) {
        area.services.forEach((service) => {
          list.push({ serviceName: service, areaTitle: area.title });
        });
      }
    });
    return list;
  }, []);

  // Filtra os serviços com base no termo buscado
  const filteredServices = useMemo(() => {
    if (!searchTerm) return allServices;
    return allServices.filter((item) =>
      item.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allServices]);

  return (
    <section id="practice-areas" className="py-20 md:py-28 bg-[hsl(350_92%_8%)] relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[hsl(38_55%_52%)] opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase text-[hsl(40_60%_75%)] font-medium">
            <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
            Áreas de Atuação
            <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
          </p>
          <h2 className="mt-5 font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Soluções jurídicas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(40_60%_75%)] to-[hsl(38_55%_52%)] italic">completas</span>
          </h2>
          <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">
            Atuação especializada em diversas frentes do direito, sempre com a mesma dedicação
            e excelência técnica.
          </p>

          {/* BARRA DE PESQUISA */}
          <div className="mt-10 relative max-w-md mx-auto text-left" ref={dropdownRef}>
            <label htmlFor="search-service" className="sr-only">Busque por um serviço</label>
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(40_60%_75%)]" />
              <input
                id="search-service"
                type="text"
                placeholder="Busque por divórcio, pensão, etc..."
                autoComplete="off"
                className="w-full bg-white/[0.02] border border-[hsl(38_55%_58%/0.2)] rounded-full py-4 pl-14 pr-6 text-white placeholder-white/40 focus:outline-none focus:border-[hsl(38_55%_58%/0.6)] focus:bg-white/[0.04] transition-all shadow-lg"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
              />
            </div>

            {/* DROPDOWN DE RESULTADOS */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-[hsl(350_92%_5%)] border border-[hsl(38_55%_58%/0.15)] rounded-2xl shadow-2xl overflow-hidden z-50 max-h-72 overflow-y-auto"
                >
                  <div className="p-3 bg-white/[0.02] border-b border-white/[0.05]">
                    <p className="text-xs font-semibold tracking-wider text-white/50 uppercase">
                      Atuamos com:
                    </p>
                  </div>
                  
                  {filteredServices.length > 0 ? (
                    <ul className="py-1">
                      {filteredServices.map((item, idx) => (
                        <li 
                          key={idx} 
                          className="px-4 py-3 hover:bg-white/[0.04] transition-colors border-b border-white/[0.02] last:border-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group cursor-default"
                        >
                          <span className="text-white text-sm font-medium group-hover:text-[hsl(40_60%_75%)] transition-colors">
                            {item.serviceName}
                          </span>
                          <span className="text-[10px] uppercase tracking-widest text-[hsl(40_60%_75%)] bg-[hsl(38_55%_58%/0.1)] px-2.5 py-1 rounded-md sm:shrink-0 w-fit">
                            {item.areaTitle}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-4 py-6 text-center text-sm text-white/50">
                      Nenhuma área correspondente encontrada para "{searchTerm}".
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CARDS DAS ÁREAS */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRACTICE_AREAS.map((area, i) => {
            const Icon = ICONS[area.icon] || Scale;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative flex flex-col rounded-2xl bg-white/[0.03] border border-[hsl(38_55%_58%/0.18)] p-7 transition-all duration-300 hover:border-[hsl(38_55%_58%/0.6)] hover:bg-white/[0.06] hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[hsl(38_55%_58%)] focus-within:ring-offset-2 focus-within:ring-offset-[hsl(350_92%_8%)]"
                tabIndex={0}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(38_55%_52%/0.12)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex flex-col flex-grow">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[hsl(40_60%_75%)] to-[hsl(38_55%_52%)] shadow-lg shadow-[hsl(38_55%_52%/0.2)]">
                    <Icon className="h-7 w-7 text-[hsl(350_90%_10%)]" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-white">{area.title}</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed flex-grow">{area.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}