import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { QuoteForm } from './QuoteForm';

export const Contact: React.FC = () => {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  return (
    <section id="contacto" className="bg-brand-darker text-white py-20 scroll-mt-20">
      <div className="max-w-site mx-auto px-4 sm:px-6">
        {/* Título da Secção */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-dark text-white text-xs font-bold uppercase tracking-wider mb-3">
            Orçamento Imediato
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Peça o seu orçamento por foto
          </h2>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            Sem complicações nem deslocações. Envie fotos dos seus estofos e receba o valor em minutos.
          </p>
        </div>

        {/* Duas Colunas: Formulário à esquerda, Informações e Mapa à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Esquerda: Formulário de Orçamento Rápido */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

          {/* Direita: Cartão de Contactos, Zonas, Horário e Mapa */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-soft">
              <h3 className="font-heading font-bold text-xl text-white mb-6">
                Informações de Atendimento
              </h3>

              {/* Telefone Clicável */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-0.5">
                    Ligue diretamente
                  </span>
                  <a
                    href={`tel:${siteConfig.phone.raw}`}
                    className="text-lg font-bold text-white hover:text-brand-light transition-colors"
                  >
                    {siteConfig.phone.display}
                  </a>
                  <p className="text-xs text-gray-300 mt-0.5">Chamada para rede móvel nacional</p>
                </div>
              </div>

              {/* Botão WhatsApp */}
              <div className="mb-6">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[52px] px-6 rounded-xl bg-whatsapp hover:bg-[#20bd5a] text-content-main font-bold text-base shadow-cta flex items-center justify-center gap-3 transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-content-main" />
                  <span>Conversar agora no WhatsApp</span>
                </a>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4 mb-6 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-0.5">
                    Horário de Trabalho
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {siteConfig.hours.display}
                  </p>
                  <p className="text-xs text-emerald-300 font-medium mt-1">
                    ✔ {siteConfig.hours.whatsappNotice}
                  </p>
                </div>
              </div>

              {/* Zonas de Atuação */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-brand-turquoise" />
                  <span className="text-xs uppercase tracking-wider text-gray-200 font-bold">
                    Zonas Servidas na Margem Sul (Deslocação Grátis)
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.coverageAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded-lg bg-white/15 text-white text-xs font-semibold border border-white/10"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mapa Incorporado do Google Maps */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-5 border border-white/20 shadow-soft">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-200 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-turquoise" />
                  Base de Operações: Almada
                </span>
                <span className="text-xs text-emerald-300 font-semibold">
                  Sem taxa de deslocação
                </span>
              </div>

              {/* Iframe Google Maps */}
              <div className="w-full h-[280px] rounded-2xl overflow-hidden border border-white/20 shadow-inner bg-gray-800">
                <iframe
                  title="Mapa de cobertura LavaTudo Almada e Margem Sul"
                  src={siteConfig.address.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] contrast-[1.05]"
                />
              </div>

              {/* Botão Abrir no Google Maps */}
              <div className="mt-3 text-center">
                <a
                  href={siteConfig.address.mapDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white/15 hover:bg-white/25 text-white text-sm font-bold border border-white/20 transition-colors"
                >
                  <span>Abrir localização no Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
