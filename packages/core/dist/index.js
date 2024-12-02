"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Alias: () => Alias,
  DateFormatter: () => DateFormatter,
  Id: () => Id,
  Password: () => Password,
  complementaryEvent: () => complementaryEvent,
  complementaryGuest: () => complementaryGuest,
  createEmptyEvent: () => createEmptyEvent,
  createEmptyguest: () => createEmptyguest,
  events: () => events_default
});
module.exports = __toCommonJS(src_exports);

// src/constants/events.ts
var events = [
  {
    id: "4c1d8915-60a1-43f9-aff2-459c400d9981",
    alias: "evento-fullstack",
    password: "password123",
    name: "Evento de Desenvolvimento Fullstack",
    date: /* @__PURE__ */ new Date("2024-12-01T10:00:00Z"),
    location: "S\xE3o Paulo, SP",
    description: "Um evento completo para aprender desenvolvimento fullstack do zero.",
    image: "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
    imageBackground: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    expectedGuests: 200,
    guests: [
      {
        id: "48334517-d513-4012-810a-42d1839591f9",
        name: "Alice Silva",
        email: "alice@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 1
      },
      {
        id: "46ac2c46-3525-4683-aecd-194f5995921f",
        name: "Carlos Pereira",
        email: "carlos@example.com",
        confirmed: false,
        hasCompanion: false,
        qtdCompanion: 0
      },
      {
        id: "daa82661-2646-49e3-b271-4144346b8798",
        name: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 2
      }
    ]
  },
  {
    id: "89946303-4c3c-4083-a8fb-301d08dfece2",
    alias: "evento-js-avancado",
    password: "js2024",
    name: "Workshop Avan\xE7ado de JavaScript",
    date: /* @__PURE__ */ new Date("2024-11-20T15:00:00Z"),
    location: "Rio de Janeiro, RJ",
    description: "Um workshop avan\xE7ado para programadores JavaScript.",
    image: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imageBackground: "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    expectedGuests: 100,
    guests: [
      {
        id: "0ad93b34-7e69-4cea-b665-99c167fbae19",
        name: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0
      },
      {
        id: "da027341-ebee-4ddd-8378-0cc99326779b",
        name: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 1
      }
    ]
  },
  {
    id: "59bb52d8-e392-4767-8c93-3099658f2ebe",
    alias: "evento-dev-frontend",
    password: "front123",
    name: "Bootcamp de Desenvolvimento Frontend",
    date: /* @__PURE__ */ new Date("2024-11-15T09:00:00Z"),
    location: "Belo Horizonte, MG",
    description: "Aprenda a criar interfaces incr\xEDveis e responsivas.",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imageBackground: "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    expectedGuests: 150,
    guests: [
      {
        id: "faa6c274-a1d6-4720-9039-6c5c8a71e180",
        name: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 1
      },
      {
        id: "8ccebbb2-7855-41e5-9ec2-c04b6bcb0bd0",
        name: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmed: false,
        hasCompanion: false,
        qtdCompanion: 0
      },
      {
        id: "3daa71e6-34c0-4b47-b07a-d51df954a3d9",
        name: "Isabela Martins",
        email: "isabela@example.com",
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0
      }
    ]
  },
  {
    id: "30d4e4d1-a82a-4b4a-ac0c-ef7d8e97426b",
    alias: "casamento-alberto-marina",
    password: "casamento2024",
    name: "Casamento do Alberto e Marina",
    date: /* @__PURE__ */ new Date("2024-11-25T16:00:00Z"),
    location: "Florian\xF3polis, SC",
    description: "Celebra\xE7\xE3o do casamento de Alberto e Marina com amigos e familiares.",
    image: "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imageBackground: "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    expectedGuests: 150,
    guests: [
      {
        id: "df921c4b-1236-45ed-bd0e-831d9bd46e6d",
        name: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 1
      },
      {
        id: "ade5c89f-ece1-4ffe-891e-45b857752591",
        name: "Carla Mendes",
        email: "carla@example.com",
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0
      }
    ]
  },
  {
    id: "5919ac41-1849-464f-a642-03a1638ea5bd",
    alias: "aniversario-joao",
    password: "joao2024",
    name: "Anivers\xE1rio do Jo\xE3o - 30 Anos",
    date: /* @__PURE__ */ new Date("2024-12-05T18:00:00Z"),
    location: "Curitiba, PR",
    description: "Comemora\xE7\xE3o dos 30 anos de Jo\xE3o com amigos pr\xF3ximos e familiares.",
    image: "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imageBackground: "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    expectedGuests: 80,
    guests: [
      {
        id: "a8f25a9f-7791-4936-b302-b43a882c08de",
        name: "Maria Souza",
        email: "maria@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 2
      },
      {
        id: "d6e597c1-00f7-4040-adc9-06bc0e987b39",
        name: "Jos\xE9 Almeida",
        email: "jose@example.com",
        confirmed: false,
        hasCompanion: false,
        qtdCompanion: 0
      }
    ]
  },
  {
    id: "83973d63-5129-4af3-98d2-13954b723223",
    alias: "inauguracao-loja-estrela",
    password: "estrela2024",
    name: "Inaugura\xE7\xE3o da Loja Estrela",
    date: /* @__PURE__ */ new Date("2024-12-10T09:00:00Z"),
    location: "Porto Alegre, RS",
    description: "Evento de inaugura\xE7\xE3o da nova loja Estrela com brindes e promo\xE7\xF5es.",
    image: "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imageBackground: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    expectedGuests: 300,
    guests: [
      {
        id: "c97c8de7-dbe5-46a3-90a9-4b870b449a70",
        name: "Cl\xE1udia Lima",
        email: "claudia@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 3
      },
      {
        id: "ae3694f8-521b-4ec8-a57d-329d3d5e8ec9",
        name: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0
      }
    ]
  },
  {
    id: "c45977fa-9f95-4dc9-9d3c-3fea5404fd2c",
    alias: "reuniao-familia-oliveira",
    password: "familia2024",
    name: "Reuni\xE3o da Fam\xEDlia Oliveira",
    date: /* @__PURE__ */ new Date("2024-12-15T12:00:00Z"),
    location: "Salvador, BA",
    description: "Reuni\xE3o de fim de ano da fam\xEDlia Oliveira.",
    image: "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imageBackground: "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    expectedGuests: 50,
    guests: [
      {
        id: "8ac6e70d-dc08-4baf-9f46-4d26a3aae18b",
        name: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmed: true,
        hasCompanion: true,
        qtdCompanion: 4
      },
      {
        id: "0b2766fc-463f-4c5f-a1c1-efa0287e92f0",
        name: "Let\xEDcia Oliveira",
        email: "leticia@example.com",
        confirmed: true,
        hasCompanion: false,
        qtdCompanion: 0
      }
    ]
  }
];
var events_default = events;

// src/events/functions/validateGuest.ts
function validateguest(guest) {
  const erros = [];
  if (!guest.name) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!guest.email) {
    erros.push("Email \xE9 obrigat\xF3rio");
  }
  return erros;
}

// src/events/functions/complementaryGuest.ts
function complementaryGuest(guest) {
  const errors = validateguest(guest);
  if (errors.length) {
    throw new Error(errors.join("\n"));
  }
  const haveCompanions = guest.hasCompanion && guest.confirmed;
  const updatedGuest = {
    ...guest,
    qtdCompanion: haveCompanions ? Number(guest.qtdCompanion) : 0,
    hasCompanion: haveCompanions
  };
  return updatedGuest;
}

// src/shared/Id.ts
var import_uuid = require("uuid");
var Id = class {
  static new() {
    return (0, import_uuid.v4)();
  }
  static validate(id) {
    return (0, import_uuid.validate)(id);
  }
};

// src/events/functions/validateEvent.ts
function validateEvent(evento) {
  const erros = [];
  if (!evento.alias) {
    erros.push("Alias \xE9 obrigat\xF3rio");
  }
  if (!evento.name) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!evento.description) {
    erros.push("Descri\xE7\xE3o \xE9 obrigat\xF3ria");
  }
  if (!evento.date) {
    erros.push("Data \xE9 obrigat\xF3ria");
  }
  if (!evento.location) {
    erros.push("Local \xE9 obrigat\xF3rio");
  }
  if (!evento.expectedGuests || evento.expectedGuests < 1) {
    erros.push("P\xFAblico esperado \xE9 obrigat\xF3rio");
  }
  if (!evento.image) {
    erros.push("Imagem \xE9 obrigat\xF3ria");
  }
  if (!evento.imageBackground) {
    erros.push("Imagem de fundo \xE9 obrigat\xF3ria");
  }
  return erros;
}

// src/shared/Password.ts
var Password = class {
  static create(size = 15) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const numbers = "0123456789";
    const specials = "!@#$%\xA8&*";
    const groups = [lowercase, uppercase, numbers, specials];
    const password = [];
    for (let i = 0; i < size; i++) {
      const group = groups[Math.floor(Math.random() * groups.length)];
      const char = group[Math.floor(Math.random() * group.length)];
      password.push(char);
    }
    return password.join("");
  }
};

// src/events/functions/complementaryEvent.ts
function complementaryEvent(partialEvent) {
  const errors = validateEvent(partialEvent);
  if (errors.length) {
    throw new Error(errors.join("\n"));
  }
  const event = {
    ...partialEvent,
    id: partialEvent.id ?? Id.new(),
    password: partialEvent.password ?? Password.create(),
    expectedGuests: +(partialEvent.expectedGuests ?? 1)
  };
  return event;
}

// src/events/functions/createEmptyGuest.ts
function createEmptyguest() {
  return {
    id: Id.new(),
    name: "",
    email: "",
    confirmed: true,
    hasCompanion: false,
    qtdCompanion: 0
  };
}

// src/events/functions/createEmptyEvent.ts
function createEmptyEvent() {
  return {
    id: Id.new(),
    name: "",
    description: "",
    date: /* @__PURE__ */ new Date(),
    location: "",
    expectedGuests: 1,
    image: "",
    imageBackground: ""
  };
}

// src/shared/Alias.ts
var Alias = class {
  static format(value) {
    return value.replace(/ /g, "-").toLowerCase();
  }
};

// src/shared/Date.ts
var DateFormatter = class {
  static format(date) {
    if (!(date instanceof Date)) {
      throw new TypeError("O argumento deve ser uma inst\xE2ncia de Date.");
    }
    const pad = (number) => number.toString().padStart(2, "0");
    const currentDate = date ?? /* @__PURE__ */ new Date();
    const year = currentDate.getFullYear();
    const month = pad(currentDate.getMonth() + 1);
    const day = pad(currentDate.getDate());
    const hours = pad(currentDate.getHours());
    const minutes = pad(currentDate.getMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  static unformat(date) {
    const [year, month, day, hours, minutes] = date.split("T")[0].split("-").concat(date.split("T")[1].split(":"));
    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hours),
      parseInt(minutes)
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alias,
  DateFormatter,
  Id,
  Password,
  complementaryEvent,
  complementaryGuest,
  createEmptyEvent,
  createEmptyguest,
  events
});
