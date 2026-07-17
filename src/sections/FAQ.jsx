import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../utils/constants";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 text-xs tracking-luxe uppercase text-[hsl(38_55%_45%)] font-medium">
            <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
            Dúvidas Frequentes
            <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
          </p>
          <h2 className="mt-5 font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Perguntas <span className="text-gradient-gold italic">comuns</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-colors duration-300 ${
                  isOpen ? "border-[hsl(38_55%_58%/0.5)] bg-card" : "border-border bg-card"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base md:text-lg font-semibold text-foreground">{faq.q}</span>
                  <span className={`flex-shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-gold-gradient text-[hsl(350_90%_10%)]" : "bg-muted text-muted-foreground"}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}