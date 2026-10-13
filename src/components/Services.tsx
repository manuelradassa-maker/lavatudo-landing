import React from 'react';
import { Armchair, Bed, Sparkles, Car, MessageCircle, ArrowRight, Camera, CalendarCheck, Home } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sofa':
        return <Armchair className="w-6 h-6 text-brand-dark" />;
      case 'Bed':
        return <Bed className="w-6 h-6 text-brand-dark" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-brand-dark" />;
      case 'Car':
        return <Car className="w-6 h-6 text-brand-dark" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-dark" />;
    }
  };

  const createWhatsAppServiceLink = (serviceTitle: string) => {
    const msg = `Olá! Gostaria de pedir um orçamento para higienização de ${serviceTitle} ao domicílio.`;
    return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="servicos" className="bg-surface-light py-20 scroll-mt-20">
      <div className="max-w-site mx-auto px-4 sm:px-6">
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-darker text-xs font-bold uppercase tracking-wider mb-3">
            Especialistas ao Domicílio
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-content-main tracking-tight mb-4">
            O que higienizamos
          </h2>
          <p className="text-content-muted text-base sm:text-lg leading-relaxed">
            Levamos o equipamento até si e deixamos tudo limpo, fresco e pronto a usar.
          </p>
        </div>

        {/* Grelha de Cards de Serviços (1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col border border-gray-100 group"
            >
              {/* Imagem do Serviço */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={`Serviço de limpeza de ${service.title} ao domicílio`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-lg bg-brand-dark text-white shadow-sm">
                  {service.badge}
                </span>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mb-4 group-hover:bg-brand-turquoise/20 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-content-main mb-2">
                    {service.title}
                  </h3>
                  <p className="text-content-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Link / Botão CTA do Card */}
                <a
                  href={createWhatsAppServiceLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-surface-light hover:bg-brand-light text-brand-dark hover:text-brand-darker font-bold text-sm transition-colors border border-gray-200 hover:border-brand-turquoise/30"
                  aria-label={`Pedir orçamento para ${service.title} no WhatsApp`}
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    Pedir orçamento
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Faixa "Como Funciona" com 3 Passos */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft border border-gray-100">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">Processo simples e rápido</span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-content-main mt-1">
              Como funciona o serviço
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Passo 1 */}
            <div className="flex flex-col items-center text-center p-4 relative">
              <div className="w-16 h-16 rounded-2xl bg-brand-light text-brand-dark flex items-center justify-center mb-4 shadow-sm relative">
                <Camera className="w-8 h-8" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-dark text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                  1
                </span>
              </div>
              <h4 className="font-heading font-bold text-lg text-content-main mb-2">
                Tire fotos da peça
              </h4>
              <p className="text-content-muted text-sm leading-relaxed">
                Fotografe o sofá, colchão, tapete ou viatura com o seu telemóvel e envie-nos pelo WhatsApp.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="flex flex-col items-center text-center p-4 relative">
              <div className="w-16 h-16 rounded-2xl bg-brand-light text-brand-dark flex items-center justify-center mb-4 shadow-sm relative">
                <CalendarCheck className="w-8 h-8" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-dark text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                  2
                </span>
              </div>
              <h4 className="font-heading font-bold text-lg text-content-main mb-2">
                Receba o orçamento
              </h4>
              <p className="text-content-muted text-sm leading-relaxed">
                Avaliamos o estado do estofo, enviamos o valor fechado sem surpresas e escolhemos a data mais cómoda.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="flex flex-col items-center text-center p-4 relative">
              <div className="w-16 h-16 rounded-2xl bg-brand-light text-brand-dark flex items-center justify-center mb-4 shadow-sm relative">
                <Home className="w-8 h-8" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-dark text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                  3
                </span>
              </div>
              <h4 className="font-heading font-bold text-lg text-content-main mb-2">
                Higienizamos no local
              </h4>
              <p className="text-content-muted text-sm leading-relaxed">
                Vamos a sua casa com equipamento profissional e cuidamos de tudo com secagem rápida e zero deslocação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
