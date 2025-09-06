# 🚀 Guia de Deploy - CatButler

Este guia fornece instruções detalhadas para fazer deploy do CatButler em diferentes plataformas.

## 📋 Pré-requisitos

### Build de Produção
```bash
# Instalar dependências
npm install

# Criar build otimizado
npm run build

# Verificar build
npm run preview
```

### Verificações Antes do Deploy
- [ ] Todas as dependências instaladas
- [ ] Variáveis de ambiente configuradas
- [ ] Build sem erros
- [ ] Testes passando
- [ ] Linting sem erros

## 🌐 Deploy no Vercel (Recomendado)

### Configuração Automática

1. **Conectar Repositório**
   - Acesse [vercel.com](https://vercel.com)
   - Conecte sua conta GitHub
   - Importe o repositório CatButler

2. **Configurar Variáveis de Ambiente**
   ```bash
   # No dashboard da Vercel
   VITE_OPENAI_API_KEY=your_key_here
   VITE_GOOGLE_MAPS_API_KEY=your_key_here
   VITE_API_URL=https://api.catbutler.com
   VITE_GA_TRACKING_ID=your_ga_id
   ```

3. **Deploy Automático**
   - Push para `main` = deploy automático
   - Push para outras branches = preview

### Configuração Manual

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Configurar domínio personalizado
vercel domains add catbutler.com
```

### Arquivo de Configuração
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 🌊 Deploy no Netlify

### Configuração Automática

1. **Conectar Repositório**
   - Acesse [netlify.com](https://netlify.com)
   - Conecte sua conta GitHub
   - Selecione o repositório CatButler

2. **Configurações de Build**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Variáveis de Ambiente**
   ```bash
   # No dashboard da Netlify
   VITE_OPENAI_API_KEY=your_key_here
   VITE_GOOGLE_MAPS_API_KEY=your_key_here
   VITE_API_URL=https://api.catbutler.com
   ```

### Deploy Manual

```bash
# Build
npm run build

# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Arquivo de Configuração
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## ☁️ Deploy no AWS

### S3 + CloudFront

1. **Configurar S3**
   ```bash
   # Instalar AWS CLI
   aws configure
   
   # Criar bucket
   aws s3 mb s3://catbutler-app
   
   # Upload do build
   aws s3 sync dist/ s3://catbutler-app --delete
   
   # Configurar website
   aws s3 website s3://catbutler-app --index-document index.html --error-document index.html
   ```

2. **Configurar CloudFront**
   ```bash
   # Criar distribuição CloudFront
   aws cloudfront create-distribution --distribution-config file://cloudfront-config.json
   ```

3. **Script de Deploy**
   ```bash
   #!/bin/bash
   # deploy.sh
   
   echo "Building application..."
   npm run build
   
   echo "Uploading to S3..."
   aws s3 sync dist/ s3://catbutler-app --delete
   
   echo "Invalidating CloudFront..."
   aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
   
   echo "Deploy completed!"
   ```

### Amplify

1. **Conectar Repositório**
   - Acesse AWS Amplify Console
   - Conecte repositório GitHub
   - Configure build settings

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

## 🐳 Deploy com Docker

### Dockerfile
```dockerfile
# Dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose
```yaml
# docker-compose.yml
version: '3.8'

services:
  catbutler:
    build: .
    ports:
      - "80:80"
    environment:
      - VITE_API_URL=https://api.catbutler.com
    restart: unless-stopped
```

### Deploy com Docker
```bash
# Build da imagem
docker build -t catbutler-app .

# Executar container
docker run -p 80:80 catbutler-app

# Com Docker Compose
docker-compose up -d
```

## 🔧 Configurações de Produção

### Variáveis de Ambiente
```bash
# .env.production
VITE_APP_NAME=CatButler
VITE_APP_VERSION=1.0.0
VITE_API_URL=https://api.catbutler.com
VITE_GOOGLE_MAPS_API_KEY=your_production_key
VITE_OPENAI_API_KEY=your_production_key
VITE_GA_TRACKING_ID=your_production_ga_id
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_NOTIFICATIONS=true
```

### Configuração do Nginx
```nginx
# nginx.conf
server {
    listen 80;
    server_name catbutler.com www.catbutler.com;
    
    root /usr/share/nginx/html;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # Cache static assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
```

## 📊 Monitoramento

### Health Check
```javascript
// public/health.html
<!DOCTYPE html>
<html>
<head>
    <title>CatButler Health Check</title>
</head>
<body>
    <h1>✅ CatButler is running</h1>
    <p>Status: OK</p>
    <p>Timestamp: <span id="timestamp"></span></p>
    <script>
        document.getElementById('timestamp').textContent = new Date().toISOString();
    </script>
</body>
</html>
```

### Logs
```bash
# Verificar logs do container
docker logs catbutler-app

# Logs em tempo real
docker logs -f catbutler-app

# Logs do Nginx
docker exec catbutler-app tail -f /var/log/nginx/access.log
```

## 🔒 SSL/HTTPS

### Let's Encrypt (Certbot)
```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Obter certificado
sudo certbot --nginx -d catbutler.com -d www.catbutler.com

# Renovação automática
sudo crontab -e
# Adicionar: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Cloudflare
1. Adicionar domínio no Cloudflare
2. Configurar DNS
3. Ativar SSL/TLS
4. Configurar Page Rules

## 🚀 CI/CD

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test
      
      - name: Build
        run: npm run build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
          VITE_GOOGLE_MAPS_API_KEY: ${{ secrets.VITE_GOOGLE_MAPS_API_KEY }}
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./
```

## 📈 Performance

### Otimizações de Build
```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber'],
          ui: ['@headlessui/react', '@heroicons/react']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
}
```

### Bundle Analysis
```bash
# Instalar analyzer
npm install --save-dev rollup-plugin-visualizer

# Analisar bundle
npm run build
npx vite-bundle-analyzer dist
```

## 🔄 Rollback

### Estratégias de Rollback

1. **Vercel/Netlify**
   - Usar interface web para reverter
   - Manter deploys anteriores

2. **Docker**
   ```bash
   # Reverter para versão anterior
   docker run -p 80:80 catbutler-app:previous
   ```

3. **AWS S3**
   ```bash
   # Restaurar versão anterior
   aws s3 sync s3://catbutler-app-backup/ s3://catbutler-app --delete
   ```

## 📞 Suporte

### Troubleshooting

1. **Build falha**
   - Verificar dependências
   - Verificar variáveis de ambiente
   - Verificar logs de build

2. **Deploy falha**
   - Verificar configurações
   - Verificar permissões
   - Verificar logs de deploy

3. **App não carrega**
   - Verificar DNS
   - Verificar SSL
   - Verificar logs do servidor

### Contato
- **Email**: [deploy@catbutler.com](mailto:deploy@catbutler.com)
- **GitHub Issues**: [Issues](https://github.com/seu-usuario/catbutler-react/issues)
- **Discord**: [Servidor CatButler](https://discord.gg/catbutler)

---

**Próximo passo**: Consulte o [Guia de Contribuição](CONTRIBUTING.md) para contribuir com o projeto.

