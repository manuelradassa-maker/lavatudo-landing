import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Results } from './components/Results';
import { AboutAndTestimonials } from './components/AboutAndTestimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileActionBar } from './components/MobileActionBar';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-content-main selection:bg-brand-light selection:text-brand-darker">
      {/* Header Sticky */}
      <Header />

      {/* Conteúdo Principal com Estrutura Semântica */}
      <main className="flex-1">
        {/* Secção 1: Hero com Prova Imediata e Indicadores */}
        <Hero />

        {/* Secção 2: Serviços & Processo Passo a Passo */}
        <Services />

        {/* Secção 3: Resultados Antes/Depois com Sliders Interativos */}
        <Results />

        {/* Secção 4: Sobre & Testemunhos Verificados */}
        <AboutAndTestimonials />

        {/* Secção 5: Contacto, Formulário Rápido e Localização */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Componentes Flutuantes de Alta Conversão */}
      <FloatingWhatsApp />
      <MobileActionBar />
    </div>
  );
};

export default App;
