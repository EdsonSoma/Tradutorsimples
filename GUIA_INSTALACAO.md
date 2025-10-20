# 📦 Guia de Instalação Completo - Translator Project

## 🎯 Método 1: Via Linha de Comando (Recomendado)

### **Pré-requisitos:**
- Git instalado ([Download Git](https://git-scm.com/downloads))
- Conta no GitHub ([Criar conta](https://github.com/signup))

### **Passo 1: Criar Pasta do Projeto**
```bash
# Abra o terminal/prompt de comando
# Navegue até onde quer criar o projeto (ex: Desktop)
cd Desktop

# Crie a pasta do projeto
mkdir translator-project
cd translator-project
```

### **Passo 2: Criar os Arquivos**

**Crie o arquivo `index.html`:**
```bash
# No Windows (Prompt de Comando)
type nul > index.html

# No Windows (PowerShell)
New-Item index.html

# No Mac/Linux
touch index.html
```

Abra o arquivo `index.html` em um editor de texto e cole o conteúdo fornecido.

**Crie o arquivo `styles.css`:**
```bash
# Windows (Prompt)
type nul > styles.css

# Mac/Linux
touch styles.css
```

Abra e cole o conteúdo do CSS.

**Crie o arquivo `script.js`:**
```bash
# Windows (Prompt)
type nul > script.js

# Mac/Linux
touch script.js
```

Abra e cole o conteúdo do JavaScript.

**Crie o arquivo `README.md`:**
```bash
# Windows (Prompt)
type nul > README.md

# Mac/Linux
touch README.md
```

Abra e cole o conteúdo do README.

**Crie o arquivo `.gitignore`:**
```bash
# Windows (Prompt)
type nul > .gitignore

# Mac/Linux
touch .gitignore
```

Abra e cole o conteúdo do .gitignore.

**Crie o arquivo `LICENSE`:**
```bash
# Windows (Prompt)
type nul > LICENSE

# Mac/Linux
touch LICENSE
```

Abra e cole o conteúdo da licença.

### **Passo 3: Inicializar Git**
```bash
# Inicializa o repositório Git
git init

# Configura seu nome (primeira vez apenas)
git config --global user.name "Seu Nome"

# Configura seu email (primeira vez apenas)
git config --global user.email "seu-email@exemplo.com"

# Adiciona todos os arquivos
git add .

# Faz o primeiro commit
git commit -m "🎉 Initial commit - Translator Project"
```

### **Passo 4: Criar Repositório no GitHub**

1. Acesse [github.com/new](https://github.com/new)
2. Preencha:
   - **Repository name:** `translator-project`
   - **Description:** "Tradutor de idiomas com reconhecimento de voz"
   - Deixe **Public**
   - **NÃO** marque "Add a README file"
3. Clique em **"Create repository"**

### **Passo 5: Conectar ao GitHub**
```bash
# Substitua SEU-USUARIO pelo seu username do GitHub
git remote add origin https://github.com/SEU-USUARIO/translator-project.git

# Renomeia a branch para main
git branch -M main

# Envia os arquivos para o GitHub
git push -u origin main
```

### **Passo 6: Ativar GitHub Pages**

1. No seu repositório, clique em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Clique em **Save**
5. Aguarde 1-2 minutos

✅ **Pronto! Seu site estará em:**
```
https://seu-usuario.github.io/translator-project/
```

---

## 🎯 Método 2: Via Interface Web do GitHub (Mais Simples)

### **Passo 1: Criar Repositório**
1. Acesse [github.com/new](https://github.com/new)
2. Configure:
   - **Repository name:** `translator-project`
   - **Description:** "Tradutor de idiomas com reconhecimento de voz"
   - Marque **"Add a README file"**
   - Selecione **Public**
3. Clique em **"Create repository"**

### **Passo 2: Adicionar Arquivos**

Para cada arquivo (index.html, styles.css, script.js, etc.):

1. Clique em **"Add file"** → **"Create new file"**
2. Digite o nome do arquivo (ex: `index.html`)
3. Cole o conteúdo correspondente
4. Na parte inferior:
   - Em **"Commit message"** escreva algo como "Add index.html"
   - Clique em **"Commit new file"**
5. Repita para todos os arquivos

### **Passo 3: Ativar GitHub Pages**
(Mesmo processo do Método 1, Passo 6)

---

## 🔄 Como Fazer Atualizações Futuras

### **Via Linha de Comando:**
```bash
# 1. Faça suas alterações nos arquivos

# 2. Veja o que mudou
git status

# 3. Adicione as mudanças
git add .

# 4. Faça o commit
git commit -m "✨ Descrição da mudança"

# 5. Envie para o GitHub
git push
```

### **Via Interface Web:**
1. Acesse o arquivo no GitHub
2. Clique no ícone de **lápis** (Edit)
3. Faça suas alterações
4. Role até o final e clique em **"Commit changes"**

---

## 🧪 Testar Localmente

### **Método 1: Direto no Navegador**
- Simplesmente clique duas vezes no arquivo `index.html`

### **Método 2: Com Servidor Local (Melhor para APIs)**

**Usando Python 3:**
```bash
# Na pasta do projeto
python -m http.server 8000

# Acesse: http://localhost:8000
```

**Usando Node.js:**
```bash
# Instale o http-server (primeira vez)
npm install -g http-server

# Execute na pasta do projeto
http-server

# Acesse: http://localhost:8080
```

**Usando VS Code:**
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

---

## 📋 Checklist Final

- [ ] Todos os arquivos foram criados
- [ ] Código foi copiado corretamente (sem erros)
- [ ] Git foi inicializado
- [ ] Repositório foi criado no GitHub
- [ ] Código foi enviado para o GitHub
- [ ] GitHub Pages foi ativado
- [ ] Site está acessível online
- [ ] Funcionalidades foram testadas

---

## 🐛 Problemas Comuns

### **Erro: "git: command not found"**
- **Solução:** Instale o Git: [git-scm.com/downloads](https://git-scm.com/downloads)

### **Erro: "Permission denied (publickey)"**
- **Solução:** Use HTTPS em vez de SSH ou configure suas chaves SSH

### **Erro: "fatal: remote origin already exists"**
```bash
# Remove o remote antigo
git remote remove origin

# Adiciona novamente
git remote add origin https://github.com/SEU-USUARIO/translator-project.git
```

### **GitHub Pages não está funcionando**
- Aguarde 5-10 minutos
- Verifique se o repositório é público
- Certifique-se de que selecionou a branch correta (main)
- Limpe o cache do navegador (Ctrl + Shift + R)

### **Site funciona local mas não no GitHub Pages**
- Verifique se os nomes dos arquivos estão corretos (case-sensitive)
- Certifique-se que `index.html` está na raiz do repositório
- Verifique os caminhos dos arquivos CSS e JS no HTML

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique o [README.md](README.md) para mais informações
2. Consulte a documentação do [GitHub Pages](https://docs.github.com/pages)
3. Abra uma [Issue](https://github.com/seu-usuario/translator-project/issues) no repositório

---

## 🎉 Próximos Passos

Após instalar com sucesso:
- [ ] Personalize as cores no CSS
- [ ] Adicione mais idiomas
- [ ] Compartilhe seu projeto nas redes sociais
- [ ] Adicione ao seu portfólio
- [ ] Contribua com melhorias

---

**Boa sorte com seu projeto! 🚀**
