import { Event } from 'core';

const events: Event[] = [
  {
    id: 'c729df04-1ff1-4b18-aa53-6cdb13bc5c26',
    alias: 'evento-fullstack',
    password: 'password123',
    name: 'Evento de Desenvolvimento Fullstack',
    date: new Date('2024-12-01T10:00:00Z'),
    location: 'São Paulo, SP',
    description:
      'Um evento completo para aprender desenvolvimento fullstack do zero.',
    image:
      'https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk',
    imageBackground:
      'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
    expectedGuests: 200,
    guests: [
      {
        id: '5698108e-da63-47b1-9690-2df500f44b6b',
        name: 'Alice Silva',
        email: 'alice@example.com',
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 1,
      },
      {
        id: '60e9529c-8db0-4946-a3fb-d223517c1813',
        name: 'Carlos Pereira',
        email: 'carlos@example.com',
        confirmed: false,
        hasCompanion: false,
        qtdCompanion: 0,
      },
      {
        id: '7ad99a22-93f7-4cf0-9401-1f82477b7a3f',
        name: 'Beatriz Lima',
        email: 'beatriz@example.com',
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 2,
      },
    ],
  },
  {
    id: '7da10c95-d0c0-458a-b5f4-ec9ebd97db73',
    alias: 'evento-js-avancado',
    password: 'js2024',
    name: 'Workshop Avançado de JavaScript',
    date: new Date('2024-11-20T15:00:00Z'),
    location: 'Rio de Janeiro, RJ',
    description: 'Um workshop avançado para programadores JavaScript.',
    image:
      'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
    imageBackground:
      'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
    expectedGuests: 100,
    guests: [
      {
        id: '9d1b32b0-1ccc-4a05-997f-93991806df15',
        name: 'Eduardo Santos',
        email: 'eduardo@example.com',
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0,
      },
      {
        id: '997c2e63-b713-4221-a36d-73540f8a573c',
        name: 'Fernanda Costa',
        email: 'fernanda@example.com',
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 1,
      },
    ],
  },
  {
    id: '73e8e59c-d304-4d06-a35c-4b12669cdff2',
    alias: 'evento-dev-frontend',
    password: 'front123',
    name: 'Bootcamp de Desenvolvimento Frontend',
    date: new Date('2024-11-15T09:00:00Z'),
    location: 'Belo Horizonte, MG',
    description: 'Aprenda a criar interfaces incríveis e responsivas.',
    image:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
    imageBackground:
      'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
    expectedGuests: 150,
    guests: [
      {
        id: '9c13ef37-b7fa-47f0-9267-93ba11384d02',
        name: 'Gabriela Rocha',
        email: 'gabriela@example.com',
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 1,
      },
      {
        id: '42fd14f8-1dc2-4a9f-b262-5da0a6ce247e',
        name: 'Hugo Nogueira',
        email: 'hugo@example.com',
        confirmed: false,
        hasCompanion: false,
        qtdCompanion: 0,
      },
      {
        id: 'd94b6da0-1f70-4e45-889c-3fa66ccdc4af',
        name: 'Isabela Martins',
        email: 'isabela@example.com',
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0,
      },
    ],
  },
  {
    id: 'ca1657cb-86ba-47fe-ae6f-354bb8c7a197',
    alias: 'casamento-alberto-marina',
    password: 'casamento2024',
    name: 'Casamento do Alberto e Marina',
    date: new Date('2024-11-25T16:00:00Z'),
    location: 'Florianópolis, SC',
    description:
      'Celebração do casamento de Alberto e Marina com amigos e familiares.',
    image:
      'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
    imageBackground:
      'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
    expectedGuests: 150,
    guests: [
      {
        id: '10c8fd80-4ac3-4f0f-9835-94b40c95277f',
        name: 'Bruno Cardoso',
        email: 'bruno@example.com',
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 1,
      },
      {
        id: '2102e1fe-3f06-4ad4-992e-02803d3c711e',
        name: 'Carla Mendes',
        email: 'carla@example.com',
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0,
      },
    ],
  },
  {
    id: '34fe978e-8f16-405b-9fce-b89eb2b20d08',
    alias: 'aniversario-joao',
    password: 'joao2024',
    name: 'Aniversário do João - 30 Anos',
    date: new Date('2024-12-05T18:00:00Z'),
    location: 'Curitiba, PR',
    description:
      'Comemoração dos 30 anos de João com amigos próximos e familiares.',
    image:
      'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
    imageBackground:
      'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
    expectedGuests: 80,
    guests: [
      {
        id: '0502252f-249e-4f77-becf-411aa5c82821',
        name: 'Maria Souza',
        email: 'maria@example.com',
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 2,
      },
      {
        id: '48708779-c7ad-49bf-820c-097fc1eacae9',
        name: 'José Almeida',
        email: 'jose@example.com',
        confirmed: false,
        hasCompanion: false,
        qtdCompanion: 0,
      },
    ],
  },
  {
    id: '98903f53-3ba6-424e-beca-3cb35c490aa3',
    alias: 'inauguracao-loja-estrela',
    password: 'estrela2024',
    name: 'Inauguração da Loja Estrela',
    date: new Date('2024-12-10T09:00:00Z'),
    location: 'Porto Alegre, RS',
    description:
      'Evento de inauguração da nova loja Estrela com brindes e promoções.',
    image:
      'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
    imageBackground:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
    expectedGuests: 300,
    guests: [
      {
        id: 'cf4169c7-058b-469d-bd85-3a6dbd7e17f8',
        name: 'Cláudia Lima',
        email: 'claudia@example.com',
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 3,
      },
      {
        id: '545b9dba-9090-4af8-a37c-c71ef6e7983a',
        name: 'Ricardo Barbosa',
        email: 'ricardo@example.com',
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0,
      },
    ],
  },
  {
    id: 'f3491f63-a40d-445f-8871-1edc5b5e85dd',
    alias: 'reuniao-familia-oliveira',
    password: 'familia2024',
    name: 'Reunião da Família Oliveira',
    date: new Date('2024-12-15T12:00:00Z'),
    location: 'Salvador, BA',
    description: 'Reunião de fim de ano da família Oliveira.',
    image:
      'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
    imageBackground:
      'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
    expectedGuests: 50,
    guests: [
      {
        id: 'aad77554-24d8-4062-9f4b-9889aadb7527',
        name: 'Thiago Oliveira',
        email: 'thiago@example.com',
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 4,
      },
      {
        id: 'd32f95a7-73e3-4b19-aedf-c2e1bbad0b27',
        name: 'Letícia Oliveira',
        email: 'leticia@example.com',
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0,
      },
    ],
  },
];

export default events;
