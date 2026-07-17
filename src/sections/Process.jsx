import React from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "../utils/constants";

export default function Process() {
  return (
    <section id="processo" className="py-20 md:py-28 bg-[hsl(40_33%_97%)] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="flex items-center justify-center gap-3 text-xs tracking-luxe uppercase text-[hsl(38_55%_45%)] font-medium">
            <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
            Como Trabalhamos
            <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
          </p>
          <h2 className="mt-5 font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Um processo <span className="text-gradient-gold italic">claro</span> do início ao fim
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[hsl(38_55%_58%/0.4)] to-transparent" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center group"
            >
              <div className="relative mx-auto h-20 w-20 rounded-full bg-white border-2 border-[hsl(38_55%_58%/0.3)] flex items-center justify-center shadow-lg transition-colors group-hover:border-[hsl(38_55%_58%)]">
                <span className="font-heading text-2xl font-semibold text-gradient-gold">{step.num}</span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[14rem] mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}