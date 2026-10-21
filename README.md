# Taísa Trancista — Landing page

Landing page responsiva para apresentação de serviços de tranças em Bauru - SP, com foco em pedidos de orçamento pelo WhatsApp.

## Tecnologias
- HTML5
- CSS3 (responsivo)
- JavaScript puro

## Executar localmente
Abra `index.html` no navegador. Não precisa instalar dependências nem executar servidor.

## Publicar no GitHub Pages
1. Envie os arquivos deste projeto para o repositório `ihbiondo/taisa-trancista`.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/ (root)`, depois salve.
5. Aguarde a publicação e teste no celular e no computador.

## Onde editar
- Conteúdo, títulos, textos e seções: `index.html`
- Cores, tipografia, espaçamentos e responsividade: `css/style.css`
- Formulário, menu móvel e mensagem do WhatsApp: `js/app.js`

## Trocar a paleta de cores
No início de `css/style.css`, edite as variáveis dentro de `:root`, especialmente:
- `--site-primary`
- `--site-secondary`
- `--site-background`
- `--site-on-background`
- `--surface`
- `--surface-soft`

Algumas cores de fundo dos destaques estão definidas diretamente nas regras `.hero`, `.portrait-placeholder`, `.about-art`, `.booking-section` e `.footer`.

## Fotos
A galeria e o destaque principal ainda têm espaços reservados. Substitua os blocos de placeholder por imagens próprias quando as fotos estiverem escolhidas. Use apenas fotos autorizadas pelas pessoas retratadas.

## WhatsApp
O número configurado está em `js/app.js` e nos links do `index.html`. O formulário prepara a mensagem e abre o WhatsApp; não armazena dados em um banco.

## Observação
Os textos sobre preços, duração e materiais estão genéricos para não inventar condições comerciais. Ajuste-os conforme o atendimento real da Taísa.
