import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../utils/constants";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[hsl(350_92%_8%)] relative overflow-hidden">
      {/* Detalhe de luz de fundo sofisticado */}
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[hsl(38_55%_52%)] opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="flex items-center justify-center gap-3 text-xs tracking-luxe uppercase text-[hsl(40_60%_75%)] font-medium">
            <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
            Depoimentos
            <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
          </p>
          <h2 className="mt-5 font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Confiança que se <span className="text-gradient-gold italic">constrói</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              // Substituição de glass-dark e gilded-border por puro utilitário inline do Tailwind
              className="relative rounded-2xl bg-black/40 backdrop-blur-md border border-[hsl(38_55%_58%/0.2)] p-8 hover:border-[hsl(38_55%_58%/0.4)] transition-colors duration-300"
            >
              <Quote className="h-9 w-9 text-[hsl(38_55%_52%/0.5)]" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-[hsl(40_65%_72%)] text-[hsl(40_65%_72%)]" />
                ))}
              </div>
              <blockquote className="mt-4 text-white/80 text-sm md:text-base leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-heading font-semibold text-white">{t.name}</p>
                <p className="text-xs text-[hsl(40_60%_75%)] mt-0.5">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}