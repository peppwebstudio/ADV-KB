import { motion } from "framer-motion";
import { Calendar, Phone, ArrowRight } from "lucide-react";
import { CLIENT_INFO, HERO_STATS } from "../utils/constants";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-burgundy-gradient">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src={CLIENT_INFO.heroImg}
          alt="Biblioteca jurídica moderna"
          className="h-full w-full object-cover opacity-35"
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.12 }}
          transition={{ duration: 18, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(350_92%_8%)] via-[hsl(350_80%_14%/0.85)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(350_92%_6%)] via-transparent to-[hsl(350_92%_10%/0.6)]" />
      </div>

      {/* Watermark monogram */}
      <img
        src={CLIENT_INFO.logoUrl}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 h-[140%] w-auto max-w-none opacity-[0.06] rounded-full"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 text-xs md:text-sm tracking-luxe uppercase text-[hsl(40_60%_75%)] font-medium"
          >
            <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
            Excelência Jurídica Desde 2014
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-white"
          >
            Direito com <span className="text-gradient-gold italic">precisão</span>,
            <br className="hidden sm:block" /> estratégia e <span className="text-gradient-gold italic">propósito</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-7 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl"
          >
            Na {CLIENT_INFO.name}, unimos rigor técnico a atendimento humano.
            Compromisso real com cada cliente, soluções jurídicas estratégicas e
            transparência em cada etapa da sua causa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-gradient px-8 py-4 text-sm md:text-base font-semibold text-[hsl(350_90%_10%)] shadow-xl shadow-[hsl(38_55%_52%/0.3)] hover:shadow-2xl hover:scale-[1.03] transition-all"
            >
              <Calendar className="h-5 w-5" />
              Agendar Consulta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm md:text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:border-[hsl(38_55%_58%)] transition-all"
            >
              <Phone className="h-5 w-5" />
              Fale Conosco
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-white/60"
          >
            {HERO_STATS.map((s) => (
              <div key={s.l} className="flex items-center gap-3">
                <span className="font-heading text-2xl font-semibold text-gradient-gold">{s.n}</span>
                <span className="text-xs uppercase tracking-wider">{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-luxe uppercase">Role</span>
        <div className="h-12 w-px bg-gradient-to-b from-[hsl(38_55%_58%)] to-transparent" />
      </div>
    </section>
  );
}