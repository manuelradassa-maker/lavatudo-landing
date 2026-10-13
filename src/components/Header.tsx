import React, { useState } from 'react';
import { Sparkles, Phone, MessageCircle, Menu, X } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Contactos', href: '#contacto' },
  ];

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-site mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logótipo */}
        <a
          href="#"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded-lg p-1"
          aria-label="LavaTudo - Página Inicial"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark group-hover:scale-105 transition-transform shrink-0 shadow-sm">
            <Sparkles className="w-6 h-6 text-brand-dark" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-2xl tracking-tight leading-none">
              <span className="text-brand-dark">Lava</span>
              <span className="text-content-main">Tudo</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-content-muted tracking-tight mt-0.5">
              Higienização de Estofos & Colchões
            </span>
          </div>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-content-main hover:text-brand-dark transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botões do Topo (Desktop e Mobile) */}
        <div className="flex items-center gap-3">
          {/* Botão Ligar (sempre visível no mobile e desktop) */}
          <a
            href={`tel:${siteConfig.phone.raw}`}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-all text-sm font-bold min-h-[44px] shrink-0"
            aria-label={`Ligar para ${siteConfig.phone.display}`}
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Ligar: {siteConfig.phone.display}</span>
            <span className="sm:hidden">Ligar</span>
          </a>

          {/* Botão Orçamento por foto (desktop) */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-whatsapp hover:bg-[#20bd5a] text-content-main font-bold text-sm shadow-sm hover:shadow-md transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 shrink-0 text-content-main" />
            <span>Orçamento por foto</span>
          </a>

          {/* Menu Hambúrguer (Mobile) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-content-main hover:bg-gray-100 min-w-[48px] min-h-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-dark"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Drawer de Navegação Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-3" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-content-main hover:text-brand-dark py-2 border-b border-gray-100 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-whatsapp text-content-main font-bold shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pedir orçamento por foto no WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
