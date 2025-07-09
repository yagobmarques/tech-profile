# 🎨 Guia de Personalização - Currículo Dev

Este guia detalha como personalizar completamente seu currículo para refletir sua identidade profissional.

## 📁 Estrutura de Configuração

### Arquivo `config.js`

Todo o conteúdo do seu currículo está centralizado no arquivo `config.js`. Esta abordagem modular facilita a manutenção e personalização.

```javascript
const CONFIG_DATA = {
  personalInfo: { /* seus dados pessoais */ },
  socialLinks: [ /* seus links sociais */ ],
  about: { /* sobre você */ },
  // ... outras seções
};
```

## 👤 Seção Personal Info

```javascript
personalInfo: {
  name: "Seu Nome Completo",
  profession: "Sua Profissão",
  summary: "Resumo profissional de 2-3 linhas",
  photo: "./images/sua-foto.jpg"
}
```

**Dicas:**
- Use uma foto profissional em alta resolução (mínimo 400x400px)
- O resumo deve ser conciso e impactante
- Formatos suportados: JPG, PNG, WebP

## 🔗 Links Sociais

```javascript
socialLinks: [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/seu-perfil",
    icon: "fab fa-linkedin"
  }
]
```

**Ícones Disponíveis (Font Awesome):**
- LinkedIn: `fab fa-linkedin`
- GitHub: `fab fa-github`
- Twitter: `fab fa-twitter`
- Instagram: `fab fa-instagram`
- Email: `fas fa-envelope`
- Website: `fas fa-globe`

## 📝 Seção Sobre Mim

```javascript
about: {
  description: `Texto longo sobre você.
  
  Use quebras de linha duplas para criar parágrafos.`,
  personalDetails: {
    "Idade": "XX anos",
    "Localização": "Sua Cidade, Estado",
    "Disponibilidade": "Imediata/A Avaliar",
    "Regime": "CLT / PJ / Ambos"
  }
}
```

## 🎓 Educação e Experiência

### Estrutura Timeline

```javascript
education: [
  {
    degree: "Nome do Curso",
    institution: "Nome da Instituição",
    period: "2020 - 2024",
    description: "Descrição do curso e principais aprendizados"
  }
]
```

### Experiência com Conquistas

```javascript
experience: [
  {
    position: "Cargo",
    company: "Nome da Empresa",
    period: "2022 - Presente",
    description: "Descrição das responsabilidades",
    achievements: [
      "Conquista específica com números",
      "Impacto gerado na empresa",
      "Tecnologias implementadas"
    ]
  }
]
```

## 💼 Projetos

```javascript
projects: [
  {
    name: "Nome do Projeto",
    description: "Descrição detalhada do projeto",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/usuario/projeto",
    demo: "https://projeto-demo.com" // opcional
  }
]
```

**Dicas para Projetos:**
- Inclua apenas projetos relevantes
- Use tecnologias como tags visuais
- Links de demo aumentam o engajamento

## 🛠️ Habilidades Técnicas

```javascript
skills: [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "React/Next.js", level: 80 }
    ]
  }
]
```

**Categorias Sugeridas:**
- Frontend
- Backend
- Database & Cloud
- Ferramentas & DevOps
- Mobile

**Níveis de Habilidade:**
- 90-100: Expert/Avançado
- 70-89: Proficiente
- 50-69: Intermediário
- 30-49: Básico
- 10-29: Iniciante

## 🎯 Soft Skills

```javascript
softSkills: [
  { name: "Trabalho em Equipe", level: 90 },
  { name: "Liderança", level: 85 }
]
```

**Soft Skills Importantes:**
- Trabalho em Equipe
- Comunicação
- Resolução de Problemas
- Liderança
- Adaptabilidade
- Gestão de Tempo

## 🌐 Idiomas

```javascript
languages: [
  {
    language: "Português",
    level: 5,        // 1-5 pontos
    proficiency: "Nativo"
  }
]
```

**Níveis de Proficiência:**
- 5: Nativo
- 4: Fluente
- 3: Intermediário
- 2: Básico
- 1: Iniciante

## 🎨 Interesses Pessoais

```javascript
hobbies: [
  {
    name: "Música",
    description: "Breve descrição do hobby",
    icon: "fas fa-music"
  }
]
```

**Ícones Sugeridos:**
- Música: `fas fa-music`
- Esportes: `fas fa-running`
- Jogos: `fas fa-gamepad`
- Leitura: `fas fa-book`
- Fotografia: `fas fa-camera`

## 📸 Galeria de Fotos

```javascript
gallery: [
  {
    image: "images/gallery/foto.jpg",
    title: "Título da Foto",
    description: "Descrição do momento",
    category: "professional" // academic, professional, events, personal
  }
]
```

### Preparando Imagens para Galeria

1. **Tamanho Recomendado:** 800x600px ou proporção 4:3
2. **Formato:** JPG ou PNG
3. **Tamanho do Arquivo:** Máximo 500KB por imagem
4. **Organização:** Crie subpastas por categoria

```
images/gallery/
├── academic/
├── professional/
├── events/
└── personal/
```

## 🎨 Personalização de Cores

```javascript
theme: {
  colors: {
    "primary-color": "#1a1a1a",      // Cor principal
    "secondary-color": "#4a4a4a",    // Cor secundária
    "accent-color": "#6b6b6b"        // Cor de destaque
  }
}
```

### Paletas de Cores Sugeridas

**Profissional Azul:**
```javascript
{
  "primary-color": "#1e3a8a",
  "secondary-color": "#3b82f6",
  "accent-color": "#60a5fa"
}
```

**Tech Verde:**
```javascript
{
  "primary-color": "#065f46",
  "secondary-color": "#059669",
  "accent-color": "#10b981"
}
```

**Moderno Roxo:**
```javascript
{
  "primary-color": "#581c87",
  "secondary-color": "#7c3aed",
  "accent-color": "#a78bfa"
}
```

## 📱 Otimizações Mobile

### Imagens Responsivas
- Use imagens otimizadas para web
- Considere diferentes resoluções de tela
- Teste em dispositivos reais

### Conteúdo Mobile-First
- Textos concisos
- Botões com área de toque adequada
- Navegação simplificada

## 🚀 Deploy e Hospedagem

### GitHub Pages
1. Crie um repositório público
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações
4. Acesse via `usuario.github.io/repositorio`

### Netlify (Recomendado)
1. Conecte seu repositório GitHub
2. Deploy automático a cada commit
3. HTTPS gratuito
4. Domínio personalizado disponível

### Vercel
1. Importe projeto do GitHub
2. Deploy instantâneo
3. Otimizações automáticas
4. Analytics integrado

## 🔧 Personalização Avançada

### Modificando Animações
Edite o arquivo `styles.css` para ajustar:
- Duração das transições
- Efeitos de hover
- Animações de entrada

### Adicionando Seções
1. Adicione dados em `config.js`
2. Crie função de população em `script.js`
3. Adicione HTML em `index.html`
4. Estilize em `styles.css`

### SEO e Meta Tags
Edite as meta tags em `index.html`:
```html
<meta name="description" content="Sua descrição profissional">
<meta name="keywords" content="suas, palavras, chave">
<meta property="og:title" content="Seu Nome - Profissão">
```

## 📊 Analytics e Monitoramento

### Google Analytics
Adicione o código de tracking antes do `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

### Hotjar (Opcional)
Para análise de comportamento do usuário:
```html
<!-- Hotjar Tracking Code -->
<script>
  // Código do Hotjar
</script>
```

## 🎯 Dicas Finais

### Conteúdo
- Seja específico e quantifique resultados
- Use verbos de ação nas descrições
- Mantenha informações atualizadas
- Revise ortografia e gramática

### Design
- Mantenha consistência visual
- Use espaçamento adequado
- Teste em diferentes navegadores
- Otimize para velocidade de carregamento

### Profissionalismo
- Use foto profissional
- Mantenha tom formal mas acessível
- Inclua apenas informações relevantes
- Teste todos os links regularmente

---

💡 **Dica:** Faça backup regular do seu arquivo `config.js` e teste sempre as alterações antes de fazer deploy!