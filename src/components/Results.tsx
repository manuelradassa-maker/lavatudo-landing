import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const Results: React.FC = () => {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    'Olá! Estive a ver os vossos resultados de antes e depois e quero um resultado assim para as minhas peças. Posso enviar fotos para orçamento?'
  )}`;

  return (
    <section id="resultados" className="bg-white py-20 scroll-mt-20">
      <div className="max-w-site mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-darker text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-dark" />
            Galeria de Transformações
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-content-main tracking-tight mb-4">
            Veja a diferença
          </h2>
          <p className="text-content-muted text-base sm:text-lg leading-relaxed">
            Resultados reais, em casas reais. Arraste os manípulos para comparar o antes e o depois de cada higienização.
          </p>
        </div>

        {/* Galeria de 4 pares: scroll-snap carrossel no mobile, grelha 2x2 no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {siteConfig.beforeAfterGallery.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-3xl border border-gray-100 shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="text-xs font-bold text-brand-darker bg-brand-light px-2.5 py-0.5 rounded-full">
                  {item.tag}
                </span>
                <span className="text-xs font-semibold text-content-muted">
                  📍 {item.location}
                </span>
              </div>

              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                altBefore={item.altBefore}
                altAfter={item.altAfter}
                label={item.title}
                location={item.location}
                aspectRatioClass="aspect-[4/3]"
                initialPosition={50}
              />
            </div>
          ))}
        </div>

        {/* CTA por baixo */}
        <div className="text-center bg-surface-light rounded-3xl p-8 sm:p-10 border border-gray-100 max-w-3xl mx-auto">
          <h3 className="font-heading font-bold text-2xl text-content-main mb-3">
            Tem estofos ou colchões a precisar deste cuidado?
          </h3>
          <p className="text-content-muted text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
            Envie uma fotografia da peça e receba uma avaliação detalhada em minutos, sem compromisso e sem taxas de deslocação.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 min-h-[56px] px-8 rounded-xl bg-whatsapp hover:bg-[#20bd5a] text-content-main font-bold text-lg shadow-cta hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
          >
            <MessageCircle className="w-6 h-6 text-content-main" />
            <span>Quero um resultado assim, enviar fotos no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
