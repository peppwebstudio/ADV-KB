import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { CTA_INFO } from "../utils/constants";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[hsl(350_92%_8%)]">
      <div className="absolute inset-0">
        <img src={CTA_INFO.bgImage} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(350_92%_8%)] via-[hsl(350_80%_12%/0.85)] to-[hsl(350_92%_8%/0.7)]" />
      </div>

      <img
        src={CTA_INFO.logoUrl}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-1/3 h-[80%] w-auto opacity-[0.05] rounded-full"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-8 py-28 md:py-40 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-luxe uppercase text-[hsl(40_60%_75%)] font-medium"
        >
          Pronto para o próximo passo?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight"
        >
          Sua causa merece <span className="text-gradient-gold italic">defesa de excelência</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          Agende uma consulta inicial e descubra como podemos proteger seus direitos
          com estratégia, ética e dedicação.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contato"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-gradient px-8 py-4 text-sm md:text-base font-semibold text-[hsl(350_90%_10%)] shadow-xl shadow-[hsl(38_55%_52%/0.3)] hover:shadow-2xl hover:scale-[1.03] transition-all"
          >
            <Calendar className="h-5 w-5" />
            Agendar Consulta
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}