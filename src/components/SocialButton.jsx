import React from "react";
import { MessageCircle, Instagram } from "lucide-react";
import { getWhatsAppLink, getInstagramLink } from "../utils/constants";

export default function SocialButton({ platform = "whatsapp", customMessage, className = "" }) {
  const isWhatsApp = platform === "whatsapp";
  
  const href = isWhatsApp 
    ? getWhatsAppLink(customMessage) 
    : getInstagramLink();

  const Icon = isWhatsApp ? MessageCircle : Instagram;
  const label = isWhatsApp ? "Falar no WhatsApp" : "Enviar Direct";

  // Estilização premium com Tailwind (Gradiente dourado para destaque, ou fundo escuro)
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-wide";
  
  const variantStyles = isWhatsApp
    ? "bg-green-500 text-white shadow-green-500/25 hover:bg-green-600 hover:shadow-green-500/40" 
    : "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white shadow-purple-500/25 hover:shadow-purple-500/40";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <Icon className="h-5 w-5" />
      {label}
    </a>
  );
}