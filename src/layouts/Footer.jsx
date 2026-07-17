import { Phone, Mail, MapPin } from "lucide-react";
import { CLIENT_INFO, NAV_LINKS, SOCIAL_LINKS } from "../utils/constants";

export default function Footer() {
  return (
    <footer className="bg-[hsl(350_92%_6%)] text-white relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[60%] rounded-full bg-[hsl(38_55%_52%)] opacity-8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <img src={CLIENT_INFO.logoUrl} alt={CLIENT_INFO.name} className="h-16 w-auto rounded-full" />
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
              Advocacia e Consultoria Jurídica com excelência técnica, ética e
              atendimento verdadeiramente personalizado.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-[hsl(38_55%_58%)] hover:text-[hsl(40_60%_75%)] transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-luxe uppercase text-[hsl(40_60%_75%)] font-medium">Navegação</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-white/60 hover:text-[hsl(40_60%_75%)] transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-luxe uppercase text-[hsl(40_60%_75%)] font-medium">Contato</p>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-[hsl(38_55%_52%)]" />
                <a href={CLIENT_INFO.phoneHref} className="hover:text-[hsl(40_60%_75%)] transition-colors">{CLIENT_INFO.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-[hsl(38_55%_52%)]" />
                <a href={`mailto:${CLIENT_INFO.email}`} className="hover:text-[hsl(40_60%_75%)] transition-colors break-all">{CLIENT_INFO.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[hsl(38_55%_52%)]" />
                <span>{CLIENT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} {CLIENT_INFO.name}. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-[hsl(40_60%_75%)] transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-[hsl(40_60%_75%)] transition-colors">Termos de Serviço</a>
          </div>
        </div>
        <p className="mt-6 text-center text-[10px] text-white/30">
          OAB/SP 000.000 — Conforme Provimento do Conselho Federal da OAB, este site tem caráter meramente informativo.
        </p>
      </div>
    </footer>
  );
}