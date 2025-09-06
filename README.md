# 🐱 CatButler - Monorepo

Assistente de IA para Casa com funcionalidades de Cozinha, Faxina e Mercado.

## 📁 Estrutura do Projeto

```
catbutler/
├── catbutler-frontend/     # React + Vite (Frontend)
├── catbutler-backend/      # Node.js + Express (Backend API)
├── package.json            # Configuração do monorepo
├── vercel.json            # Configuração de deploy
└── .gitignore             # Arquivos ignorados
```

## 🚀 Início Rápido

### 1. Instalar Dependências
```bash
# Instalar dependências de todos os projetos
npm run install:all
```

### 2. Configurar Variáveis de Ambiente

#### Backend (`catbutler-backend/.env`)
```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
JWT_SECRET=your_very_secure_jwt_secret_key_here
HF_TOKEN_COZINHA=your_hf_token_cozinha_here
HF_TOKEN_MERCADO=your_hf_token_mercado_here
HF_TOKEN_FAXINA=your_hf_token_faxina_here
```

#### Frontend (`catbutler-frontend/.env`)
```env
VITE_API_URL=http://localhost:3001/api
VITE_API_BASE_URL=http://localhost:3001
```

### 3. Executar em Desenvolvimento
```bash
# Executar frontend e backend simultaneamente
npm run dev

# Ou executar separadamente:
npm run dev:frontend  # http://localhost:5173
npm run dev:backend   # http://localhost:3001
```

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Executa frontend e backend simultaneamente |
| `npm run dev:frontend` | Executa apenas o frontend |
| `npm run dev:backend` | Executa apenas o backend |
| `npm run build` | Build de produção para ambos |
| `npm run install:all` | Instala dependências de todos os projetos |

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte o repositório no Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Estrutura de Deploy
- **Frontend**: Deploy automático via Vercel
- **Backend**: Deploy como serverless functions no Vercel
- **Banco**: Supabase (gratuito)
- **IA**: Hugging Face (gratuito)

## 📚 Funcionalidades

- ✅ **Cozinha IA**: Sugestões de receitas e cardápios
- ✅ **Faxina IA**: Dicas de limpeza e sustentabilidade
- ✅ **Mercado IA**: Compras inteligentes e ofertas
- ✅ **Tarefas**: Organização de tarefas domésticas
- ✅ **Tema claro/escuro**: Interface adaptável
- ✅ **Responsivo**: Mobile-first design

## 🔧 Tecnologias

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express
- Supabase
- Hugging Face AI
- JWT Authentication

## 📖 Documentação

- [Guia de Deploy Gratuito](./GUIA_DEPLOY_GRATUITO.md)
- [Configuração do Backend](./catbutler-backend/README.md)
- [Configuração do Frontend](./catbutler-frontend/README.md)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.
