import Event from "../events/model/Event";

const events: Event[] = [
  {
    id: "4c1d8915-60a1-43f9-aff2-459c400d9981",
    alias: "evento-fullstack",
    password: "password123",
    name: "Evento de Desenvolvimento Fullstack",
    date: new Date("2024-12-01T10:00:00Z"),
    location: "São Paulo, SP",
    description:
      "Um evento completo para aprender desenvolvimento fullstack do zero.",
    image:
      "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
    imageBackground:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    expectedGuests: 200,
    guests: [
      {
        id: "48334517-d513-4012-810a-42d1839591f9",
        name: "Alice Silva",
        email: "alice@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 1,
      },
      {
        id: "46ac2c46-3525-4683-aecd-194f5995921f",
        name: "Carlos Pereira",
        email: "carlos@example.com",
        confirmed: false,
        hasCompanion: false,
        qtdCompanion: 0,
      },
      {
        id: "daa82661-2646-49e3-b271-4144346b8798",
        name: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 2,
      },
    ],
  },
  {
    id: "89946303-4c3c-4083-a8fb-301d08dfece2",
    alias: "evento-js-avancado",
    password: "js2024",
    name: "Workshop Avançado de JavaScript",
    date: new Date("2024-11-20T15:00:00Z"),
    location: "Rio de Janeiro, RJ",
    description: "Um workshop avançado para programadores JavaScript.",
    image:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imageBackground:
      "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    expectedGuests: 100,
    guests: [
      {
        id: "0ad93b34-7e69-4cea-b665-99c167fbae19",
        name: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0,
      },
      {
        id: "da027341-ebee-4ddd-8378-0cc99326779b",
        name: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 1,
      },
    ],
  },
  {
    id: "59bb52d8-e392-4767-8c93-3099658f2ebe",
    alias: "evento-dev-frontend",
    password: "front123",
    name: "Bootcamp de Desenvolvimento Frontend",
    date: new Date("2024-11-15T09:00:00Z"),
    location: "Belo Horizonte, MG",
    description: "Aprenda a criar interfaces incríveis e responsivas.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imageBackground:
      "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    expectedGuests: 150,
    guests: [
      {
        id: "faa6c274-a1d6-4720-9039-6c5c8a71e180",
        name: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 1,
      },
      {
        id: "8ccebbb2-7855-41e5-9ec2-c04b6bcb0bd0",
        name: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmed: false,
        hasCompanion: false,
        qtdCompanion: 0,
      },
      {
        id: "3daa71e6-34c0-4b47-b07a-d51df954a3d9",
        name: "Isabela Martins",
        email: "isabela@example.com",
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0,
      },
    ],
  },
  {
    id: "30d4e4d1-a82a-4b4a-ac0c-ef7d8e97426b",
    alias: "casamento-alberto-marina",
    password: "casamento2024",
    name: "Casamento do Alberto e Marina",
    date: new Date("2024-11-25T16:00:00Z"),
    location: "Florianópolis, SC",
    description:
      "Celebração do casamento de Alberto e Marina com amigos e familiares.",
    image:
      "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imageBackground:
      "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    expectedGuests: 150,
    guests: [
      {
        id: "df921c4b-1236-45ed-bd0e-831d9bd46e6d",
        name: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 1,
      },
      {
        id: "ade5c89f-ece1-4ffe-891e-45b857752591",
        name: "Carla Mendes",
        email: "carla@example.com",
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0,
      },
    ],
  },
  {
    id: "5919ac41-1849-464f-a642-03a1638ea5bd",
    alias: "aniversario-joao",
    password: "joao2024",
    name: "Aniversário do João - 30 Anos",
    date: new Date("2024-12-05T18:00:00Z"),
    location: "Curitiba, PR",
    description:
      "Comemoração dos 30 anos de João com amigos próximos e familiares.",
    image:
      "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imageBackground:
      "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    expectedGuests: 80,
    guests: [
      {
        id: "a8f25a9f-7791-4936-b302-b43a882c08de",
        name: "Maria Souza",
        email: "maria@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 2,
      },
      {
        id: "d6e597c1-00f7-4040-adc9-06bc0e987b39",
        name: "José Almeida",
        email: "jose@example.com",
        confirmed: false,
        hasCompanion: false,
        qtdCompanion: 0,
      },
    ],
  },
  {
    id: "83973d63-5129-4af3-98d2-13954b723223",
    alias: "inauguracao-loja-estrela",
    password: "estrela2024",
    name: "Inauguração da Loja Estrela",
    date: new Date("2024-12-10T09:00:00Z"),
    location: "Porto Alegre, RS",
    description:
      "Evento de inauguração da nova loja Estrela com brindes e promoções.",
    image:
      "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imageBackground:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    expectedGuests: 300,
    guests: [
      {
        id: "c97c8de7-dbe5-46a3-90a9-4b870b449a70",
        name: "Cláudia Lima",
        email: "claudia@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 3,
      },
      {
        id: "ae3694f8-521b-4ec8-a57d-329d3d5e8ec9",
        name: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0,
      },
    ],
  },
  {
    id: "c45977fa-9f95-4dc9-9d3c-3fea5404fd2c",
    alias: "reuniao-familia-oliveira",
    password: "familia2024",
    name: "Reunião da Família Oliveira",
    date: new Date("2024-12-15T12:00:00Z"),
    location: "Salvador, BA",
    description: "Reunião de fim de ano da família Oliveira.",
    image:
      "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imageBackground:
      "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    expectedGuests: 50,
    guests: [
      {
        id: "8ac6e70d-dc08-4baf-9f46-4d26a3aae18b",
        name: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 4,
      },
      {
        id: "0b2766fc-463f-4c5f-a1c1-efa0287e92f0",
        name: "Letícia Oliveira",
        email: "leticia@example.com",
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0,
      },
    ],
  },
];

export default events;
