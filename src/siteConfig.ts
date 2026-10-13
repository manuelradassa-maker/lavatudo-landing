export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: 'Sofa' | 'Bed' | 'Sparkles' | 'Car';
  image: string;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  altBefore: string;
  altAfter: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  phone: {
    display: string;
    raw: string; // E.164 without spaces for tel:
  };
  whatsapp: {
    number: string; // Formato internacional sem + (ex: 351912345678)
    defaultMessage: string;
  };
  address: {
    city: string;
    region: string;
    fullArea: string;
    mapEmbedUrl: string;
    mapDirectUrl: string;
  };
  hours: {
    display: string;
    whatsappNotice: string;
  };
  coverageAreas: string[];
  metrics: {
    label: string;
    highlight: string;
  }[];
  services: ServiceItem[];
  beforeAfterGallery: BeforeAfterPair[];
  testimonials: TestimonialItem[];
  about: {
    title: string;
    paragraphs: string[];
    // CONFIRMAR COM A FICHA DE SEGURANÇA DOS PRODUTOS ANTES DE PUBLICAR A AFIRMAÇÃO "SEGURO PARA CRIANÇAS E ANIMAIS"
    safetyNotice: string;
    keyPoints: {
      title: string;
      description: string;
      icon: 'Truck' | 'ShieldCheck' | 'Clock' | 'Camera';
    }[];
    technicianImage: string;
  };
}

// ============================================================================
// CONFIGURAÇÃO CENTRALIZADA DO NEGÓCIO - LAVATUDO
// Edite os dados abaixo para atualizar todo o conteúdo do website.
// ============================================================================
export const siteConfig: BusinessConfig = {
  name: "LavaTudo",
  tagline: "Higienização de Estofos & Colchões",

  // DADOS A SUBSTITUIR POR DADOS REAIS
  phone: {
    display: "912 345 678",
    raw: "+351912345678", // SUBSTITUIR PELO NÚMERO DE TELEMÓVEL REAL
  },

  whatsapp: {
    number: "351912345678", // SUBSTITUIR PELO NÚMERO WHATSAPP REAL (código 351 + 9 dígitos)
    defaultMessage: "Olá! Gostaria de um orçamento por foto para higienização ao domicílio.",
  },

  address: {
    city: "Almada",
    region: "Margem Sul",
    fullArea: "Margem Sul com base em Almada (deslocação grátis)",
    mapEmbedUrl: "https://www.google.com/maps?q=LavaTudo+Almada&output=embed",
    mapDirectUrl: "https://maps.google.com/?q=LavaTudo+Almada",
  },

  hours: {
    display: "Segunda a Sábado: 09:00 - 19:00",
    whatsappNotice: "Pedidos e envio de fotos no WhatsApp disponíveis 24/7",
  },

  coverageAreas: [
    "Almada",
    "Seixal",
    "Barreiro",
    "Moita",
    "Montijo",
    "Sesimbra",
    "Setúbal",
    "Costa da Caparica",
  ],

  metrics: [
    { highlight: "0 €", label: "Deslocação incluída" },
    { highlight: "+1000", label: "Peças higienizadas" },
    { highlight: "100%", label: "Ao domicílio" },
    { highlight: "8", label: "Concelhos na Margem Sul" },
  ],

  services: [
    {
      id: "sofas",
      title: "Sofás e estofos",
      description: "Limpeza a seco especializada, remoção de nódoas difíceis, manchas de uso e eliminação de odores desagradáveis sem danificar o tecido.",
      badge: "Deslocação grátis",
      iconName: "Sofa",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "colchoes",
      title: "Colchões",
      description: "Extração profunda de ácaros, bactérias, suor e manchas amareladas, promovendo um descanso saudável e alívio de crises alérgicas.",
      badge: "Deslocação grátis",
      iconName: "Bed",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "tapetes",
      title: "Tapetes e carpetes",
      description: "Higienização profunda fibra a fibra que recupera as cores originais, remove poeiras incrustadas e devolve a frescura ao piso.",
      badge: "Deslocação grátis",
      iconName: "Sparkles",
      image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "automovel",
      title: "Estofos de automóvel",
      description: "Lavagem detalhada de bancos, tetos, portas e alcatifas do carro, diretamente à sua porta ou no seu local de trabalho.",
      badge: "Deslocação grátis",
      iconName: "Car",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // ============================================================================
  // // SUBSTITUIR POR FOTOS REAIS DE ANTES/DEPOIS
  // ============================================================================
  beforeAfterGallery: [
    {
      id: "sofa-almada",
      title: "Sofá em tecido",
      location: "Almada",
      tag: "Sofás",
      // Imagem antes com filtro/tom simulando sujidade/nódoas vs imagem limpa e vibrante
      beforeImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=70&sat=-40&con=20",
      afterImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=85",
      altBefore: "Sofá em tecido antes da higienização com nódoas e marcas de uso em Almada",
      altAfter: "Sofá em tecido depois da higienização a seco LavaTudo em Almada",
    },
    {
      id: "colchao-seixal",
      title: "Colchão com manchas",
      location: "Seixal",
      tag: "Colchões",
      beforeImage: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=900&q=70&sat=-30&bri=-15",
      afterImage: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=900&q=85",
      altBefore: "Colchão antes da remoção de ácaros e manchas no Seixal",
      altAfter: "Colchão higienizado e revitalizado no Seixal",
    },
    {
      id: "tapete-barreiro",
      title: "Tapete de sala",
      location: "Barreiro",
      tag: "Tapetes",
      beforeImage: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=70&sat=-50",
      afterImage: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=85",
      altBefore: "Tapete de sala escurecido e com pó incrustado no Barreiro",
      altAfter: "Tapete de sala com cores restauradas após higienização no Barreiro",
    },
    {
      id: "carro-setubal",
      title: "Banco de automóvel",
      location: "Setúbal",
      tag: "Automóvel",
      beforeImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=70&sat=-30&bri=-20",
      afterImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",
      altBefore: "Bancos de viatura com manchas de líquidos em Setúbal",
      altAfter: "Bancos de viatura limpos e higienizados ao domicílio em Setúbal",
    },
  ],

  about: {
    title: "Higiene a sério, ao seu ritmo e em sua casa",
    paragraphs: [
      "Na LavaTudo levamos o serviço até à sua porta, sem custos de deslocação em toda a Margem Sul. Usamos produtos seguros para crianças e animais e técnicas de limpeza a seco com injeção-extração, para que possa voltar a usar o sofá ou o colchão rapidamente.",
      "Sem complicações de transporte, sem surpresas no valor final: envia-nos uma fotografia pelo WhatsApp, passamos o orçamento fechado e combinamos o dia que for mais conveniente para si.",
    ],
    // CONFIRMAR COM A FICHA DE SEGURANÇA DOS PRODUTOS ANTES DE PUBLICAR A AFIRMAÇÃO "SEGURO PARA CRIANÇAS E ANIMAIS"
    safetyNotice: "Produtos biodegradáveis dermatologicamente testados e formulados para ambiente familiar.",
    keyPoints: [
      {
        title: "Deslocação grátis",
        description: "Não cobramos taxa de deslocação em nenhum dos concelhos servidos na Margem Sul.",
        icon: "Truck",
      },
      {
        title: "Seguro para crianças e animais",
        description: "Fórmulas não tóxicas e ecológicas que cuidam da sua saúde e dos seus patudos.",
        icon: "ShieldCheck",
      },
      {
        title: "Limpeza a seco, secagem rápida",
        description: "Extração potente de humidade que permite utilizar os estofos poucas horas após o serviço.",
        icon: "Clock",
      },
      {
        title: "Orçamento por foto, sem compromisso",
        description: "Basta fotografar a peça com o telemóvel e enviar no WhatsApp para resposta imediata.",
        icon: "Camera",
      },
    ],
    technicianImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
  },

  // ============================================================================
  // // SUBSTITUIR POR AVALIAÇÕES REAIS
  // ============================================================================
  testimonials: [
    {
      id: "test-1",
      name: "Carla M.",
      location: "Almada",
      service: "Sofá",
      rating: 5,
      text: "O sofá tinha nódoas de anos e ficou irreconhecível. E ainda vieram a casa, sem cobrar deslocação.",
    },
    {
      id: "test-2",
      name: "Nuno F.",
      location: "Seixal",
      service: "Colchões e sofá",
      rating: 5,
      text: "Tenho um cão e duas crianças, por isso a segurança dos produtos era essencial. Ficámos muito satisfeitos.",
    },
    {
      id: "test-3",
      name: "Inês T.",
      location: "Barreiro",
      service: "Estofos de automóvel",
      rating: 5,
      text: "Enviei duas fotos ao fim do dia e tive o orçamento em minutos. O banco do carro ficou como novo.",
    },
  ],
};
