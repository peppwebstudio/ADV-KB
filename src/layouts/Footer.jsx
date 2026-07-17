import React from "react";
import { Shield } from "lucide-react"; // Apenas o escudo (que é neutro) vem do Lucide
import { Facebook, Instagram, Linkedin } from "../components/BrandIcons"; // Importando nossos ícones customizados
import { SOCIAL_LINKS, FIRM_INFO } from "../utils/constants";

// Mapeador de componentes locais para manter as constantes dinâmicas
const iconMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(350_92%_5%)] border-t border-white/10 pt-16 pb-8 text-white/60 text-sm">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-3 gap-10 md:gap-6 pb-12 border-b border-white/10">
        
        {/* Lado Esquerdo: Marca */}
        <div>
          <span className="font-heading text-xl font-bold tracking-luxe text-white">
            KATALINY BONFIM
          </span>
          <p className="mt-4 text-xs uppercase tracking-widest text-[hsl(40_60%_75%)]">
            Advocacia & Consultoria Jurídica
          </p>
          <p className="mt-3 text-white/50 leading-relaxed max-w-sm">
            Defesa estratégica e personalizada com foco na excelência e no sigilo profissional.
          </p>
        </div>

        {/* Centro: Contatos */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Escritório</h4>
          <ul className="space-y-3">
            <li>{FIRM_INFO.address}</li>
            <li>{FIRM_INFO.hours}</li>
            <li>
              <a href={`mailto:${FIRM_INFO.email}`} className="hover:text-white transition-colors">
                {FIRM_INFO.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Lado Direito: Redes Sociais */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Siga-nos</h4>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => {
              const IconComponent = iconMap[social.platform];
              if (!IconComponent) return null;
              
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-gold-gradient hover:text-[hsl(350_90%_10%)] hover:border-transparent transition-all"
                  aria-label={`Acessar ${social.platform}`}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p>© {currentYear} Kataliny Bonfim Advocacia. Todos os direitos reservados.</p>
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-[hsl(40_60%_75%)]" />
          <span>Desenvolvido com excelência por Pepp Web Studio</span>
        </div>
      </div>
    </footer>
  );
}