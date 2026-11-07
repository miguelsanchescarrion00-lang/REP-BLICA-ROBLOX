# REPÚBLICA IA — versão completa (base)

Projeto de simulador/assistente político com:
- Site público responsivo.
- Áreas de assessoria, leis, rankings, centros políticos e conversa demonstrativa.
- Login de proprietário no backend (não no JavaScript público).
- Painel administrativo para editar o nome do centro político e dados de demonstração.
- Cloudflare Worker + D1 para autenticação e persistência.

## Importante sobre a conta do proprietário
O nome de usuário inicial é `MIGUEL_ZEZIN5`.
**Não use a senha que foi enviada no chat.** Ela foi compartilhada em uma conversa; escolha uma senha nova e exclusiva.

A senha é configurada como segredo no Cloudflare Worker. Ela NÃO fica no HTML, CSS ou JavaScript do site.

## Estrutura
- `public/` — arquivos do site para publicação.
- `worker/` — backend seguro.
- `worker/schema.sql` — tabelas do banco D1.
- `wrangler.toml` — configuração inicial do Worker e D1.

## Publicação — visão geral
1. Crie uma conta Cloudflare com ajuda de um responsável, se necessário.
2. Crie um banco D1 chamado `republica-ia-db`.
3. Copie o ID do banco para `wrangler.toml`, substituindo `COLOQUE_O_ID_DO_BANCO`.
4. Execute o SQL de `worker/schema.sql` no banco D1.
5. Instale Wrangler em um computador e publique o Worker a partir da pasta do projeto:
   - `npm install -g wrangler`
   - `wrangler login`
   - `wrangler secret put OWNER_PASSWORD`
   - `wrangler secret put SESSION_SECRET`
   - `wrangler deploy`
6. Ao pedir `OWNER_PASSWORD`, digite uma senha NOVA e forte. Ao pedir `SESSION_SECRET`, use uma sequência aleatória longa.
7. Publique a pasta `public/` no Cloudflare Pages ou GitHub Pages.
8. Configure a variável `API_BASE` em `public/js/config.js` com a URL pública do Worker.

## Limitações honestas
- GitHub Pages sozinho não executa o backend. O login seguro depende do Worker.
- O site não lê automaticamente dados do Roblox. Rankings e centros são dados de demonstração até existir uma integração autorizada.
- A conversa IA é uma demonstração local; para IA real é necessário conectar um provedor por backend, nunca colocar chave secreta no navegador.
- Não compartilhe senhas, tokens ou chaves em chats, prints ou repositórios públicos.
