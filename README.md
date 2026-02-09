# 🚀 Spaceflow Login System

<div align="center">

![Spaceflow Logo](assets/logo.png)

**Sistema de Login com foco em Usabilidade e Experiência do Usuário**

*Projeto desenvolvido para a disciplina de Interação Humano-Computador (IHC)*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📋 Índice

- [Descrição do Projeto](#-descrição-do-projeto)
- [Contexto](#-contexto)
- [Funcionalidades](#-funcionalidades)
- [Metas de Usabilidade](#-metas-de-usabilidade)
- [Metas de Experiência do Usuário](#-metas-de-experiência-do-usuário)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instruções de Execução](#-instruções-de-execução)
- [Credenciais de Demonstração](#-credenciais-de-demonstração)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Autor](#-autor)

---

## 📖 Descrição do Projeto

Este projeto apresenta a interface de login do **Spaceflow**, um sistema fictício de gestão de espaços educacionais. A tela de login foi desenvolvida com foco nos princípios de **Interação Humano-Computador (IHC)**, priorizando uma experiência de usuário excepcional através de:

- Design moderno com efeito **glassmorphism** (vidro fosco)
- Efeitos visuais **parallax** e **3D** interativos
- Validação de dados em tempo real com **feedback instantâneo**
- Funcionamento **100% offline** sem necessidade de backend
- **Acessibilidade** para diferentes perfis de usuários

O sistema simula uma autenticação completa, demonstrando boas práticas de UX/UI para sistemas de login.

---

## 🎯 Contexto

O **Spaceflow** é um sistema de gestão de espaços educacionais que permite:

- Gerenciamento de salas de aula e laboratórios
- Alocação de recursos pedagógicos
- Controle de acesso por diferentes níveis de usuário (administradores, coordenadores, professores, alunos)

A tela de login serve como porta de entrada para este ecossistema, sendo essencial que transmita **segurança**, **profissionalismo** e **facilidade de uso**.

---

## ⚡ Funcionalidades

### Requisitos Funcionais Implementados

| Funcionalidade | Descrição | Status |
|----------------|-----------|--------|
| Interface de Login | Formulário com campos de email e senha | ✅ |
| Validação Local | Verificação de formato de email e campos obrigatórios | ✅ |
| Feedback ao Usuário | Mensagens de erro/sucesso, loading states, animações | ✅ |
| Funcionamento Offline | Não requer internet ou banco de dados | ✅ |

### Recursos Adicionais

- 👁️ **Toggle de visibilidade da senha** - botão para mostrar/ocultar senha
- 🔍 **Detecção inteligente de usuário** - indica quando o email é reconhecido
- 🎨 **Efeitos parallax** - elementos de fundo respondem ao movimento do mouse
- 📱 **Design responsivo** - funciona em desktop, tablet e mobile
- ♿ **Acessibilidade** - suporte a navegação por teclado e leitores de tela

---

## 🎯 Metas de Usabilidade

As cinco metas de usabilidade obrigatórias foram cuidadosamente aplicadas:

### 1. 🧠 Fácil de Lembrar (Memorabilidade)

> *"O usuário deve conseguir usar o sistema novamente sem precisar reaprender"*

**Implementação:**
- **Layout familiar**: O formulário segue convenções universais de telas de login (email em cima, senha embaixo, botão "Entrar" destacado)
- **Ícones reconhecíveis**: Uso de ícones padrão para mostrar/ocultar senha (olho), loading (spinner), sucesso (check)
- **Posicionamento consistente**: Elementos sempre nos mesmos lugares esperados pelo usuário
- **Labels claras**: Textos objetivos como "Email", "Senha", "Lembrar-me", "Esqueceu a senha?"

**Evidência:** Um usuário que usou o sistema uma vez conseguirá usar novamente meses depois sem dificuldade, pois a interface segue padrões mentais já estabelecidos.

---

### 2. 📚 Fácil de Entender (Aprendizabilidade)

> *"Novos usuários devem conseguir usar o sistema sem treinamento"*

**Implementação:**
- **Fluxo linear e direto**: Email → Senha → Entrar (apenas 3 passos)
- **Placeholders informativos**: "seu.email@exemplo.com" e "Digite sua senha" orientam o preenchimento
- **Feedback em tempo real**: Validação enquanto digita mostra imediatamente se algo está errado
- **Credenciais de demonstração visíveis**: Box amarelo com credenciais de teste remove barreira de entrada
- **Mensagens de erro claras**: "Digite um email válido" em vez de códigos técnicos

**Evidência:** Nenhuma instrução adicional é necessária - o próprio design guia o usuário intuitivamente.

---

### 3. ✨ Útil (Utilidade)

> *"O sistema deve cumprir seu propósito principal de forma eficiente"*

**Implementação:**
- **Propósito claro**: Permite autenticar o usuário no sistema
- **Opção "Lembrar-me"**: Facilita acessos futuros
- **Link "Esqueceu a senha?"**: Oferece recuperação quando necessário
- **Detecção de usuário válido**: Ícone de check verde confirma que o email existe
- **Modal de sucesso**: Confirmação clara de que o login foi realizado

**Evidência:** O sistema faz exatamente o que promete - autentica usuários - sem funcionalidades desnecessárias que poderiam confundir.

---

### 4. 🔒 Seguro (Percepção de Segurança)

> *"O usuário deve sentir que seus dados estão protegidos"*

**Implementação:**
- **Campo de senha oculto por padrão**: Asteriscos protegem a visualização
- **Toggle de senha controlado pelo usuário**: Dá controle sobre quando expor a senha
- **Design profissional e polido**: Transmite confiabilidade através da estética
- **Cores institucionais (azul marinho)**: Associadas a seriedade e confiança
- **Efeito glassmorphism**: Transmite modernidade e sofisticação técnica
- **Mensagens de erro genéricas**: "Email ou senha incorretos" não revela qual está errado (prática de segurança)
- **Sem exposição de dados**: Credenciais de demo são apenas para teste, claramente identificadas

**Evidência:** A aparência profissional e as práticas de segurança implementadas criam confiança no usuário.

---

### 5. ⚡ Eficiente

> *"Tarefas devem ser concluídas com mínimo esforço e tempo"*

**Implementação:**
- **Mínimo de campos**: Apenas email e senha (2 campos obrigatórios)
- **Autocomplete habilitado**: Navegador pode preencher dados salvos
- **Envio com Enter**: Não precisa clicar no botão
- **Foco automático no primeiro campo**: Pronto para digitar ao carregar
- **Feedback de loading**: Spinner mostra que o sistema está processando
- **Validação prévia**: Erros são mostrados antes de enviar, evitando submissões inúteis

**Métricas de eficiência:**
- **Tempo para login** (usuário experiente): ~5 segundos
- **Número de cliques necessários**: 3 (campo email, campo senha, botão entrar)
- **Número de decisões**: 1 (apenas "Lembrar-me" é opcional)

---

## 💫 Metas de Experiência do Usuário

Foram implementadas **6 metas de experiência** para criar uma interação memorável:

### 1. 🎨 Esteticamente Apreciável

> *"A interface deve ser visualmente atraente e agradável"*

**Implementação:**
- **Gradiente de cores harmônico**: Transição suave entre azul marinho (#01113C) e turquesa (#01A4A5)
- **Efeito Glassmorphism**: Card semi-transparente com blur que simula vidro fosco
- **Tipografia elegante**: Fonte Figtree com pesos variados para hierarquia visual
- **Espaçamento consistente**: Grid system com margins e paddings proporcionais
- **Bordas suaves**: Border-radius de 24px no card principal, 12px nos inputs
- **Sombras multicamadas**: Profundidade através de box-shadows complexas

**Por que funciona:** A estética moderna e limpa cria uma primeira impressão positiva, aumentando a confiança no sistema.

---

### 2. 😊 Satisfatório

> *"O usuário deve sentir satisfação ao completar tarefas"*

**Implementação:**
- **Modal de sucesso animado**: Ícone de check com animação "pop" celebra o login
- **Mensagem personalizada**: "Bem-vindo(a), [Nome]!" cria conexão pessoal
- **Transição suave**: Feedback de "Redirecionando para o dashboard..." mantém expectativa positiva
- **Ícone de confirmação no email**: Check verde aparece quando email é válido
- **Estados de sucesso nos campos**: Borda verde indica validação bem-sucedida

**Por que funciona:** Micro-interações e celebrações visuais liberam dopamina, criando associação positiva com o produto.

---

### 3. 🔥 Interessante

> *"A interface deve capturar e manter a atenção do usuário"*

**Implementação:**
- **Efeito Parallax**: 10 elementos geométricos flutuantes que respondem ao movimento do mouse
- **Rotações variadas**: Elementos giram em velocidades diferentes (6s a 15s por rotação)
- **Variação de opacidade**: Elementos "respiram" com animações de fade
- **Efeito 3D no card**: Card inclina sutilmente seguindo o cursor
- **Animação de entrada**: Elementos aparecem sequencialmente ao carregar a página

**Por que funciona:** Movimento controlado e interatividade mantêm o cérebro engajado sem sobrecarregar.

---

### 4. 💪 Motivador

> *"O sistema deve encorajar o usuário a completar suas ações"*

**Implementação:**
- **Progresso visual**: Spinner de loading indica que algo está acontecendo
- **Texto do botão dinâmico**: Muda de "Entrar" para "Entrando..." durante processamento
- **Detecção positiva de email**: Check verde motiva a continuar para a senha
- **Credenciais visíveis**: Caixa amarela com dados de teste remove barreira inicial
- **Design convidativo**: Cores quentes secundárias (turquesa) criam sensação de boas-vindas

**Por que funciona:** Feedback positivo constante e redução de fricção mantêm o momentum do usuário.

---

### 5. 😌 Agradável

> *"A interação deve ser prazerosa, não frustrante"*

**Implementação:**
- **Transições suaves**: Todas as mudanças de estado têm duration de 300ms
- **Easing curves naturais**: `cubic-bezier(0.4, 0, 0.2, 1)` imita movimento físico
- **Feedback não-intrusivo**: Erros são mostrados inline, sem popups bloqueantes
- **Hover states**: Botão aumenta sutilmente (scale 1.02) ao passar o mouse
- **Animação de erro gentil**: "Shake" no card é suave, não agressivo
- **Cores agradáveis**: Paleta fria/neutra que não cansa a vista

**Por que funciona:** Micro-animações bem calibradas criam sensação de qualidade e cuidado.

---

### 6. 🏆 Compensador

> *"O esforço investido deve valer a pena"*

**Implementação:**
- **Retorno visual imediato**: Cada ação tem resposta instantânea
- **Celebração do sucesso**: Modal animado recompensa o login bem-sucedido
- **Mínimo esforço, máximo resultado**: 2 campos para acesso completo ao sistema
- **Consistência**: Sistema sempre responde da mesma forma, criando confiança
- **Recuperação fácil de erros**: Mensagens claras permitem correção rápida

**Por que funciona:** A proporção esforço/recompensa é favorável, criando sensação de valor.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **HTML5** | - | Estrutura semântica e acessível |
| **CSS3** | - | Estilização, animações, responsividade |
| **JavaScript** | ES6+ | Lógica de validação, interatividade |
| **Tailwind CSS** | 3.x (CDN) | Framework utilitário para estilização rápida |
| **Figtree Font** | - | Tipografia moderna e legível |

### Por que estas tecnologias?

- **Sem dependências de build**: Funciona diretamente no navegador
- **100% offline**: Tailwind via CDN cacheia após primeiro acesso
- **Cross-browser**: Compatível com Chrome, Firefox, Safari, Edge
- **Leve**: Menos de 50KB total de código próprio

---

## 🚀 Instruções de Execução

### Método 1: Abrir diretamente (Recomendado)

1. Faça o download ou clone do repositório:
   ```bash
   git clone git@github.com:IrvingSamuel/wildcard-login.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd wildcard-login
   ```

3. Abra o arquivo `index.html` no seu navegador:
   - **Windows**: Duplo clique no arquivo ou `start index.html`
   - **macOS**: `open index.html`
   - **Linux**: `xdg-open index.html`

### Método 2: Servidor local (Opcional)

Se preferir usar um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (npx)
npx serve .

# Com PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

### Requisitos

- Navegador moderno (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- Conexão com internet apenas no primeiro acesso (para carregar Tailwind CDN)

---

## 🔑 Credenciais de Demonstração

O sistema aceita as seguintes combinações de email/senha:

| Email | Senha | Perfil |
|-------|-------|--------|
| `demo@spaceflow.com` | `demo123` | Coordenador |
| `admin@spaceflow.com` | `admin123` | Administrador |
| `professor@spaceflow.com` | `prof123` | Professor |

> **Nota**: As credenciais de demonstração (`demo@spaceflow.com` / `demo123`) são exibidas na própria interface para facilitar os testes.

---

## 📁 Estrutura do Projeto

```
wildcard-login/
├── index.html          # Página principal de login
├── styles.css          # Estilos personalizados e animações
├── script.js           # Lógica de validação e interatividade
├── assets/
│   └── logo.png        # Logo do Spaceflow
└── README.md           # Documentação do projeto
```

### Descrição dos Arquivos

| Arquivo | Linhas | Descrição |
|---------|--------|-----------|
| `index.html` | ~250 | Estrutura HTML semântica com elementos de acessibilidade |
| `styles.css` | ~200 | Animações CSS, glassmorphism, parallax, responsividade |
| `script.js` | ~350 | Validação, autenticação simulada, efeitos interativos |

---

## 👤 Autor

**Irving Samuel**

- GitHub: [@IrvingSamuel](https://github.com/IrvingSamuel)

---

## 📝 Licença

Este projeto foi desenvolvido para fins acadêmicos na disciplina de **Interação Humano-Computador**.

---

<div align="center">

**Desenvolvido com 💙 para IHC**

*Spaceflow - Sistema de Gestão de Espaços Educacionais*

</div>
