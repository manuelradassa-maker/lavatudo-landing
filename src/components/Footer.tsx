import React from 'react';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export const Footer: React.FC = () => {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  return (
    <footer className="bg-content-main text-white pt-16 pb-24 md:pb-12 border-t border-gray-800">
      <div className="max-w-site mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          {/* Coluna 1: Marca & Descrição */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-dark flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl tracking-tight leading-none text-white">
                  <span className="text-brand-turquoise">Lava</span>Tudo
                </span>
                <span className="block text-[11px] font-semibold text-gray-400">
                  Higienização de Estofos & Colchões
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              Especialistas em limpeza a seco de sofás, colchões, tapetes e interiores automóveis ao domicílio na Margem Sul. Sem taxas de deslocação e produtos amigos da família.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-whatsapp text-content-main font-bold text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.phone.raw}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#servicos" className="hover:text-brand-turquoise transition-colors">
                  Serviços de Higienização
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-brand-turquoise transition-colors">
                  Galeria Antes e Depois
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-brand-turquoise transition-colors">
                  Sobre a LavaTudo
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-brand-turquoise transition-colors">
                  Avaliações de Clientes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-brand-turquoise transition-colors">
                  Pedir Orçamento Grátis
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Zonas Servidas na Margem Sul */}
          <div className="lg:col-span-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Concelhos Atendidos (Sem custos de deslocação)
            </h4>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              Deslocamo-nos a qualquer residência ou empresa nas seguintes localidades:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {siteConfig.coverageAreas.map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-1 rounded-md bg-white/10 text-gray-200 text-xs font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé inferior / Direitos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4 text-center sm:text-left">
          <p>© 2025 LavaTudo - Higienização de Estofos & Colchões. Todos os direitos reservados.</p>
          <p className="flex items-center justify-center gap-1">
            <span>Ao domicílio em Almada e Margem Sul</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
