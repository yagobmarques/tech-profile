// Configuration data
const CONFIG_DATA = {
  "personalInfo": {
    "name": "Yago Marques",
    "profession": "Desenvolvedor Full Stack",
    "summary": "Desenvolvedor full stack com 5+ anos de experiência em web, mobile e DevOps. Especialista em Java, PHP, React e cloud. Forte atuação com liderança técnica, integração de equipes e contato direto com clientes.",
    "photo": "./images/foto-perfil.png"
  },
  "socialLinks": [
    {
      "name": "LinkedIn",
      "url": "https://linkedin.com/in/yago-marques-44955b163",
      "icon": "fab fa-linkedin"
    },
    {
      "name": "GitHub",
      "url": "https://github.com/yagobmarques",
      "icon": "fab fa-github"
    },
    // {
    //   "name": "Twitter",
    //   "url": "https://twitter.com/joaosilva",
    //   "icon": "fab fa-twitter"
    // },
    {
      "name": "Email",
      "url": "mailto:yagobsmarques@gmail.com",
      "icon": "fas fa-envelope"
    }
  ],
  "about": {
    "description": "Sou um desenvolvedor full stack com paixão por criar soluções inovadoras, eficientes e escaláveis. Tenho sólida experiência tanto no desenvolvimento frontend quanto backend (mas prefiro backend rsrs), sempre buscando aplicar as melhores práticas e explorar as tecnologias mais recentes. Além da atuação técnica, também trabalho com práticas de DevOps, contribuindo para a automação de processos, integração contínua e entrega contínua (CI/CD). Sou entusiasta e especialista em Inteligência Artificial, aplicando conceitos e ferramentas de IA para potencializar soluções tecnológicas e agregar valor aos projetos. Tenho experiência em liderar equipes de desenvolvimento, promovendo um ambiente colaborativo, com foco em integração, troca de conhecimento e alcance de objetivos comuns. Minhas habilidades interpessoais me permitem atuar como um elo entre áreas técnicas e de negócio, facilitando a comunicação e a tomada de decisões. Já atuei diretamente com clientes, participando da coleta de requisitos, negociação de prazos e definição de escopo, sempre com foco em entregar valor real ao usuário final.",
    "personalDetails": {
      "Idade": "24 anos",
      "Localização": "Natal, RN",
      "Disponibilidade": "A Avaliar",
      "Regime": "CLT / PJ"
    }
  },
  "education": [
    {
      "degree": "Bacharelado em Ciência da Computação",
      "institution": "Universidade de São Paulo (USP)",
      "period": "2016 - 2020",
      "description": "Formação sólida em algoritmos, estruturas de dados, engenharia de software e desenvolvimento de sistemas."
    },
    {
      "degree": "Curso de Especialização em Cloud Computing",
      "institution": "AWS Training Center",
      "period": "2021",
      "description": "Especialização em arquiteturas cloud, DevOps e serviços AWS."
    }
  ],
  "experience": [
    {
      "position": "Desenvolvedor Full Stack Sênior",
      "company": "TechCorp Solutions",
      "period": "2022 - Presente",
      "description": "Desenvolvimento de aplicações web complexas utilizando React, Node.js e AWS.",
      "achievements": [
        "Liderou equipe de 4 desenvolvedores",
        "Implementou arquitetura microserviços que reduziu custos em 30%",
        "Desenvolveu sistema de e-commerce com 99.9% de uptime"
      ]
    },
    {
      "position": "Desenvolvedor Full Stack",
      "company": "StartupXYZ",
      "period": "2020 - 2022",
      "description": "Desenvolvimento de MVP e escalabilidade de aplicações web.",
      "achievements": [
        "Desenvolveu aplicação que atingiu 10k usuários ativos",
        "Implementou testes automatizados aumentando cobertura para 85%",
        "Otimizou performance da aplicação em 40%"
      ]
    },
    {
      "position": "Desenvolvedor Junior",
      "company": "WebDev Agency",
      "period": "2019 - 2020",
      "description": "Desenvolvimento de sites e sistemas web para diversos clientes.",
      "achievements": [
        "Entregou 15+ projetos web no prazo",
        "Implementou designs responsivos para múltiplos dispositivos"
      ]
    }
  ],
  "projects": [
    {
      "name": "Delivery APP",
      "description": "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.",
      "technologies": ["Flutter", "Dart", "Firebase"],
      "github": "https://github.com/yagobmarques/delivery-app",
    },
    {
      "name": "Smart Stock",
      "description": "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações push.",
      "technologies": ["Java", "Express", "Socket.io", "PostgreSQL"],
      "github": "https://github.com/joaosilva/task-manager",
      "demo": "https://taskmanager-demo.com"
    },
    {
      "name": "Website Psicóloga",
      "description": "Dashboard meteorológico com previsões detalhadas, mapas interativos e alertas personalizados.",
      "technologies": ["PHP", "Laravel", "MySQL"],
      "github": "https://github.com/yagobmarques/website-psicologa-livian"
    },
    {
      "name": "Whiteboard Organizer",
      "description": "Sistema de gerenciamento de conteúdo para blogs com editor rich text e SEO otimizado.",
      "technologies": ["Flutter", "Dart", "Firebase"],
      "github": "https://github.com/yagobmarques/whiteboard-organizer",
    },
      {
      "name": "Currículo Profissional Tecnológico",
      "description": "Sistema de gerenciamento de conteúdo para blogs com editor rich text e SEO otimizado.",
      "technologies": ["Bootstrap", "JQuery"],
      "github": "https://github.com/yagobmarques/home",
    }
  ],
  "skills": [
    {
      "category": "Frontend",
      "items": [
        {"name": "JavaScript/TypeScript", "level": 80},
        {"name": "React/Next.js", "level": 80},
        {"name": "Flutter", "level": 75},
        {"name": "Bootstrap/TailwindCSS", "level": 80}
      ]
    },
    {
      "category": "Database & Cloud",
      "items": [
        {"name": "PostgreSQL/MySQL/Oracle", "level": 80},
        {"name": "AWS Services", "level": 75},
        {"name": "Docker", "level": 70},
        {"name": "NoSQL", "level": 60},
      ]
    },
    {
      "category": "Backend",
      "items": [
        {"name": "Java/Spring", "level": 90},
        {"name": "RESTful APIs", "level": 90},
        {"name": "PHP/Laravel", "level": 90},
        {"name": "GraphQL", "level": 80},
        {"name": "Node.js/Express", "level": 70},
        {"name": "Python/Django", "level": 70},
      ]
    },
    {
      "category": "Ferramentas & Outros",
      "items": [
        {"name": "Git", "level": 95},
        {"name": "IA (diversas)", "level": 90},
        {"name": "Admin. de Servidores Linux", "level": 85},
        {"name": "Selenium/Playwright", "level": 80},
        {"name": "CI/CD", "level": 70},
      ]
    }
  ],
  "languages": [
    {
      "language": "Português",
      "level": 5,
      "proficiency": "Nativo"
    },
    {
      "language": "Inglês",
      "level": 3,
      "proficiency": "Intermediário"
    },
    {
      "language": "Espanhol",
      "level": 2,
      "proficiency": "Básico"
    }
  ],
  "softSkills": [
    {"name": "Trabalho em Equipe", "level": 90},
    {"name": "Comunicação", "level": 85},
    {"name": "Resolução de Problemas", "level": 95},
    {"name": "Liderança", "level": 80},
    {"name": "Adaptabilidade", "level": 85},
    {"name": "Gestão de Tempo", "level": 75}
  ],
  "contact": {
    "email": "yagobsmarques@gmail.com",
    "phone": "+55 (84) 99493-0330",
    "location": "Natal, RN - Brasil",
    "website": "https://yagobmarques.github.io/home/"
  },
  "theme": {
    "colors": {
      "primary-color": "#1a1a1a",
      "secondary-color": "#4a4a4a",
      "accent-color": "#6b6b6b"
    }
  }
};
$(document).ready(function() {
    // Load configuration and populate page
    populatePage(CONFIG_DATA);
    applyCustomColors(CONFIG_DATA.theme);
    initializeAnimations();
    createTechElements();
    initThemeToggle();
    initNavbarScroll();
    adjustSectionHeights();
    populateHobbies(); // Adicionando chamada para popular hobbies

    // Set current year in footer
    $('#current-year').text(new Date().getFullYear());
});

function createTechElements() {
    const techTerms = [
        '{ code }', 'function()', '<div>', '</div>', '</>',
        'const', 'let', 'import', 'export', 'return',
        '=> {}', '[]', '{}', '()', '===', '!==',
        'async', 'await', 'Promise', '.then()',
        'React', 'Node.js', 'API', 'JSON', 'HTML5',
        'CSS3', 'JavaScript', 'TypeScript', 'Git', 'AWS', 'Devops', 'Docker', 'Java', 'Clean Code'
    ];
    
    const container = document.getElementById('tech-background');
    
    // Create 25 random tech elements
    for (let i = 0; i < 25; i++) {
        const element = document.createElement('span');
        element.className = 'tech-element';
        element.textContent = techTerms[Math.floor(Math.random() * techTerms.length)];
        
        // Random position
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        // Random animation delay and duration
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 10;
        
        // Random size
        const size = 0.7 + Math.random() * 0.6;
        
        element.style.left = `${left}%`;
        element.style.top = `${top}%`;
        element.style.animationDelay = `${delay}s`;
        element.style.animationDuration = `${duration}s`;
        element.style.fontSize = `${size}rem`;
        element.style.opacity = (0.3 + Math.random() * 0.4).toString();
        
        container.appendChild(element);
    }
    
    // Add tech elements to specific sections
    const sections = document.querySelectorAll('#skills, #projects, #softskills, #hobbies');
    sections.forEach(section => {
        const binaryCode = document.createElement('div');
        binaryCode.className = 'binary-decoration';
        binaryCode.textContent = '01'.repeat(40);
        section.appendChild(binaryCode);
    });
}

function populatePage(data) {
    // Basic Info
    $('#page-title').text(`${data.personalInfo.name} - Currículo`);
    $('#full-name').text(data.personalInfo.name);
    $('#profession').text(data.personalInfo.profession);
    $('#summary').text(data.personalInfo.summary);
    $('#profile-photo').attr('src', data.personalInfo.photo);
    $('#footer-name').text(data.personalInfo.name);

    // Social Links
    populateSocialLinks(data.socialLinks);

    // About Section
    $('#about-description').text(data.about.description);
    populatePersonalInfo(data.about.personalDetails);

    // Education
    populateEducation(data.education);

    // Experience
    populateExperience(data.experience);

    // Projects
    populateProjects(data.projects);

    // Skills
    populateSkills(data.skills);

    // Languages
    populateLanguages(data.languages);
    
    // Soft Skills
    populateSoftSkills(data.softSkills);

    // Contact
    populateContact(data.contact);
}

function populateSocialLinks(socialLinks) {
    const container = $('#social-links');
    socialLinks.forEach(link => {
        container.append(`
            <a href="${link.url}" target="_blank" title="${link.name}">
                <i class="${link.icon}"></i>
            </a>
        `);
    });
}

function populatePersonalInfo(details) {
    const container = $('#personal-info');
    Object.entries(details).forEach(([key, value]) => {
        container.append(`
            <p><strong>${key}:</strong> ${value}</p>
        `);
    });
}

function populateEducation(education) {
    const container = $('#education-list');
    education.forEach(item => {
        container.append(`
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-date">
                        <i class="fas fa-calendar-alt me-2"></i>
                        ${item.period}
                    </div>
                    <h5><i class="fas fa-graduation-cap me-2"></i>${item.degree}</h5>
                    <h6 class="text-muted">${item.institution}</h6>
                    <p>${item.description}</p>
                </div>
            </div>
        `);
    });
}

function populateExperience(experience) {
    const container = $('#experience-list');
    experience.forEach(item => {
        container.append(`
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-date">
                        <i class="fas fa-calendar-alt me-2"></i>
                        ${item.period}
                    </div>
                    <h5><i class="fas fa-briefcase me-2"></i>${item.position}</h5>
                    <h6 class="text-muted">${item.company}</h6>
                    <p>${item.description}</p>
                    ${item.achievements ? `
                        <ul class="mt-2">
                            ${item.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>
            </div>
        `);
    });
}

function populateProjects(projects) {
    const container = $('#projects-list');
    
    // Adicionar nota sobre os projetos
    container.append(`
        <div class="col-12 mb-4">
            <div class="alert alert-info">
                <i class="fas fa-info-circle me-2"></i>
                <strong>Nota:</strong> Os projetos abaixo foram desenvolvidos durante meus estudos na faculdade. Meus maiores feitos profissionais foram realizados nas empresas onde trabalhei, conforme detalhado na seção de experiência.
            </div>
        </div>
    `);
    
    projects.forEach(project => {
        container.append(`
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card project-card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <i class="fas fa-project-diagram me-2"></i>
                            ${project.name}
                        </h5>
                        <p class="card-text">${project.description}</p>
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                        </div>
                        <div class="mt-3">
                            ${project.github ? `<a href="${project.github}" class="btn btn-outline-primary btn-sm me-2" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
                            ${project.demo ? `<a href="${project.demo}" class="btn btn-primary btn-sm" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}

function populateSkills(skills) {
    const container = $('#skills-list');
    container.addClass('skills-container');
    skills.forEach(category => {
        container.append(`
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <i class="fas ${getCategoryIcon(category.category)} me-2"></i>
                            ${category.category}
                        </h5>
                        ${category.items.map(skill => `
                            <div class="skill-item">
                                <div class="skill-name">
                                    <span>${skill.name}</span>
                                    <span class="skill-level">${skill.level}%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" data-width="${skill.level}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `);
    });
}

function populateLanguages(languages) {
    const container = $('#languages-list');
    languages.forEach(lang => {
        const dots = Array.from({length: 5}, (_, i) => 
            `<div class="dot ${i < lang.level ? 'active' : ''}"></div>`
        ).join('');
        
        container.append(`
            <div class="col-md-6 mb-3">
                <div class="language-level">
                    <div class="language-name">
                        <i class="fas fa-language me-2"></i>
                        ${lang.language}
                    </div>
                    <div class="level-dots">${dots}</div>
                    <span class="ms-2 text-muted">${lang.proficiency}</span>
                </div>
            </div>
        `);
    });
}

function populateContact(contact) {
    const container = $('#contact-info');
    Object.entries(contact).forEach(([key, value]) => {
        let icon = '';
        let link = value;
        
        switch(key) {
            case 'email':
                icon = 'fas fa-envelope';
                link = `mailto:${value}`;
                break;
            case 'phone':
                icon = 'fas fa-phone';
                link = `tel:${value}`;
                break;
            case 'location':
                icon = 'fas fa-map-marker-alt';
                link = '#';
                break;
            case 'website':
                icon = 'fas fa-globe';
                break;
        }
        
        container.append(`
            <div class="contact-item">
                <i class="${icon}"></i>
                ${key === 'location' ? value : `<a href="${link}" ${key !== 'location' ? 'target="_blank"' : ''}>${value}</a>`}
            </div>
        `);
    });
}

function applyCustomColors(theme) {
    if (theme && theme.colors) {
        const root = document.documentElement;
        Object.entries(theme.colors).forEach(([property, value]) => {
            root.style.setProperty(`--${property}`, value);
        });
    }
}

function getCategoryIcon(category) {
    const icons = {
        'Frontend': 'fa-code',
        'Backend': 'fa-server',
        'Database & Cloud': 'fa-cloud',
        'Ferramentas & Outros': 'fa-tools',
        'Soft Skills': 'fa-user-check'
    };
    
    return icons[category] || 'fa-laptop-code';
}

function initializeAnimations() {
    // Initialize skill progress bars immediately
    setTimeout(() => {
        $('.skill-progress').each(function() {
            const width = $(this).data('width');
            $(this).css('width', width);
        });
    }, 100);
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate timeline items with stagger
                if (entry.target.classList.contains('timeline')) {
                    const items = entry.target.querySelectorAll('.timeline-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 200);
                    });
                }
                
                // Animate skill items with stagger
                if (entry.target.classList.contains('skills-container')) {
                    const items = entry.target.querySelectorAll('.skill-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 100);
                    });
                    
                    // Animate skill bars
                    setTimeout(() => {
                        entry.target.querySelectorAll('.skill-progress').forEach(bar => {
                            const width = bar.dataset.width;
                            bar.style.width = width;
                        });
                    }, 500);
                }
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.section-padding').forEach(section => {
        observer.observe(section);
    });
    
    document.querySelectorAll('.timeline').forEach(timeline => {
        observer.observe(timeline);
    });
    
    document.querySelectorAll('.skills-container').forEach(container => {
        observer.observe(container);
    });

    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 1000, 'easeInOutCubic');
        }
    });

    // Parallax effect for hero section background only
    $(window).on('scroll', function() {
        const scrolled = $(this).scrollTop();
        if (scrolled < $('.hero-section').height()) {
            const speed = scrolled * 0.2;
            $('.hero-section').css('background-position', `center ${speed}px`);
            
            // Move tech elements in opposite direction for enhanced parallax
            $('.tech-element').css('transform', `translateY(${speed * 0.5}px)`);
            $('.code-bracket.left').css('transform', `translateX(${speed * 0.2}px)`);
            $('.code-bracket.right').css('transform', `translateX(-${speed * 0.2}px)`);
        }
    });

    // Add floating animation to profile image
    setInterval(() => {
        $('.profile-img').css('transform', 'translateY(-10px)');
        setTimeout(() => {
            $('.profile-img').css('transform', 'translateY(0)');
        }, 2000);
    }, 4000);

    // Typing animation for profession
    const profession = $('#profession').text();
    $('#profession').text('');
    let i = 0;
    const typeWriter = () => {
        if (i < profession.length) {
            $('#profession').text($('#profession').text() + profession.charAt(i));
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    setTimeout(typeWriter, 1000);
}

function populateSoftSkills(softSkills) {
    const container = $('#softskills-list');
    container.addClass('skills-container');
    softSkills.forEach(skill => {
        const icon = getSoftSkillIcon(skill.name);
        container.append(`
            <div class="col-md-6 mb-4">
                <div class="skill-item">
                    <div class="skill-name">
                        <span><i class="${icon} me-2"></i>${skill.name}</span>
                        <span class="skill-level">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="${skill.level}%"></div>
                    </div>
                </div>
            </div>
        `);
    });
}

function getSoftSkillIcon(skillName) {
    const icons = {
        'Trabalho em Equipe': 'fas fa-users',
        'Comunicação': 'fas fa-comments',
        'Resolução de Problemas': 'fas fa-puzzle-piece',
        'Liderança': 'fas fa-crown',
        'Adaptabilidade': 'fas fa-sync-alt',
        'Gestão de Tempo': 'fas fa-clock'
    };
    
    return icons[skillName] || 'fas fa-user-check';
}

function initThemeToggle() {
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        $('#theme-toggle i').removeClass('fa-moon').addClass('fa-sun');
    }
    
    // Forçar recálculo das barras de progresso após mudança de tema
    setTimeout(() => {
        $('.skill-progress').each(function() {
            const width = $(this).data('width');
            $(this).css('width', '0');
            setTimeout(() => $(this).css('width', width), 50);
        });
    }, 100);
    
    // Toggle theme on button click
    $('#theme-toggle').on('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Toggle icon
        if (newTheme === 'dark') {
            $(this).find('i').removeClass('fa-moon').addClass('fa-sun');
        } else {
            $(this).find('i').removeClass('fa-sun').addClass('fa-moon');
        }
        
        // Recalcular barras de progresso
        setTimeout(() => {
            $('.skill-progress').each(function() {
                const width = $(this).data('width');
                $(this).css('width', '0');
                setTimeout(() => $(this).css('width', width), 50);
            });
        }, 100);
    });
}

function initNavbarScroll() {
    let lastScrollTop = 0;
    const navbar = $('.navbar');
    const scrollThreshold = 10;
    
    // Mostrar navbar no topo da página
    navbar.removeClass('navbar-hidden');
    
    $(window).scroll(function() {
        const currentScroll = $(this).scrollTop();
        
        // Determinar direção da rolagem
        if (Math.abs(lastScrollTop - currentScroll) <= scrollThreshold) {
            return;
        }
        
        // Rolando para baixo e não no topo
        if (currentScroll > lastScrollTop && currentScroll > 50) {
            navbar.addClass('navbar-hidden');
        } 
        // Rolando para cima
        else {
            navbar.removeClass('navbar-hidden');
        }
        
        lastScrollTop = currentScroll;
    });
}

function adjustSectionHeights() {
    // Ajusta a altura mínima das seções para a altura da viewport
    const windowHeight = $(window).height();
    $('.section-padding, .hero-section').css('min-height', windowHeight + 'px');
    
    // Recalcula ao redimensionar a janela
    $(window).on('resize', function() {
        const newWindowHeight = $(window).height();
        $('.section-padding, .hero-section').css('min-height', newWindowHeight + 'px');
    });
}

function populateHobbies() {
    const hobbies = [
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
            description: "Apreciador de boas histórias em diferentes formatos audiovisuais.",
            icon: "fas fa-film"
        }
    ];

    const container = $('#hobbies-list');
    
    hobbies.forEach(hobby => {
        container.append(`
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="hobby-item">
                    <div class="hobby-icon">
                        <i class="${hobby.icon}"></i>
                    </div>
                    <div>
                        <h5>${hobby.name}</h5>
                        <p class="mb-0">${hobby.description}</p>
                    </div>
                </div>
            </div>
        `);
    });
}