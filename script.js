// Import configuration from separate file
$(document).ready(function() {
    // Load configuration and populate page
    populatePage(CONFIG_DATA);
    updateSEOTags();
    applyCustomColors(CONFIG_DATA.theme);
    initializeAnimations();
    createTechElements();
    initThemeToggle();
    initNavbarScroll();
    initNavbarMobile();
    adjustSectionHeights();
    populateHobbies();
    populateGallery(); // Adicionando chamada para popular galeria

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
    for (let i = 0; i < 75; i++) {
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
    const sections = document.querySelectorAll('#skills, #projects, #softskills, #hobbies, #gallery');
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
    const aboutText = data.about.description
        .split('\n\n')
        .map(paragraph => `<p>${paragraph}</p>`)
        .join('');
    $('#about-description').html(aboutText);
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
    const icons = {
        'Idade': 'fas fa-birthday-cake',
        'Localização': 'fas fa-map-marker-alt',
        'Disponibilidade': 'fas fa-calendar-check',
        'Regime': 'fas fa-briefcase'
    };
    
    Object.entries(details).forEach(([key, value]) => {
        const icon = icons[key] || 'fas fa-info-circle';
        container.append(`
            <p><i class="${icon}"></i> <strong>${key}:</strong>  ${value}</p>
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
        
        // Collapse navbar on mobile when clicking a link
        const navbarCollapse = $('.navbar-collapse');
        if (navbarCollapse.hasClass('show')) {
            $('.navbar-toggler').click();
        }
        
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 20
            }, 200, 'easeInOutCubic');
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
    const container = $('#hobbies-list');
    
    CONFIG_DATA.hobbies.forEach(hobby => {
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
function populateGallery() {
    const container = $('#gallery-container');
    
    CONFIG_DATA.gallery.forEach((item, index) => {
        container.append(`
            <div class="col-md-6 col-lg-4 gallery-item-wrapper" data-category="${item.category}">
                <div class="gallery-item" data-index="${index}" onclick="openModal(${index})">
                    <img src="${item.image}" alt="${item.title}" onerror="this.src='https://placehold.co/600x400'">
                    <div class="gallery-overlay">
                        <h5>${item.title}</h5>
                        <p class="mb-0">${item.description}</p>
                    </div>
                </div>
            </div>
        `);
    });

    // Filtro da galeria
    $('.gallery-filter button').click(function() {
        const filter = $(this).data('filter');
        
        $('.gallery-filter button').removeClass('active');
        $(this).addClass('active');
        
        if (filter === 'all') {
            $('.gallery-item-wrapper').show();
        } else {
            $('.gallery-item-wrapper').hide();
            $(`.gallery-item-wrapper[data-category="${filter}"]`).show();
        }
    });
}

function initNavbarMobile() {
    // Highlight active section in navbar
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}
// SEO Dynamic Updates
function updateSEOTags() {
    const data = CONFIG_DATA.personalInfo;
    
    // Update title
    document.title = `${data.name} - ${data.profession} | Currículo Profissional`;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = `${data.summary} Localizado em ${CONFIG_DATA.about.personalDetails.Localização}.`;
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = `${data.name} - ${data.profession}`;
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = data.summary;
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.content = `${data.name} - ${data.profession}`;
    
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.content = data.summary;
}