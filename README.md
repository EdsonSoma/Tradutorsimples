# 🌐 Translator Project

> Tradutor de idiomas multilíngue com reconhecimento de voz e síntese de fala.

[![GitHub Pages](https://img.shields.io/badge/demo-online-brightgreen)](https://seu-usuario.github.io/translator-project/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

![Translator Project Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Translator+Project)

## ✨ Funcionalidades

- 🗣️ **Tradução em Tempo Real** - Suporte para 23+ idiomas
- 🎤 **Reconhecimento de Voz** - Fale para traduzir (Speech-to-Text)
- 🔊 **Síntese de Fala** - Ouça a tradução (Text-to-Speech)
- 🔄 **Troca Rápida** - Inverta idiomas com um clique
- 📱 **Design Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- ⌨️ **Atalhos de Teclado** - Traduza com Ctrl+Enter
- 🎨 **Interface Moderna** - Design clean e intuitivo

## 🚀 Demo Online

Acesse a aplicação: **[translator-project.github.io](https://seu-usuario.github.io/translator-project/)**

## 📋 Idiomas Suportados

| Idioma | Código |
|--------|--------|
| Português (Brasil) | pt-BR |
| Inglês (Reino Unido) | en-GB |
| Francês | fr-FR |
| Alemão | de-DE |
| Espanhol | es-ES |
| Russo | ru-RU |
| Chinês (Mandarim) | zh-CN |
| Italiano | it-IT |
| Japonês | ja-JP |
| Árabe | ar-SA |
| Hindi | hi-IN |
| E muitos outros... | |

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com Grid e Flexbox
- **JavaScript (Vanilla)** - Sem frameworks, código puro
- **Web Speech API** - Reconhecimento de voz
- **Speech Synthesis API** - Síntese de fala
- **MyMemory Translation API** - Tradução de textos
- **Font Awesome** - Ícones

## 📦 Estrutura do Projeto

```
translator-project/
│
├── index.html          # Estrutura HTML
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
├── README.md           # Documentação
├── LICENSE             # Licença MIT
└── .gitignore          # Arquivos ignorados
```

## 🔧 Como Usar Localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/translator-project.git
cd translator-project
```

2. **Abra no navegador:**
   - Simplesmente abra o arquivo `index.html` em seu navegador preferido
   - Ou use um servidor local:
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

3. **Acesse:**
   - Abra `http://localhost:8000` no navegador

## ⌨️ Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `Ctrl + Enter` ou `Cmd + Enter` | Traduzir texto |
| `Ctrl + L` ou `Cmd + L` | Limpar textos |

## 🎯 Recursos de UX

### Design Responsivo
- ✅ Layout adaptativo para mobile, tablet e desktop
- ✅ Grid responsivo que reorganiza em telas pequenas
- ✅ Botões otimizados para toque

### Feedback Visual
- ✅ Animação de pulsação durante tradução
- ✅ Efeitos hover em todos os botões
- ✅ Tooltips informativos
- ✅ Transições suaves

### Acessibilidade
- ✅ Labels ARIA para leitores de tela
- ✅ Contraste adequado de cores
- ✅ Navegação por teclado
- ✅ Foco visível nos elementos interativos

## 🌐 Hospedar no GitHub Pages

1. **Faça push do código para o GitHub:**
```bash
git add .
git commit -m "🎉 Initial commit"
git push origin main
```

2. **Ative o GitHub Pages:**
   - Vá em **Settings** → **Pages**
   - Em **Source**, selecione `main` branch
   - Clique em **Save**

3. **Acesse seu site:**
   - `https://seu-usuario.github.io/translator-project/`

## 📱 Compatibilidade de Navegadores

| Navegador | Versão Mínima | Reconhecimento de Voz |
|-----------|---------------|----------------------|
| Chrome | 25+ | ✅ Suportado |
| Edge | 79+ | ✅ Suportado |
| Safari | 14.1+ | ✅ Suportado |
| Firefox | 60+ | ❌ Não suportado |
| Opera | 27+ | ✅ Suportado |

## 🐛 Solução de Problemas

### Microfone não funciona
- Verifique se você deu permissão para o navegador acessar o microfone
- Certifique-se de estar usando HTTPS ou localhost
- Teste em navegadores compatíveis (Chrome, Edge, Safari)

### Tradução não funciona
- Verifique sua conexão com a internet
- A API MyMemory tem limite de 1000 caracteres por requisição
- Aguarde alguns segundos entre traduções

### Áudio não reproduz
- Verifique se o volume do dispositivo está ligado
- Alguns navegadores podem bloquear autoplay de áudio
- Clique no botão de áudio após interagir com a página

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um **Fork** do projeto
2. Criar uma **Branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. Fazer **Commit** das mudanças (`git commit -m '✨ Adiciona MinhaFeature'`)
4. Fazer **Push** para a Branch (`git push origin feature/MinhaFeature`)
5. Abrir um **Pull Request**

### Ideias para Contribuir
- [ ] Adicionar mais idiomas
- [ ] Implementar histórico de traduções
- [ ] Adicionar modo escuro
- [ ] Melhorar detecção automática de idioma
- [ ] Adicionar botão de copiar texto
- [ ] Implementar salvamento offline
- [ ] Adicionar tradução de documentos

## 📝 Changelog

### [1.0.0] - 2024-01-XX
- ✨ Lançamento inicial
- ✨ Suporte para 23+ idiomas
- ✨ Reconhecimento de voz
- ✨ Síntese de fala
- ✨ Design responsivo completo

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Edson Germano**

- 💼 LinkedIn: [Edson Germano](https://www.linkedin.com/in/edson-germano-323104209/)
- 🐙 GitHub: [@EdsonSoma](https://github.com/EdsonSoma)
- 📷 Instagram: [@edsonshine_](https://www.instagram.com/edsonshine_/)

## 🙏 Agradecimentos

- [MyMemory Translation API](https://mymemory.translated.net/) - API de tradução gratuita
- [Font Awesome](https://fontawesome.com/) - Biblioteca de ícones
- [Google Fonts](https://fonts.google.com/) - Fonte Poppins

## 📊 Status do Projeto

![Status](https://img.shields.io/badge/status-ativo-success)
![Manutenção](https://img.shields.io/badge/manuten%C3%A7%C3%A3o-sim-brightgreen)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!

**Made with ❤️ by Edson Germano**
