# 📝 Changelog - CatButler

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Adicionado
- Sistema de documentação completo
- Guias de instalação, desenvolvimento e deploy
- Templates para contribuição

## [2.0.1] - 2025-01-27

### 🎨 Melhorias de UX/UI

#### Melhorado
- **Assistente Culinário no Modo Claro**
  - Fundo do chat mais claro e harmonioso (gray-50)
  - Mensagens do bot com azul suave e bordas sutis
  - Input com fundo branco e placeholder mais suave
  - Gradiente laranja nas mensagens do usuário
  - Sombras sutis para profundidade visual
  - Hover effects elegantes
  - Botão de envio com estado disabled
  - Mensagem de boas-vindas mais atrativa

- **Menu Responsivo**
  - Corrigido problema da aba "Home" sumindo no menu mobile
  - Adicionado posicionamento fixo com z-index adequado
  - Overlay de fundo para melhor UX
  - Classes CSS específicas para garantir visibilidade
  - Menu posicionado abaixo do header (top: 4rem)
  - Overlay clicável para fechar o menu

- **Responsividade Geral**
  - Gatinho mordomo escondido em telas menores que 1024px
  - Footer reorganizado em telas menores que 926px
  - Layout vertical do footer em dispositivos móveis
  - Evita sobreposição da frase "Curtiu" com versão
  - Melhor experiência em todos os tamanhos de tela

#### Técnico
- **CSS Responsivo**
  - Media queries específicas para footer
  - Classes `.footer-desktop` e `.footer-mobile`
  - Breakpoints customizados (926px, 1024px)
  - Z-index otimizado para menu mobile

- **Componentes**
  - Header com menu mobile melhorado
  - Footer com layout adaptativo
  - Home com gatinho responsivo
  - CozinhaIA com chat estilizado

## [2.0.0] - 2025-01-27

### 🚀 Funcionalidades Avançadas de UX/UI

#### Adicionado
- 🔔 **Sistema de Notificações Toast**
  - ToastProvider para gerenciamento global
  - useToast hook para disparar notificações
  - Tipos: success, error, warning, info, default
  - Auto-dismiss configurável
  - Animações de entrada e saída
  - Renderização via Portal

- ⚡ **Sistema de Loading States**
  - LoadingSpinner com tamanhos e cores variados
  - LoadingButton para botões com estado de carregamento
  - LoadingCard para seções de loading
  - useLoading hook para gerenciamento de estados
  - withLoading para operações assíncronas

- ✅ **Validação em Tempo Real**
  - useValidation hook completo para formulários
  - useFieldValidation para validação de campo único
  - Debounce de 300ms para performance
  - Integração com sistema de segurança existente
  - Validação enquanto o usuário digita

- 🛡️ **Segurança e Confirmações**
  - ErrorBoundary para captura de erros de renderização
  - ConfirmationDialog para ações críticas
  - useConfirm hook para confirmações assíncronas
  - Input sanitization aprimorada
  - Validação robusta de email, senha e nome

- ⌨️ **Sistema de Atalhos de Teclado**
  - useKeyboardShortcuts hook base
  - useCatButlerShortcuts para atalhos específicos
  - Navegação: Ctrl+H (Home), Ctrl+T (Tarefas), etc.
  - Ações: Ctrl+K (Tema), Ctrl+Shift+S (Compartilhar)
  - Formulários: Ctrl+Enter (Confirmar), Escape (Cancelar)
  - KeyboardShortcutsHelp modal

- 🚀 **Performance Otimizada**
  - Lazy loading para todas as páginas
  - withLazyLoading HOC com fallback customizado
  - LazyWrapper com Intersection Observer
  - LazyImage para carregamento lazy de imagens
  - useDebounce e useThrottle hooks
  - Memoização de componentes

#### Melhorado
- 🎨 **Design System Aprimorado**
  - Abas da página de configurações com estilo consistente
  - Contraste melhorado no modo escuro
  - Transições mais suaves
  - Estados visuais mais claros

- 🔐 **Sistema de Autenticação**
  - Página de SignUp com validação em tempo real
  - Página de Login com validação
  - Modais reutilizáveis para Termos de Uso e Política de Privacidade
  - Validação de segurança em todos os inputs

- 📱 **Responsividade**
  - Layout otimizado para todas as telas
  - Abas responsivas com labels ocultas em mobile
  - Touch-friendly em todos os dispositivos

#### Técnico
- 🏗️ **Arquitetura de Componentes**
  - Providers globais (Toast, Confirmation, ErrorBoundary)
  - Hooks customizados organizados
  - Utilitários de segurança centralizados
  - Componentes reutilizáveis

- 🔧 **Configuração do Projeto**
  - Lazy loading configurado nas rotas
  - Error boundaries em toda a aplicação
  - Sistema de notificações global
  - Validação integrada em formulários

## [1.1.0] - 2025-01-27

### Adicionado
- 🧹 **Faxina IA - Sistema Completo**
  - Sistema de abas internas (Planejador, Produtos, Ambientes, Sustentabilidade)
  - Planejador Inteligente com layout em duas colunas
  - Guia de Produtos com seleção por superfície
  - Análise por Ambiente com galeria de 3 cards
  - Sustentabilidade com checkboxes múltiplos e cálculo de impacto
- 🎨 **Melhorias de Interface**
  - Scroll interno para controle de altura em SPA
  - Layout fixo com header e footer
  - Cores dos seletores corrigidas no modo escuro
  - Hover effects e transições melhoradas
- 🔧 **Otimizações Técnicas**
  - Verificações de segurança para evitar crashes
  - Código refatorado para melhor manutenibilidade
  - Linting errors corrigidos
  - Responsividade aprimorada

### Corrigido
- Erro crítico na aba Sustentabilidade que causava crash
- Overflow de conteúdo que ultrapassava os limites da SPA
- Cores dos seletores não visíveis no modo escuro
- Problemas de aninhamento de funções (linting)

### Melhorado
- Layout mais compacto e organizado
- Experiência do usuário mais fluida
- Performance e estabilidade geral

## [1.0.0] - 2025-01-27

### Adicionado
- 🎨 **Interface Principal**
  - Página inicial com design moderno e responsivo
  - Sistema de tema claro/escuro com toggle no header
  - Fundo 3D interativo com Three.js
  - Efeito glass (vidro) em componentes principais

- 🐱 **Gato Mordomo**
  - Imagem integrada do gato mordomo na página inicial
  - Posicionamento "sentado" na borda do container
  - Tamanho otimizado (500x400px)
  - Efeito hover com escala

- 🧭 **Navegação**
  - Header com logo e navegação responsiva
  - Footer com informações de contato e redes sociais
  - Sistema de rotas com React Router
  - Páginas: Home, Tarefas, Cozinha IA, Faxina IA, Mercado IA, Configurações

- ⚙️ **Página de Configurações**
  - Sistema de tabs para organização
  - **Tab Perfil**: Edição de nome e email
  - **Tab Segurança**: Alteração de senha
  - **Tab Preferências**: Localidade padrão e notificações
  - **Tab Conta Familiar**: Compartilhamento familiar

- 🎨 **Design System**
  - Paleta de cores consistente (verde, azul, roxo, laranja)
  - Componentes reutilizáveis
  - Animações suaves e transições
  - Responsividade mobile-first

- 🔧 **Funcionalidades Técnicas**
  - Context API para gerenciamento de tema
  - Hooks customizados
  - Validação de formulários
  - Sistema de notificações
  - Cache de configurações

### Alterado
- **Cores dos Botões**: Implementadas cores vibrantes no modo claro
- **Texto Midnight**: Aplicada cor midnight blue no modo escuro
- **Layout HOME**: Reorganizado para melhor integração do gato mordomo
- **Altura do Container**: Reduzida para layout mais compacto

### Corrigido
- **CSS Override**: Removidas regras CSS que sobrescreviam cores dos botões
- **Ícone de Compartilhamento**: Corrigido SVG do ícone de compartilhamento
- **PropTypes**: Adicionadas validações de props
- **Linting**: Corrigidos todos os warnings de ESLint

### Removido
- Regras CSS conflitantes que interferiam com Tailwind
- Dependências não utilizadas

## [0.9.0] - 2025-01-26

### Adicionado
- Estrutura inicial do projeto
- Configuração do Vite + React
- Integração com Tailwind CSS
- Sistema de roteamento básico
- Componentes base (Header, Footer)

### Alterado
- Migração de Create React App para Vite
- Atualização para React 19.1.1

## [0.8.0] - 2025-01-25

### Adicionado
- Primeira versão do design
- Layout básico das páginas
- Sistema de cores inicial

### Alterado
- Refatoração da estrutura de componentes

## [0.7.0] - 2025-01-24

### Adicionado
- Conceito inicial do projeto
- Wireframes e mockups
- Definição da arquitetura

---

## 📊 Estatísticas de Desenvolvimento

### Commits por Versão
- **v1.0.0**: 47 commits
- **v0.9.0**: 23 commits
- **v0.8.0**: 15 commits
- **v0.7.0**: 8 commits

### Contribuidores
- **Izadora** - Desenvolvedora Principal
- **Comunidade** - Feedback e sugestões

### Tecnologias Utilizadas
- React 19.1.1
- Vite 7.1.4
- Tailwind CSS 3.4.0
- Three.js 0.180.0
- React Three Fiber 9.3.0

---

## 🔮 Roadmap Futuro

### v1.1.0 - Funcionalidades de IA
- [ ] Integração com OpenAI para sugestões de receitas
- [ ] IA para rotinas de faxina personalizadas
- [ ] Comparação de preços em tempo real
- [ ] Sistema de notificações push

### v1.2.0 - Conta Familiar
- [ ] Sistema de convites familiares
- [ ] Compartilhamento de receitas
- [ ] Listas de compras colaborativas
- [ ] Perfis de usuário personalizados

### v1.3.0 - Mobile App
- [ ] Aplicativo React Native
- [ ] Sincronização offline
- [ ] Notificações nativas
- [ ] Integração com câmera para ingredientes

### v2.0.0 - Funcionalidades Avançadas
- [ ] Integração com assistentes de voz
- [ ] IA para planejamento de refeições
- [ ] Integração com supermercados
- [ ] Sistema de gamificação

---

## 📝 Notas de Versão

### v1.0.0
Esta é a primeira versão estável do CatButler, focada em estabelecer uma base sólida com design moderno e funcionalidades essenciais. O projeto está pronto para desenvolvimento de funcionalidades de IA e integrações externas.

### v0.9.0
Versão de desenvolvimento que estabeleceu a arquitetura base do projeto, incluindo configuração de build, roteamento e componentes fundamentais.

### v0.8.0
Primeira iteração do design, focada em criar uma identidade visual consistente e experiência de usuário intuitiva.

### v0.7.0
Fase de planejamento e conceituação, onde foram definidos os objetivos e requisitos do projeto.

---

## 🤝 Como Contribuir

Para contribuir com o projeto, consulte o [Guia de Contribuição](docs/CONTRIBUTING.md).

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

**Mantido com ❤️ pela equipe CatButler**

