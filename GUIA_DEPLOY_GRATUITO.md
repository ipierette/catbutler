# 🐱 CatButler - Guia de Deploy Gratuito Completo

## 📋 Resumo do Projeto
O CatButler é um assistente de IA para casa com funcionalidades de:
- **Cozinha IA**: Sugestões de receitas e cardápios
- **Faxina IA**: Dicas de limpeza e sustentabilidade  
- **Mercado IA**: Sugestões de compras inteligentes
- **Tarefas**: Organização de tarefas domésticas
- **Tema claro/escuro**: Interface adaptável

## 🚀 Próximos Passos para Deploy Gratuito

### 1. 📁 Configuração dos Arquivos de Ambiente

#### Backend (catbutler-backend)
```bash
# Renomeie o arquivo de exemplo
cd catbutler-backend
cp env.backend .env
```

#### Frontend (catbutler-react)  
```bash
# Renomeie o arquivo de exemplo
cd catbutler-react
cp env.frontend .env
```

### 2. 🗄️ Configuração do Banco de Dados (Supabase - GRATUITO)

1. **Crie uma conta no Supabase**:
   - Acesse: https://supabase.com
   - Clique em "Start your project"
   - Conecte com GitHub

2. **Crie um novo projeto**:
   - Nome: `catbutler-db`
   - Senha: Gere uma senha segura
   - Região: `South America (São Paulo)` para melhor performance

3. **Configure as variáveis de ambiente**:
   - No arquivo `catbutler-backend/.env`:
   ```env
   SUPABASE_URL=https://seu-projeto-id.supabase.co
   SUPABASE_ANON_KEY=sua_chave_anonima_aqui
   SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role_aqui
   ```

4. **Crie as tabelas no banco**:
   - Acesse o SQL Editor no Supabase
   - Execute o script do arquivo `catbutler-react/database/schema.sql`

### 3. 🤖 Configuração da IA (Hugging Face - GRATUITO)

1. **Crie uma conta no Hugging Face**:
   - Acesse: https://huggingface.co
   - Clique em "Sign Up"

2. **Gere tokens de acesso**:
   - Vá para: https://huggingface.co/settings/tokens
   - Crie 3 tokens específicos:
     - `cozinha-token` - Para funcionalidades de Cozinha IA (receitas, cardápios)
     - `mercado-token` - Para funcionalidades de Mercado IA (compras inteligentes)
     - `faxina-token` - Para funcionalidades de Faxina IA (limpeza, sustentabilidade) e outras funcionalidades de IA

**📝 Nota**: O token `faxina` será usado não apenas para dicas de limpeza, mas também para qualquer outra funcionalidade de IA que você adicionar no futuro, mantendo a organização do código.

3. **Configure as variáveis**:
   ```env
   # COZINHA IA: Receitas, cardápios e sugestões culinárias
   HF_TOKEN_COZINHA=seu_token_cozinha_aqui
   # MERCADO IA: Compras inteligentes e ofertas
   HF_TOKEN_MERCADO=seu_token_mercado_aqui
   # FAXINA IA: Dicas de limpeza, sustentabilidade e outras funcionalidades de IA
   HF_TOKEN_FAXINA=seu_token_faxina_aqui
   ```

### 4. 🔐 Configuração de Segurança

1. **Gere JWT Secret**:
   ```bash
   # Use um gerador online ou:
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```

2. **Configure no .env do backend**:
   ```env
   JWT_SECRET=seu_jwt_secret_super_seguro_aqui
   ```

### 5. 🚀 Deploy do Backend (Railway - GRATUITO)

1. **Crie conta no Railway**:
   - Acesse: https://railway.app
   - Conecte com GitHub

2. **Deploy do backend**:
   - Clique em "New Project"
   - Selecione "Deploy from GitHub repo"
   - Escolha o repositório `catbutler-backend`
   - Configure as variáveis de ambiente no painel do Railway

3. **Configure domínio**:
   - Railway fornece um domínio gratuito
   - Anote a URL: `https://seu-projeto.railway.app`

### 6. 🌐 Deploy do Frontend (Vercel - GRATUITO)

1. **Crie conta no Vercel**:
   - Acesse: https://vercel.com
   - Conecte com GitHub

2. **Deploy do frontend**:
   - Clique em "New Project"
   - Importe o repositório `catbutler-react`
   - Configure as variáveis de ambiente:
     ```env
     VITE_API_URL=https://seu-projeto.railway.app/api
     VITE_API_BASE_URL=https://seu-projeto.railway.app
     ```

3. **Configure domínio personalizado** (opcional):
   - Vercel fornece domínio gratuito: `seu-projeto.vercel.app`
   - Para domínio personalizado, configure DNS

### 7. 🔧 Configurações Finais

#### Atualize CORS no Backend
```javascript
// No arquivo server.js, atualize:
app.use(cors({
  origin: [
    'http://localhost:5173', // Desenvolvimento
    'https://seu-projeto.vercel.app' // Produção
  ],
  credentials: true
}));
```

#### Configure Vite para Produção
```javascript
// No arquivo vite.config.js, adicione:
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    port: 5173,
    host: true
  }
});
```

### 8. 📱 Teste e Validação

1. **Teste local**:
   ```bash
   # Backend
   cd catbutler-backend
   npm install
   npm run dev

   # Frontend
   cd catbutler-react
   npm install
   npm run dev
   ```

2. **Teste em produção**:
   - Acesse a URL do Vercel
   - Teste todas as funcionalidades
   - Verifique logs no Railway

### 9. 🎯 Funcionalidades Implementadas

- ✅ **Autenticação**: Login/Cadastro com JWT
- ✅ **Tema claro/escuro**: Toggle no header [[memory:8156694]]
- ✅ **Cozinha IA**: Sugestões de receitas
- ✅ **Faxina IA**: Dicas de limpeza
- ✅ **Mercado IA**: Compras inteligentes
- ✅ **Tarefas**: Organização doméstica
- ✅ **Responsivo**: Mobile-first design
- ✅ **Segurança**: Validação e sanitização

### 10. 💰 Custos Totais: R$ 0,00

- **Supabase**: 500MB de banco gratuito
- **Railway**: 500 horas/mês gratuitas
- **Vercel**: Deploy ilimitado gratuito
- **Hugging Face**: API gratuita para uso pessoal

### 11. 🔄 Monitoramento e Manutenção

1. **Logs**: Monitore logs no Railway e Vercel
2. **Performance**: Use ferramentas do navegador
3. **Backup**: Supabase faz backup automático
4. **Atualizações**: Deploy automático via GitHub

### 12. 🆘 Troubleshooting

#### Problemas Comuns:
- **CORS Error**: Verifique URLs no backend
- **Database Error**: Verifique credenciais do Supabase
- **AI Error**: Verifique tokens do Hugging Face
- **Build Error**: Verifique variáveis de ambiente

#### Logs Importantes:
```bash
# Backend logs
railway logs

# Frontend logs  
vercel logs
```

## 🎉 Resultado Final

Após seguir este guia, você terá:
- ✅ Site funcionando 100% online
- ✅ Banco de dados configurado
- ✅ IA funcionando
- ✅ Deploy automático
- ✅ Domínio personalizado (opcional)
- ✅ Tudo gratuito!

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs de erro
2. Confirme todas as variáveis de ambiente
3. Teste localmente primeiro
4. Consulte a documentação dos serviços

**Boa sorte com seu CatButler! 🐱✨**
