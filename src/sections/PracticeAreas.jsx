import React from "react";
import { motion } from "framer-motion";
import { Scale, ShieldCheck, Landmark } from "lucide-react";
import { PRACTICE_AREAS } from "../utils/constants";

// Dicionário de ícones para renderização dinâmica
const ICONS = {
  Scale, ShieldCheck, Landmark,
};

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-20 md:py-28 bg-[hsl(350_92%_8%)] relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[hsl(38_55%_52%)] opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="flex items-center justify-center gap-3 text-xs tracking-luxe uppercase text-[hsl(40_60%_75%)] font-medium">
            <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
            Áreas de Atuação
            <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
          </p>
          <h2 className="mt-5 font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Soluções jurídicas <span className="text-gradient-gold italic">completas</span>
          </h2>
          <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">
            Atuação especializada em diversas frentes do direito, sempre com a mesma dedicação
            e excelência técnica.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRACTICE_AREAS.map((area, i) => {
            const Icon = ICONS[area.icon] || Scale; // Fallback para Scale se o ícone não for encontrado
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
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gold-gradient shadow-lg shadow-[hsl(38_55%_52%/0.2)]">
                    <Icon className="h-7 w-7 text-[hsl(350_90%_10%)]" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-white">{area.title}</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed flex-grow">{area.desc}</p>
                  
                  {/* Renderização Condicional das Especialidades (Tags) */}
                  {area.specialties && area.specialties.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {area.specialties.map((specialty, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center rounded-full border border-[hsl(38_55%_58%/0.3)] bg-[hsl(38_55%_58%/0.08)] px-3 py-1 text-xs font-medium tracking-wide text-[hsl(40_60%_75%)]"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}