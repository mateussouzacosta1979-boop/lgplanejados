// ═══════════════════════════════════════════════════════════════════
// CONFIGURAÇÃO DO SITE - LG Planejados - Marcenaria
// ═══════════════════════════════════════════════════════════════════
// Edite os textos abaixo para personalizar o conteúdo do site.
// Após editar, faça commit e push — as mudanças aparecem automaticamente.

const CONFIG = {
  
  // ─── IMAGENS ──────────────────────────────────────────────────────
  imagens: {
    // Coloque a imagem no repositório e atualize o caminho aqui
    heroBackground: "hero-bg.jpg",       // Imagem de fundo do Hero (lado direito)
    sobreFoto: "sobre-foto.jpg",         // Foto na seção Sobre
    
    // Imagens de fundo para cada serviço (deixe vazio "" para usar só cor)
    servicosCozinha: "servicos/cozinha.jpg",
    servicosQuarto: "servicos/quarto.jpg",
    servicosEscritorio: "servicos/escritorio.jpg",
    servicosBanheiro: "servicos/banheiro.jpg",
    servicosSala: "servicos/sala.jpg",
    servicosComercial: "servicos/comercial.jpg",
  },

  // ─── HERO (Banner Principal) ──────────────────────────────────────
  hero: {
    eyebrow: "Marcenaria & Móveis Planejados",
    titulo: "Arte e Precisão",
    tituloDestaque: "em Cada Detalhe",  // aparece em itálico dourado
    descricao: "Transformamos madeira nobre em ambientes que contam a sua história. Criamos móveis planejados com excelência artesanal e design contemporâneo.",
  },

  // ─── SOBRE ────────────────────────────────────────────────────────
  sobre: {
    titulo: "Paixão pela",
    tituloDestaque: "Marcenaria",
    subtitulo: "desde 2009",
    descricao: "A LG Planejados - Marcenaria nasceu do amor pela madeira e do compromisso com a qualidade. Com mais de 15 anos de experiência, criamos ambientes únicos que refletem a personalidade de cada cliente, unindo técnica apurada com design moderno.",
    anosExperiencia: "15+",
    labelAnos: "Anos de<br>Excelência",
  },

  // ─── SERVIÇOS ─────────────────────────────────────────────────────
  servicos: {
    titulo: "Soluções Completas em",
    tituloDestaque: "Marcenaria",
    descricao: "Do projeto à instalação, oferecemos uma experiência completa e personalizada para transformar sua casa ou empresa.",
    
    lista: [
      {
        bgImage: "servicosCozinha",  // chave da imagem em CONFIG.imagens
        titulo: "Cozinhas Planejadas",
        descricao: "Cozinhas funcionais e elegantes com aproveitamento total do espaço, armários, bancadas e acabamentos premium.",
      },
      {
        bgImage: "servicosQuarto",
        titulo: "Dormitórios",
        descricao: "Quartos com guarda-roupas planejados, cabeceiras, criados-mudos e painéis personalizados.",
      },
      {
        bgImage: "servicosEscritorio",
        titulo: "Escritórios & Home Office",
        descricao: "Ambientes de trabalho produtivos com estantes, mesas, painéis e armazenamento inteligente.",
      },
      {
        bgImage: "servicosBanheiro",
        titulo: "Banheiros & Lavabos",
        descricao: "Armários e gabinetes planejados com resistência à umidade e design sofisticado.",
      },
      {
        bgImage: "servicosSala",
        titulo: "Salas & Painéis",
        descricao: "Estantes, painéis de TV, aparadores e modulares que harmonizam funcionalidade com estética.",
      },
      {
        bgImage: "servicosComercial",
        titulo: "Projetos Comerciais",
        descricao: "Lojas, restaurantes e escritórios com soluções em marcenaria que expressam sua marca.",
      },
    ],
  },

  // ─── GALERIA ──────────────────────────────────────────────────────
  galeria: {
    titulo: "Trabalhos que",
    tituloDestaque: "Inspiram",
    descricao: "Cada projeto é único. Veja nossos trabalhos e imagine o que podemos criar para você.",
  },

  // ─── DEPOIMENTOS ──────────────────────────────────────────────────
  depoimentos: {
    titulo: "O Que Dizem",
    tituloDestaque: "Nossos Clientes",
    
    lista: [
      {
        texto: "A cozinha planejada ficou incrível! Superou todas as minhas expectativas. O acabamento é impecável e o atendimento foi excelente do início ao fim.",
        autor: "Ana Ferreira",
        info: "Cliente · Cozinha Planejada",
        iniciais: "A",
      },
      {
        texto: "Fizemos o dormitório completo e ficou um sonho. Aproveitaram cada centímetro do espaço com muita criatividade. Recomendo a todos!",
        autor: "Ricardo Souza",
        info: "Cliente · Dormitório Casal",
        iniciais: "R",
      },
      {
        texto: "Profissionais sérios, pontuais e com um talento impressionante. Meu escritório ficou lindo e funcional. Vou contratar novamente com certeza.",
        autor: "Mariana Costa",
        info: "Cliente · Home Office",
        iniciais: "M",
      },
    ],
  },

  // ─── CONTATO ──────────────────────────────────────────────────────
  contato: {
    titulo: "Vamos Criar Algo",
    tituloDestaque: "Especial",
    subtitulo: "Juntos",
    descricao: "Entre em contato e receba um orçamento personalizado sem compromisso.",
    
    telefone: "(11) 98673-0990",
    email: "planejadoslg42@gmail.com",
    endereco: "Rua Carijos, 3381, Vila Linda<br>Santo André, SP",
    horario: "Segunda a quinta das 08:00 às 18:00 e as Sextas das 08:00 às 17:00",
  },

  // ─── FOOTER ───────────────────────────────────────────────────────
  footer: {
    descricao: "Transformando espaços com arte, precisão e paixão pela madeira há mais de 15 anos.",
    copyright: "© 2025 LG Planejados - Marcenaria. Todos os direitos reservados.",
    assinatura: "Feito com arte & dedicação",
  },

};
