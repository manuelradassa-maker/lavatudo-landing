import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  return (
    /* Escondido em ecrãs < 768px (md) para evitar duplicação com a barra fixa MobileActionBar */
    <div className="hidden md:block fixed bottom-6 right-6 z-50">
      <div className="relative flex items-center group">
        {/* Tooltip no Desktop */}
        <div
          role="tooltip"
          className="absolute right-full mr-3.5 px-3.5 py-2 rounded-xl bg-content-main text-white text-xs font-bold whitespace-nowrap shadow-xl border border-gray-700 pointer-events-none transition-all duration-200 opacity-90 group-hover:opacity-100 group-hover:-translate-x-1"
        >
          <span>📷 Envie uma foto, orçamento grátis</span>
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-content-main rotate-45 border-t border-r border-gray-700" />
        </div>

        {/* Botão Círculo 64px Verde WhatsApp com Pulsação Suave */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp e enviar fotos para orçamento"
          className="w-16 h-16 rounded-full bg-whatsapp hover:bg-[#20bd5a] text-content-main flex items-center justify-center shadow-cta hover:shadow-2xl transition-transform hover:scale-110 active:scale-95 animate-pulse-subtle focus:outline-none focus:ring-4 focus:ring-whatsapp/40"
        >
          <MessageCircle className="w-9 h-9 text-content-main" />
        </a>
      </div>
    </div>
  );
};
