// Resume Configuration Data
const CONFIG_DATA = {
  personalInfo: {
    name: "Yago Marques",
    profession: "Desenvolvedor Full Stack",
    summary: "Desenvolvedor full stack com 5+ anos de experiência em web, mobile e DevOps. Especialista em Java, PHP, React e cloud. Forte atuação com liderança técnica, integração de equipes e contato direto com clientes.",
    photo: "./images/foto-perfil.png"
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
      description: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.",
      technologies: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/yagobmarques/delivery-app"
    },
    {
      name: "Smart Stock",
      description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações push.",
      technologies: ["Java", "Express", "Socket.io", "PostgreSQL"],
      github: "https://github.com/joaosilva/task-manager",
      demo: "https://taskmanager-demo.com"
    },
    {
      name: "Website Psicóloga",
      description: "Dashboard meteorológico com previsões detalhadas, mapas interativos e alertas personalizados.",
      technologies: ["PHP", "Laravel", "MySQL"],
      github: "https://github.com/yagobmarques/website-psicologa-livian"
    },
    {
      name: "Whiteboard Organizer",
      description: "Sistema de gerenciamento de conteúdo para blogs com editor rich text e SEO otimizado.",
      technologies: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/yagobmarques/whiteboard-organizer"
    },
    {
      name: "Currículo Profissional Tecnológico",
      description: "Sistema de gerenciamento de conteúdo para blogs com editor rich text e SEO otimizado.",
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
      name: "Corrida",
      description: "Participo de corridas de rua e treinos regulares para manter a saúde.",
      icon: "fas fa-running"
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
      image: "images/gallery/graduation.jpg",
      title: "Colação de Grau",
      description: "Formatura em Ciência da Computação na USP (2020)",
      category: "academic"
    },
    {
      image: "images/gallery/first-job.jpg",
      title: "Primeiro Emprego",
      description: "Meu primeiro setup como desenvolvedor na WebDev Agency (2019)",
      category: "professional"
    },
    {
      image: "images/gallery/promotion.jpg",
      title: "Promoção",
      description: "Celebração da promoção para desenvolvedor sênior (2022)",
      category: "professional"
    },
    {
      image: "images/gallery/public-exam.jpg",
      title: "Aprovação em Concurso",
      description: "Comemoração da aprovação no concurso público (2021)",
      category: "professional"
    },
    {
      image: "images/gallery/tech-event.jpg",
      title: "Evento de Tecnologia",
      description: "Participação em conferência de desenvolvimento web (2022)",
      category: "events"
    },
    {
      image: "images/gallery/hackathon.jpg",
      title: "Hackathon",
      description: "Participação em hackathon de inovação tecnológica (2021)",
      category: "events"
    },
    {
      image: "images/gallery/podium.jpg",
      title: "Pódio em Campeonato",
      description: "3º lugar na maratona de corrida regional (2022)",
      category: "personal"
    },
    {
      image: "images/gallery/surf-competition.jpg",
      title: "Competição de Surf",
      description: "Participação em campeonato local de surf (2023)",
      category: "personal"
    },
    {
      image: "images/gallery/team-building.jpg",
      title: "Team Building",
      description: "Atividade de integração com a equipe de desenvolvimento (2022)",
      category: "professional"
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