# Simple ToDo App

Aplicativo simples de tarefas com lembretes locais no navegador.

## Estrutura
- `index.html`: aplicação principal
- `vercel.json`: configuração da Vercel
- `package.json`: metadados simples do projeto

## Publicação na Vercel

### Opção 1: pelo painel
1. Acesse a Vercel.
2. Crie um novo projeto.
3. Faça upload desta pasta ou envie o conteúdo para um repositório GitHub.
4. Como é um site estático, a Vercel detecta automaticamente a publicação.
5. Após publicar, abra o site e clique em **Ativar notificações**.

### Opção 2: pela CLI
1. Instale a CLI: `npm i -g vercel`
2. Entre na pasta do projeto.
3. Rode: `vercel`
4. Para produção: `vercel --prod`

## Observações
- As notificações dependem da permissão do navegador.
- O lembrete simples funciona melhor com a página aberta.
- Como o site ficará em HTTPS na Vercel, o ambiente é adequado para a API de notificações do navegador.
