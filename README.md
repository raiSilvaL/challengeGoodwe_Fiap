# EV ChargeOps — versão Netlify

Versão **100% estática** do dashboard EV ChargeOps, pronta para subir em um repositório Git e publicar no Netlify. O frontend mantém o tema GoodWe, os 12 registros históricos, analytics, alertas, agenda de recarga e a simulação SEMS.

## Rodar localmente

Não há dependências de backend nesta versão. A partir da pasta do projeto:

```bash
python3 -m http.server 3000 --directory public
```

Abra `http://localhost:3000`.

## Subir para Git

```bash
git init
git add .
git commit -m "Add EV ChargeOps Netlify site"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

## Publicar no Netlify

1. Acesse o painel do Netlify e escolha **Add new site → Import an existing project**.
2. Selecione o repositório Git.
3. Use estas configurações:
   - **Build command:** deixe vazio;
   - **Publish directory:** `public`;
   - **Base directory:** deixe vazio.
4. Clique em **Deploy site**.

O arquivo `netlify.toml` já informa `public` como diretório publicado e configura fallback para `index.html`.

## Importante sobre a API

Esta variante é estática e usa `public/mock-api.js` como API simulada no navegador. Ela não acessa a SEMS real nem expõe endpoints HTTP de backend. Para integrar a GoodWe SEMS em produção, será necessário adicionar Netlify Functions ou um backend separado, proteger credenciais em variáveis de ambiente e validar o contrato oficial da API.
