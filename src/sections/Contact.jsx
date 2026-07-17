import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { FIRM_INFO, PRACTICE_AREAS } from "../utils/constants";

const CONTACT_INFO = [
  { icon: Phone, label: "Telefone", value: FIRM_INFO.phone, href: FIRM_INFO.phoneHref },
  { icon: Mail, label: "E-mail", value: FIRM_INFO.email, href: `mailto:${FIRM_INFO.email}` },
  { icon: MapPin, label: "Endereço", value: FIRM_INFO.address },
  { icon: Clock, label: "Horário", value: FIRM_INFO.hours },
];

// Estilo unificado para inputs do formulário
const inputClasses = "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 focus:border-[hsl(38_55%_58%)] focus:outline-none focus:ring-1 focus:ring-[hsl(38_55%_58%)] transition-colors";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[hsl(40_33%_97%)] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="flex items-center justify-center gap-3 text-xs tracking-luxe uppercase text-[hsl(38_55%_45%)] font-medium">
            <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
            Contato
            <span className="h-px w-10 bg-[hsl(38_55%_58%)]" />
          </p>
          <h2 className="mt-5 font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Vamos conversar sobre o seu <span className="text-gradient-gold italic">caso</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            O primeiro passo é uma conversa reservada. Preencha o formulário e entraremos em contato.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {CONTACT_INFO.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="rounded-2xl bg-white border border-border p-5 hover:border-[hsl(38_55%_58%/0.5)] hover:shadow-lg transition-all h-full">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(38_55%_52%/0.12)]">
                      <Icon className="h-5 w-5 text-[hsl(38_55%_45%)]" />
                    </div>
                    <p className="mt-3 text-xs tracking-luxe uppercase text-muted-foreground">{c.label}</p>
                    <p className="mt-1 text-sm font-medium text-foreground leading-snug">{c.value}</p>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
            </div>

            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden border border-border min-h-[220px] flex-1 bg-[hsl(350_92%_8%)]">
              <iframe
                title="Localização do escritório"
                src={FIRM_INFO.mapEmbedUrl}
                className="absolute inset-0 h-full w-full grayscale-[0.3] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white border border-border shadow-xl p-6 md:p-9"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient">
                  <CheckCircle2 className="h-8 w-8 text-[hsl(350_90%_10%)]" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">Mensagem enviada!</h3>
                <p className="mt-2 text-muted-foreground max-w-sm">
                  Agradecemos seu contato. Retornaremos em breve de forma sigilosa e profissional.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-[hsl(38_55%_45%)] hover:underline focus:outline-none"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Nome Completo" required>
                    <input type="text" required className={inputClasses} placeholder="Seu nome completo" />
                  </Field>
                  <Field label="E-mail" required>
                    <input type="email" required className={inputClasses} placeholder="seu@email.com" />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Telefone" required>
                    <input type="tel" required className={inputClasses} placeholder="(11) 90000-0000" />
                  </Field>
                  <Field label="Forma de Contato Preferida" required>
                    <select required className={inputClasses} defaultValue="">
                      <option value="" disabled>Selecione...</option>
                      <option>WhatsApp</option>
                      <option>Telefone</option>
                      <option>E-mail</option>
                    </select>
                  </Field>
                </div>

                <Field label="Área Jurídica" required>
                  <select required className={inputClasses} defaultValue="">
                    <option value="" disabled>Selecione a área...</option>
                    {PRACTICE_AREAS.map((a) => (
                      <option key={a.title}>{a.title}</option>
                    ))}
                    <option>Outra / Não sei informar</option>
                  </select>
                </Field>

                <Field label="Assunto" required>
                  <input type="text" required className={inputClasses} placeholder="Resumo do assunto" />
                </Field>

                <Field label="Mensagem" required>
                  <textarea
                    required
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    placeholder="Descreva brevemente seu assunto jurídico, sua principal preocupação ou como podemos ajudá-lo(a)."
                  />
                </Field>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm md:text-base font-semibold text-[hsl(350_90%_10%)] shadow-lg shadow-[hsl(38_55%_52%/0.25)] hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                  {!loading && <Send className="h-4 w-4" />}
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Suas informações são tratadas com absoluto sigilo profissional.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold tracking-wide uppercase text-foreground/70 mb-2">
        {label} {required && <span className="text-[hsl(38_55%_45%)]">*</span>}
      </span>
      {children}
    </label>
  );
}