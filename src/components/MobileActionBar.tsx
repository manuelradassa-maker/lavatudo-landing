import React from 'react';
import { Phone, Camera } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export const MobileActionBar: React.FC = () => {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  return (
    /* Barra fixa visível exclusivamente em ecrãs < 768px (mobile) */
    <aside
      aria-label="Ações rápidas de contacto"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Botão 1: Ligar (Turquesa escuro #00838F com texto branco - garante contraste AA) */}
        <a
          href={`tel:${siteConfig.phone.raw}`}
          className="min-h-[52px] px-3 rounded-xl bg-brand-dark hover:bg-brand-darker text-white font-bold text-base flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all text-center"
          aria-label={`Ligar para o número ${siteConfig.phone.display}`}
        >
          <Phone className="w-5 h-5 shrink-0" />
          <span>Ligar</span>
        </a>

        {/* Botão 2: Enviar Foto (Verde WhatsApp #25D366 com texto escuro #0B2B33) */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[52px] px-3 rounded-xl bg-whatsapp hover:bg-[#20bd5a] text-content-main font-bold text-base flex items-center justify-center gap-2 shadow-cta active:scale-95 transition-all text-center"
          aria-label="Enviar fotografia da peça pelo WhatsApp para orçamento"
        >
          <Camera className="w-5 h-5 shrink-0 text-content-main" />
          <span>Enviar foto</span>
        </a>
      </div>
    </aside>
  );
};
