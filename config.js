// Resume Configuration Data
const CONFIG_DATA = {
  personalInfo: {
    name: "Yago Marques",
    profession: "Desenvolvedor Full Stack",
    summary: "Desenvolvedor full stack com 5+ anos de experiência em web, mobile e DevOps. Especialista em Java, PHP, React e cloud. Forte atuação com liderança técnica, integração de equipes e contato direto com clientes.",
    photo: "./images/foto-perfil.jpg"
  },

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yago-marques-44955b163",
      icon: "fab fa-linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/yagobmarques",
      icon: "fab fa-github"
    },
    {
      name: "Email",
      url: "mailto:yagobsmarques@gmail.com",
      icon: "fas fa-envelope"
    }
  ],

  about: {
    description: `Sou um desenvolvedor full stack com paixão por criar soluções inovadoras, eficientes e escaláveis. Tenho sólida experiência tanto no desenvolvimento frontend quanto backend, sempre buscando aplicar as melhores práticas e explorar as tecnologias mais recentes. Além da atuação técnica, também trabalho com práticas de DevOps, contribuindo para a automação de processos, integração contínua e entrega contínua (CI/CD).

Sou entusiasta e especialista em Inteligência Artificial, aplicando conceitos e ferramentas de IA para potencializar soluções tecnológicas e agregar valor aos projetos. Tenho experiência em liderar equipes de desenvolvimento, promovendo um ambiente colaborativo, com foco em integração, troca de conhecimento e alcance de objetivos comuns. Minhas habilidades interpessoais me permitem atuar como um elo entre áreas técnicas e de negócio, facilitando a comunicação e a tomada de decisões.`,
    personalDetails: {
      "Idade": "24 anos",
      "Localização": "Natal, RN",
      "Disponibilidade": "A Avaliar",
      "Regime": "CLT / PJ"
    }
  },

  education: [
    {
      degree: "Bacharelado em Tecnologia da Informação",
      institution: "Universidade Federal do Rio Grande do Norte (UFRN)",
      period: "2018 - 2023",
      description: "Formação sólida em algoritmos, estruturas de dados, engenharia de software e desenvolvimento de sistemas."
    },
    {
      degree: "Técnico em Tecnologia da Informação",
      institution: "IMD/UFRN",
      period: "2017-2019",
      description: "Especialização em Redes de Computadores."
    }
  ],

  experience: [
    {
      position: "Analista de Tecnologia da Informação",
      company: "Dataprev",
      period: "Jan. 2024 - ...",
      description: "Desenvolvimento de aplicações web robustas e escaláveis utilizando React e Spring Boot. Atuação com foco em práticas modernas de CI/CD para automação de pipelines e entregas contínuas. Responsável por liderar iniciativas de adoção de inteligência artificial no ciclo de desenvolvimento de software.",
      achievements: [
        "Desenvolveu aplicações full stack com foco em performance e experiência do usuário",
        "Configurou pipelines de CI/CD, otimizando o fluxo de desenvolvimento e reduzindo o tempo de entrega",
        "Liderou iniciativas para adoção de IA no desenvolvimento de software, promovendo inovação e eficiência",
        "Contribuiu para a escalabilidade e estabilidade de sistemas críticos da empresa",
      ]
    },
    {
      position: "Desenvolvedor Full Stack e TechLead",
      company: "Leve Tecnologia",
      period: "Jul. 2021 - Dez. 2023",
      description: "Atuação no desenvolvimento de aplicações web full stack com foco em PHP (CodeIgniter, Symfony), MySQL e JavaScript. Responsável por liderar a equipe técnica e garantir a entrega de soluções robustas, intuitivas e de alta performance.",
      achievements: [
        "Liderou equipe de 4 desenvolvedores, promovendo uma dinâmica colaborativa e produtiva",
        "Desenvolveu sistemas integrados para venda de planos de saúde com foco em experiência do usuário",
        "Implementou sistema de agendamento eficiente e otimizou bancos de dados, melhorando significativamente a performance",
        "Manteve comunicação direta com clientes, garantindo alinhamento entre requisitos e entregas",
      ]
    },
    {
      position: "Pesquisador",
      company: "CNPQ/UFRN",
      period: "Jul. 2020 - Jun. 2021",
      description: "Pesquisa aplicada em computação de alto desempenho com foco na construção de clusters de baixo custo para execução de modelos hidrometeorológicos.",
      achievements: [
          "Projetou e implementou um cluster funcional utilizando Raspberry Pi 4, com desempenho relevante para simulações científicas",
          "Explorou conceitos avançados de clustering Beowulf para otimização de recursos computacionais",
          "Contribuiu para a execução eficiente de modelos hidrometeorológicos em ambiente de baixo custo"

      ]
    },
    {
      position: "Apoio Técnico",
      company: "CCET/UFRN",
      period: "Set. 2018 - Jun. 2020",
      description: "Atuação no suporte técnico e manutenção de infraestrutura de TI no Centro de Ciências Exatas e da Terra da UFRN, com foco em redes, sistemas web e organização administrativa.",
      achievements: [
        "Realizou manutenção e atualização de páginas web institucionais",
        "Prestou suporte técnico em redes e manutenção de computadores, solucionando problemas de conectividade e desempenho",
        "Organizou e digitalizou documentação administrativa, contribuindo para maior eficiência nos processos internos",
        "Gerenciou o controle patrimonial de equipamentos do departamento",
      ]
    }
  ],

  projects: [
    {
      name: "Delivery APP",
      description: "Aplicação mobile com funcionalidades personalizadas para entregas recorrentes de Água e Gás",
      technologies: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/yagobmarques/delivery-app"
    },
    {
      name: "Smart Stock",
      description: "Sistema de gerenciamento inteligente de estoque para empresas de manufatura, relacionando encomendas e matéria-prima",
      technologies: ["Java", "Command Line"],
      github: "https://github.com/yagobmarques/smart-stock",
    },
    {
      name: "Website Psicóloga",
      description: "Página profissional de uma Psicóloga",
      technologies: ["PHP", "Laravel", "MySQL"],
      github: "https://github.com/yagobmarques/website-psicologa-livian"
    },
    {
      name: "Whiteboard Organizer",
      description: "Aplicação mobile para organização de fotos, principalmente de quadros e slides escolares.",
      technologies: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/yagobmarques/whiteboard-organizer"
    },
    {
      name: "Currículo Profissional Tecnológico",
      description: "Um template de currículo web completo e profissional, especialmente desenvolvido para profissionais de tecnologia, com foco em apresentação elegante e funcionalidades avançadas.",
      technologies: ["Bootstrap", "JQuery"],
      github: "https://github.com/yagobmarques/home"
    }
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "JavaScript/TypeScript", level: 80 },
        { name: "React/Next.js", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "Bootstrap/TailwindCSS", level: 80 }
      ]
    },
    {
      category: "Database & Cloud",
      items: [
        { name: "PostgreSQL/MySQL/Oracle", level: 80 },
        { name: "AWS Services", level: 75 },
        { name: "Docker", level: 70 },
        { name: "NoSQL", level: 60 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Java/Spring", level: 90 },
        { name: "RESTful APIs", level: 90 },
        { name: "PHP/Laravel", level: 90 },
        { name: "GraphQL", level: 80 },
        { name: "Node.js/Express", level: 70 },
        { name: "Python/Django", level: 70 }
      ]
    },
    {
      category: "Ferramentas & Outros",
      items: [
        { name: "Git", level: 95 },
        { name: "IA (diversas)", level: 90 },
        { name: "Admin. de Servidores Linux", level: 85 },
        { name: "Selenium/Playwright", level: 80 },
        { name: "CI/CD", level: 70 }
      ]
    }
  ],

  languages: [
    {
      language: "Português",
      level: 5,
      proficiency: "Nativo"
    },
    {
      language: "Inglês",
      level: 3,
      proficiency: "Intermediário"
    },
    {
      language: "Espanhol",
      level: 2,
      proficiency: "Básico"
    }
  ],

  softSkills: [
    { name: "Trabalho em Equipe", level: 90 },
    { name: "Comunicação", level: 85 },
    { name: "Resolução de Problemas", level: 95 },
    { name: "Liderança", level: 80 },
    { name: "Adaptabilidade", level: 85 },
    { name: "Gestão de Tempo", level: 75 }
  ],

  hobbies: [
    {
      name: "Música",
      description: "Aprecio diversos gêneros musicais e toco instrumentos nas horas vagas.",
      icon: "fas fa-music"
    },
    {
      name: "Jogos",
      description: "Entusiasta de jogos virtuais e de tabuleiro, especialmente estratégicos.",
      icon: "fas fa-gamepad"
    },
    {
      name: "Crossfit",
      description: "Praticante regular de crossfit para manter condicionamento físico.",
      icon: "fas fa-dumbbell"
    },
    {
      name: "Cozinha",
      description: "Apaixonado pela culinária, vejo na cozinha uma forma de expressar cuidado e criatividade",
      icon: "fas fa-kitchen-set"
    },
    {
      name: "Surf",
      description: "Aproveito o litoral para praticar surf sempre que possível.",
      icon: "fas fa-water"
    },
    {
      name: "Filmes e Séries",
      description: "Apaixonado por boas histórias no cinema e nas séries.",
      icon: "fas fa-film"
    }
  ],

  gallery: [
    {
      image: "images/colacao_grau.jpg",
      title: "Colação de Grau",
      description: "Formatura em Tecnologia da Informação na UFRN (2023)",
      category: "academic"
    },
    {
      image: "images/primeiro_setup_programacao.jpg",
      title: "Primeiro Emprego de Dev",
      description: "Meu primeiro setup como desenvolvedor na Leve Tecnologia (2021)",
      category: "professional"
    },
    {
      image: "images/ultimo_dia_leve.jpg",
      title: "Ultimo dia na Leve",
      description: "Ultimo dia de trabalho na primeira empresa que me acolheu (2023)",
      category: "professional"
    },
      {
      image: "images/primeiro_dia_dtp.jpg",
      title: "Primeiro dia na Dataprev",
      description: "Primeiro dia de trabalho na Dataprev (2024)",
      category: "professional"
    },
    {
      image: "images/atletismo_olmpiadas_dtp.jpg",
      title: "Olimpiadas DTP",
      description: "Competição de Atletismo com colegas de trabalho (2024)",
      category: "personal"
    },
    {
      image: "images/campeoes_olimpiadas_dtp.jpg",
      title: "Campeões Olimpiadas DTP",
      description: "Time campeão das Olimpiadas DTP 2024, a qual fui capitão dos Wolfs (2024)",
      category: "personal"
    },
    {
      image: "images/50_anos_dtp.jpg",
      title: "Festa de 50 anos da Dataprev",
      description: "Comemoração de 50 anos da Dataprev (2025)",
      category: "events"
    },
    {
      image: "images/primeira_feira.jpg",
      title: "Primeira Feira",
      description: "Primeira 'feira' da minha casa - comecei a morar só! (2024)",
      category: "personal"
    },
    {
      image: "images/1lugar_inter.jpg",
      title: "Competição de Crossfit - 1º Lugar Inter",
      description: "Participação em campeonato local de crossfit (2023)",
      category: "personal"
    },
    {
      image: "images/1lugar_rx.jpg",
      title: "Competição de Crossfit - 1º Lugar RX",
      description: "Participação em campeonato local de crossfit (2024)",
      category: "personal"
    },
    {
      image: "images/evento_huawei.jpg",
      title: "Evento Huawei em Fortaleza/CE ",
      description: "Participação em evento de IA promovido pela Huawei (2025)",
      category: "events"
    }
  ],

  contact: {
    email: "yagobsmarques@gmail.com",
    phone: "+55 (84) 99493-0330",
    location: "Natal, RN - Brasil",
    website: "https://yagobmarques.github.io/tech-profile/"
  },

  theme: {
    colors: {
      "primary-color": "#1a1a1a",
      "secondary-color": "#FF7F50",
      "accent-color": "#6b6b6b"
    }
  }
};