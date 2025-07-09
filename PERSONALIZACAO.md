# 🎨 Como Personalizar Seu Currículo

## Método 1: Editar Diretamente no JavaScript (Recomendado)

Para personalizar seus dados, edite a constante `CONFIG_DATA` no arquivo `script.js`:

### 1. Informações Pessoais
```javascript
"personalInfo": {
  "name": "Seu Nome Completo",
  "profession": "Sua Profissão",
  "summary": "Seu resumo profissional...",
  "photo": "URL da sua foto"
}
```

### 2. Links Sociais
```javascript
"socialLinks": [
  {
    "name": "LinkedIn",
    "url": "https://linkedin.com/in/seuperfil",
    "icon": "fab fa-linkedin"
  }
  // Adicione mais links conforme necessário
]
```

### 3. Cores do Tema
```javascript
"theme": {
  "colors": {
    "primary-color": "#2c3e50",    // Cor principal
    "secondary-color": "#3498db",  // Cor secundária
    "accent-color": "#e74c3c"      // Cor de destaque
  }
}
```

## Método 2: Usar Servidor Local (Para config.json)

Se preferir usar o arquivo `config.json` separado:

### Opção A: Live Server (VS Code)
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

### Opção B: Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Opção C: Node.js
```bash
npx http-server
```

## 🎯 Dicas de Personalização

### Foto de Perfil
- Use imagem quadrada (200x200px mínimo)
- Formatos: JPG, PNG, WebP
- Hospede no GitHub, LinkedIn ou use serviços como Imgur

### Ícones Sociais
Use ícones do Font Awesome:
- LinkedIn: `fab fa-linkedin`
- GitHub: `fab fa-github`
- Twitter: `fab fa-twitter`
- Instagram: `fab fa-instagram`
- Email: `fas fa-envelope`
- Website: `fas fa-globe`

### Paleta de Cores
Sugestões de paletas:
- **Azul Profissional**: `#2c3e50`, `#3498db`, `#e74c3c`
- **Verde Tech**: `#27ae60`, `#2ecc71`, `#f39c12`
- **Roxo Moderno**: `#8e44ad`, `#9b59b6`, `#e67e22`
- **Cinza Elegante**: `#34495e`, `#95a5a6`, `#e74c3c`

### Níveis de Habilidades
Use valores de 0 a 100:
- **Iniciante**: 20-40
- **Intermediário**: 50-70
- **Avançado**: 75-90
- **Expert**: 90-100

### Níveis de Idiomas
Use valores de 1 a 5:
- **1**: Básico
- **2**: Pré-intermediário
- **3**: Intermediário
- **4**: Avançado
- **5**: Fluente/Nativo

## 🚀 Deploy Rápido

### GitHub Pages
1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione branch main
5. Acesse: `https://seuusuario.github.io/nome-repo`

### Netlify
1. Arraste a pasta para netlify.com/drop
2. Seu site estará online instantaneamente

### Vercel
1. Conecte seu repositório GitHub
2. Deploy automático a cada commit

---

**💡 Dica**: Sempre teste localmente antes de fazer deploy!