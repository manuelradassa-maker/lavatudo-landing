import React from 'react';
import { Truck, ShieldCheck, Clock, Camera, Star, MessageCircle, ExternalLink, CheckCircle } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export const AboutAndTestimonials: React.FC = () => {
  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case 'Truck':
        return <Truck className="w-5 h-5 text-brand-dark" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-brand-dark" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-brand-dark" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-brand-dark" />;
      default:
        return <CheckCircle className="w-5 h-5 text-brand-dark" />;
    }
  };

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    'Olá! Gostaria de saber mais sobre os vossos serviços de higienização ao domicílio e pedir um orçamento por foto.'
  )}`;

  return (
    <section id="sobre" className="bg-surface-light py-20 scroll-mt-20">
      <div className="max-w-site mx-auto px-4 sm:px-6">
        {/* PARTE A: SOBRE NÓS (DUAS COLUNAS: TEXTO + IMAGEM DO TÉCNICO A TRABALHAR) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          {/* Coluna Texto */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-darker text-xs font-bold uppercase tracking-wider mb-3">
              Compromisso e Proximidade
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-content-main tracking-tight mb-6">
              {siteConfig.about.title}
            </h2>

            <div className="space-y-4 text-content-muted text-base sm:text-lg leading-relaxed mb-8">
              {siteConfig.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 4 Pontos Fortes com Ícones */}
            {/* CONFIRMAR COM A FICHA DE SEGURANÇA DOS PRODUTOS ANTES DE PUBLICAR A AFIRMAÇÃO "SEGURO PARA CRIANÇAS E ANIMAIS" */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {siteConfig.about.keyPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center shrink-0">
                    {getFeatureIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-content-main mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-content-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Falar no WhatsApp */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[56px] px-8 rounded-xl bg-whatsapp hover:bg-[#20bd5a] text-content-main font-bold text-lg shadow-cta hover:shadow-xl transition-all duration-200 inline-flex items-center gap-3 active:scale-[0.98]"
            >
              <MessageCircle className="w-6 h-6 text-content-main" />
              <span>Falar connosco no WhatsApp</span>
            </a>
          </div>

          {/* Coluna Imagem do Técnico */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg aspect-[4/5] bg-gray-100 border-4 border-white">
              <img
                src={siteConfig.about.technicianImage}
                alt="Técnico especializado da LavaTudo a realizar higienização de sofá ao domicílio"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-content-main/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-dark text-white text-xs font-bold uppercase mb-2">
                  Ao domicílio na Margem Sul
                </span>
                <p className="text-sm font-medium leading-snug">
                  Equipamento profissional de injeção-extração com produtos dermatologicamente testados.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PARTE B: TESTEMUNHOS */}
        <div id="avaliacoes" className="scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-content-main text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              Prova Social Verificada
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-content-main tracking-tight mb-3">
              O que dizem os nossos clientes
            </h2>

            {/* Resumo no Topo: 5 estrelas + 5,0 Avaliações no Google */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex text-rating" aria-label="Classificação de 5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-rating" />
                ))}
              </div>
              <span className="text-base font-bold text-content-main">
                5,0 • Avaliações no Google
              </span>
            </div>
          </div>

          {/* Grelha de Testemunhos (Scroll horizontal snap no mobile, 3 colunas no desktop) */}
          {/* SUBSTITUIR POR AVALIAÇÕES REAIS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {siteConfig.testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-soft border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-rating">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-rating" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-brand-dark bg-brand-light px-2.5 py-0.5 rounded-full">
                      {item.service}
                    </span>
                  </div>
                  <p className="text-content-main text-base leading-relaxed italic mb-6">
                    "{item.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                  <span className="font-bold text-content-main">{item.name}</span>
                  <span className="text-xs text-content-muted font-medium">📍 {item.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Botão Ver mais avaliações no Google */}
          <div className="text-center">
            <a
              href={siteConfig.address.mapDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-content-main font-bold text-sm border border-gray-200 shadow-sm transition-colors"
            >
              <span>Ver mais avaliações no Google</span>
              <ExternalLink className="w-4 h-4 text-brand-dark" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
