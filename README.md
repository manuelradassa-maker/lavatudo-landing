# LavaTudo - Higienização de Estofos & Colchões

Landing page de alta conversão para negócio local de higienização de sofás, colchões, tapetes e estofos automóveis ao domicílio na Margem Sul (Almada, Seixal, Barreiro, Moita, Montijo, Sesimbra, Setúbal e Costa da Caparica).

## 🚀 Tecnologias
- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS** (Design System com contraste acessível WCAG AA)
- **Lucide React** (Ícones leves e modernos)
- **Google Fonts** (Plus Jakarta Sans & Inter)

## ✨ Funcionalidades
- **Sliders Interativos Antes / Depois**: Com controlo tátil, rato e teclado (`role="slider"`).
- **Formulário de Orçamento Rápido**: Com validação de números portugueses e integração direta com WhatsApp (`wa.me` com `encodeURIComponent`).
- **Mobile-First & Barra Fixa**: Botões rápidos de chamada direta e envio de foto no rodapé móvel.
- **Botão Flutuante de WhatsApp**: Com tooltip e animação de pulsação suave.
- **Configuração Centralizada**: Todos os contactos, horários, preços e textos em `src/siteConfig.ts`.
- **SEO Completo**: Open Graph, Twitter Cards e dados estruturados Schema.org `LocalBusiness` em JSON-LD.

## 🛠️ Como Executar Localmente
```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

## ⚙️ Configuração do Negócio
Para alterar os números de contacto, concelhos ou fotos:
Edite o ficheiro `src/siteConfig.ts`.
