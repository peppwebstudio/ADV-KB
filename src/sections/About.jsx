import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { CLIENT_INFO, ABOUT_INFO, ABOUT_VALUES } from "../utils/constants";

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gold-gradient opacity-20 blur-2xl" />
            <div className="relative rounded-[1.75rem] overflow-hidden border border-[hsl(38_55%_58%/0.3)] shadow-2xl">
              <img src={ABOUT_INFO.portraitImg} alt={`Foto de ${CLIENT_INFO.name}`} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(350_92%_8%/0.5)] to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-[hsl(350_92%_6%/0.9)] backdrop-blur-md border border-[hsl(38_55%_58%/0.3)] rounded-2xl px-6 py-4 text-center shadow-xl">
              <p className="font-heading text-3xl font-semibold text-gradient-gold">{ABOUT_INFO.experienceYears}</p>
              <p className="text-xs tracking-luxe uppercase text-white/80">Anos de Experiência</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="flex items-center gap-3 text-xs tracking-luxe uppercase text-[hsl(38_55%_45%)] font-medium">
              <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
              Sobre a Advogada
            </p>
            <h2 className="mt-5 font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
              {CLIENT_INFO.name}
            </h2>
            <p className="mt-3 font-heading italic text-lg text-[hsl(350_88%_30%)]">{ABOUT_INFO.oab}</p>

            <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
              {ABOUT_INFO.description}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {ABOUT_VALUES.map((v) => (
                <div key={v} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[hsl(38_55%_48%)]" />
                  <span className="text-sm font-medium text-foreground/90">{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[hsl(350_92%_10%)] p-6 text-white relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-gold-gradient opacity-15 blur-2xl" />
              <p className="text-xs tracking-luxe uppercase text-[hsl(40_60%_75%)] mb-2">Nossa Missão</p>
              <p className="font-heading text-lg md:text-xl leading-snug">
                {ABOUT_INFO.mission}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}