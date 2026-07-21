import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Scale } from "lucide-react";
import { CLIENT_INFO } from "../utils/constants";

export default function About() {
  const credentials = [
    {
      icon: Scale,
      title: "Atuação Estratégica",
      description: "Soluções jurídicas personalizadas focadas no resultado prático.",
    },
    {
      icon: ShieldCheck,
      title: "Sigilo e Rigor",
      description: "Ética inabalável e confidencialidade absoluta em cada processo.",
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Atualização jurídica constante para antecipar cenários complexos.",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[hsl(350_92%_5%)] relative overflow-hidden">
      {/* Luz dourada difusa de fundo */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[hsl(38_55%_52%)] opacity-5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* COLUNA ESQUERDA: FOTO INSTITUCIONAL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 relative"
          >
            {/* Moldura elegante deslocada decorativa */}
            <div className="absolute inset-0 border border-[hsl(38_55%_58%/0.3)] rounded-2xl translate-x-4 translate-y-4 pointer-events-none hidden sm:block" />
            
            {/* Container da Imagem principal */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-900 border border-white/10 shadow-2xl">
              <img
                src={CLIENT_INFO.portraitImg}
                alt={`Retrato de ${CLIENT_INFO.name}`}
                className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                }}
              />
              {/* Degradê escuro de fusão no rodapé da imagem */}
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(350_92%_5%)]/90 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* COLUNA DIREITA: TEXTOS E DIFERENCIAIS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 flex flex-col"
          >
            {/* Subtítulo */}
            <p className="flex items-center gap-3 text-xs tracking-luxe uppercase text-[hsl(40_60%_75%)] font-medium">
              <span className="h-px w-8 bg-[hsl(38_55%_58%)]" />
              Quem Somos
            </p>

            {/* Título */}
            <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Excelência, Ética e <br />
              <span className="text-gradient-gold italic">Defesa Inabalável</span>
            </h2>

            {/* Descrição Principal */}
            <p className="mt-6 text-white/80 text-sm md:text-base leading-relaxed">
              Sob a liderança de <strong className="text-white">{CLIENT_INFO.name}</strong>, nosso escritório atua de forma altamente personalizada, entendendo que cada demanda exige uma estratégia única. Unimos profundo conhecimento técnico a uma visão analítica moderna para oferecer soluções seguras no âmbito preventivo e contencioso.
            </p>

            <p className="mt-4 text-white/60 text-xs md:text-sm leading-relaxed">
              Acreditamos que a advocacia de excelência é construída com proximidade, transparência e agilidade. Por isso, oferecemos aos nossos clientes um atendimento exclusivo, com acompanhamento em tempo real e foco absoluto na segurança de seus patrimônios e direitos.
            </p>

            {/* Lista de Diferenciais Estilizados */}
            <div className="mt-10 space-y-6">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-white/5 border border-[hsl(38_55%_58%/0.2)] flex items-center justify-center text-[hsl(40_60%_75%)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-white text-sm md:text-base">
                        {cred.title}
                      </h4>
                      <p className="text-xs md:text-sm text-white/50 mt-1 leading-normal">
                        {cred.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}