# 🚀 Instruções de Commit e Deploy - CatButler

## 📋 Estrutura Atual do Repositório

```
catbutler/ (ipierette/catbutler)
├── catbutler-frontend/     # React + Vite
├── catbutler-backend/      # Node.js + Express
├── package.json            # Monorepo config
├── vercel.json            # Deploy config
└── .gitignore             # Git ignore
```

## 🔄 Comandos para Commit

### 1. Adicionar Backend ao Repositório
```bash
# Navegar para o diretório do projeto
cd /Users/Izadora1/Desktop/programacao/projetos/catbutler

# Adicionar todos os arquivos
git add .

# Commit inicial do monorepo
git commit -m "feat: adicionar backend e organizar monorepo

- Adicionar catbutler-backend com API completa
- Renomear catbutler-react para catbutler-frontend
- Configurar monorepo com workspaces
- Adicionar configurações de deploy para Vercel
- Atualizar .gitignore para monorepo"

# Push para o repositório
git push origin main
```

### 2. Commits Futuros
```bash
# Para mudanças no frontend
git add catbutler-frontend/
git commit -m "feat(frontend): adicionar nova funcionalidade X"

# Para mudanças no backend
git add catbutler-backend/
git commit -m "feat(backend): implementar endpoint Y"

# Para mudanças em ambos
git add .
git commit -m "feat: implementar funcionalidade completa Z"

# Push
git push origin main
```

## 🌐 Deploy no Vercel

### 1. Configuração Inicial
1. Acesse [vercel.com](https://vercel.com)
2. Conecte com GitHub
3. Importe o repositório `ipierette/catbutler`
4. Configure as variáveis de ambiente

### 2. Variáveis de Ambiente no Vercel

#### Backend (Environment Variables)
```env
# Supabase
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# JWT
JWT_SECRET=your_very_secure_jwt_secret_key_here
JWT_EXPIRES_IN=7d

# Server
NODE_ENV=production
PORT=3001

# CORS
FRONTEND_URL=https://catbutler.vercel.app

# Hugging Face
HF_TOKEN_COZINHA=your_hf_token_cozinha_here
HF_TOKEN_MERCADO=your_hf_token_mercado_here
HF_TOKEN_FAXINA=your_hf_token_faxina_here

# HF Model
HF_MODEL=microsoft/DialoGPT-medium
HF_MAX_LENGTH=1000
HF_TEMPERATURE=0.7
```

#### Frontend (Environment Variables)
```env
VITE_API_URL=https://catbutler.vercel.app/api
VITE_API_BASE_URL=https://catbutler.vercel.app
VITE_APP_NAME=CatButler
VITE_NODE_ENV=production
```

### 3. Configuração de Build

O Vercel detectará automaticamente:
- **Frontend**: Vite build em `catbutler-frontend/`
- **Backend**: Node.js serverless em `catbutler-backend/`

### 4. Deploy Automático

Após configurar:
- ✅ Push para `main` → Deploy automático
- ✅ Pull Request → Preview deploy
- ✅ Branch específica → Deploy da branch

## 🔧 Comandos de Desenvolvimento

### Desenvolvimento Local
```bash
# Instalar dependências
npm run install:all

# Executar frontend e backend
npm run dev

# Apenas frontend
npm run dev:frontend

# Apenas backend
npm run dev:backend
```

### Build de Produção
```bash
# Build completo
npm run build

# Build frontend
npm run build:frontend

# Build backend
npm run build:backend
```

## 📱 URLs de Acesso

### Desenvolvimento
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3001
- **API Health**: http://localhost:3001/api/health

### Produção (após deploy)
- **Site**: https://catbutler.vercel.app
- **API**: https://catbutler.vercel.app/api
- **API Health**: https://catbutler.vercel.app/api/health

## 🐛 Troubleshooting

### Problemas Comuns

1. **Build Error no Vercel**
   - Verifique se todas as variáveis de ambiente estão configuradas
   - Confirme se o `package.json` está correto

2. **CORS Error**
   - Verifique se `FRONTEND_URL` está correto no backend
   - Confirme se as URLs de produção estão corretas

3. **Database Error**
   - Verifique credenciais do Supabase
   - Confirme se as tabelas foram criadas

4. **AI Error**
   - Verifique tokens do Hugging Face
   - Confirme se os tokens têm permissões corretas

### Logs
```bash
# Ver logs do Vercel
vercel logs

# Ver logs específicos
vercel logs --follow
```

## ✅ Checklist de Deploy

- [ ] Repositório organizado como monorepo
- [ ] Variáveis de ambiente configuradas
- [ ] Supabase configurado
- [ ] Hugging Face tokens configurados
- [ ] Vercel conectado ao repositório
- [ ] Deploy automático funcionando
- [ ] Testes em produção realizados

## 🎯 Próximos Passos

1. **Commit do backend**:
   ```bash
   git add .
   git commit -m "feat: adicionar backend e organizar monorepo"
   git push origin main
   ```

2. **Configurar Vercel**:
   - Importar repositório
   - Configurar variáveis de ambiente
   - Aguardar deploy automático

3. **Testar em produção**:
   - Acessar URL do Vercel
   - Testar todas as funcionalidades
   - Verificar logs de erro

**Boa sorte com o deploy! 🐱✨**
