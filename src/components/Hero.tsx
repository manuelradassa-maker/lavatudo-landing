import React from 'react';
import { MessageCircle, Phone, Check, Sparkles } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const Hero: React.FC = () => {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  const heroHeroItem = siteConfig.beforeAfterGallery[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/70 via-brand-light/20 to-white pt-8 sm:pt-14 pb-16">
      {/* Elementos decorativos de fundo (gotas / bolhas subtis de turquesa) */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-brand-turquoise/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-brand-light rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-site mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna de Texto e CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Selo pequeno */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-turquoise/40 shadow-sm text-brand-darker font-bold text-xs sm:text-sm mb-5">
              <span>🏠</span>
              <span>Vamos a sua casa • Sem custos de deslocação</span>
            </div>

            {/* H1 Principal (Único na página) */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] text-content-main leading-[1.15] tracking-tight mb-5">
              Sofás, colchões e tapetes como novos.{' '}
              <span className="text-brand-dark">Sem sair de casa.</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-content-muted text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Limpeza a seco ao domicílio, com remoção de nódoas e ácaros e produtos seguros para crianças e animais. Envie uma foto e receba o orçamento no WhatsApp.
            </p>

            {/* Dois CTAs grandes empilhados no mobile e lado a lado no desktop */}
            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              {/* 1. Botão Verde WhatsApp (destacado, maior) */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[56px] px-6 sm:px-8 rounded-xl bg-whatsapp hover:bg-[#20bd5a] text-content-main font-bold text-base sm:text-lg shadow-cta hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 active:scale-[0.98] text-center"
              >
                <MessageCircle className="w-6 h-6 shrink-0 text-content-main" />
                <span>Pedir orçamento por foto no WhatsApp</span>
              </a>

              {/* 2. Botão contorno turquesa escuro */}
              <a
                href={`tel:${siteConfig.phone.raw}`}
                className="min-h-[56px] px-6 rounded-xl border-2 border-brand-dark hover:bg-brand-dark hover:text-white text-brand-dark font-bold text-base sm:text-lg transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-[0.98] text-center bg-white"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>Ligar agora</span>
              </a>
            </div>

            {/* Linha de Confiança */}
            <div className="w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-semibold text-content-main pt-1">
              <span className="inline-flex items-center gap-1.5 text-brand-darker">
                <Check className="w-4 h-4 text-brand-dark stroke-[3]" />
                Sem custos de deslocação
              </span>
              <span className="inline-flex items-center gap-1.5 text-brand-darker">
                <Check className="w-4 h-4 text-brand-dark stroke-[3]" />
                Seguro para crianças e animais
              </span>
              <span className="inline-flex items-center gap-1.5 text-brand-darker">
                <Check className="w-4 h-4 text-brand-dark stroke-[3]" />
                Orçamento por foto
              </span>
            </div>
          </div>

          {/* Coluna Visual: BeforeAfterSlider como Prova Imediata */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-soft-lg border border-gray-100">
              <div className="mb-2.5 flex items-center justify-between px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Arraste para comparar
                </span>
                <span className="text-xs font-semibold text-content-muted">
                  Sofá em Almada
                </span>
              </div>
              <BeforeAfterSlider
                beforeImage={heroHeroItem.beforeImage}
                afterImage={heroHeroItem.afterImage}
                altBefore={heroHeroItem.altBefore}
                altAfter={heroHeroItem.altAfter}
                label={heroHeroItem.title}
                location={heroHeroItem.location}
                aspectRatioClass="aspect-[4/3]"
                initialPosition={50}
              />
              <p className="text-center text-[11px] text-content-muted mt-2 font-medium">
                Deslize o manípulo ou use as setas do teclado para ver a diferença
              </p>
            </div>
          </div>
        </div>

        {/* Barra de Indicadores (3 a 4 itens) */}
        <div className="mt-14 pt-8 border-t border-gray-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {siteConfig.metrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-soft text-center hover:-translate-y-0.5 transition-transform"
              >
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark mb-1">
                  {item.highlight}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-content-main">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
