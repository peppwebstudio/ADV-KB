import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Lock, Award, MessageSquare, Users, Target } from "lucide-react";
import { WHY_CHOOSE } from "../utils/constants";

const ICONS = { UserCheck, Lock, Award, MessageSquare, Users, Target };

export default function WhyChooseUs() {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">
          
          <div className="lg:sticky lg:top-28">
            <p className="flex items-center gap-3 text-xs tracking-luxe uppercase text-[hsl(38_55%_45%)] font-medium">
              <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
              Por que nos escolher
            </p>
            <h2 className="mt-5 font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
              A diferença está nos <span className="text-gradient-gold italic">detalhes</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Não tratamos clientes como processos. Cada caso é único e merece uma abordagem
              construída com inteligência, transparência e dedicação absoluta.
            </p>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(350_88%_18%)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[hsl(350_80%_22%)] transition-colors"
            >
              Inicie sua conversa conosco
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {WHY_CHOOSE.map((item, i) => {
              const Icon = ICONS[item.icon] || Award;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                  className="group rounded-2xl border border-border bg-card p-6 hover:border-[hsl(38_55%_58%/0.5)] hover:shadow-xl hover:shadow-[hsl(38_55%_52%/0.08)] transition-all"
                >
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[hsl(38_55%_52%/0.12)] group-hover:bg-gold-gradient transition-all duration-300">
                    <Icon className="h-6 w-6 text-[hsl(38_55%_45%)] group-hover:text-[hsl(350_90%_10%)] transition-colors" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}