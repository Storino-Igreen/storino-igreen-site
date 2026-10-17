# Como publicar o site gratuitamente

## Opção A — GitHub Pages (hospedagem estática)
A publicação em um repositório público pode ser feita no GitHub Free. O endereço inicial será algo como `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

1. Crie ou entre na sua conta em https://github.com/.
2. Crie um repositório público, por exemplo `storino-igreen-site`.
3. Envie os arquivos `index.html`, `style.css` e `script.js` para a raiz do repositório. Não envie apenas o ZIP: extraia os arquivos primeiro.
4. Abra **Settings → Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**, selecione `main` e `/ (root)`, depois salve.
6. Aguarde a publicação e abra a URL mostrada em Pages para testar celular, botões e formulário.

Documentação oficial: https://docs.github.com/en/pages

## Sobre manter o endereço atual
O endereço `storino-corretor-energia-igreen2.siteaudit.com.br` é um subdomínio de `siteaudit.com.br`, e não um domínio independente como `storinoenergia.com.br`. Em geral, só quem controla o domínio principal pode alterar o DNS. Não altere nada no site atual antes de confirmar acesso e regras com a empresa SiteAudit.

Para manter exatamente esse endereço, pergunte ao suporte da SiteAudit se:
- o endereço pode apontar para uma hospedagem externa;
- existe exportação do site ou migração do subdomínio;
- há custo de domínio, hospedagem ou plano ativo;
- você tem acesso ao painel DNS/registrador.

Se eles não permitirem apontar esse subdomínio para outro lugar, você não poderá transferi-lo por conta própria. Nesse caso, use primeiro o endereço gratuito do GitHub Pages e, se desejar, registre um domínio próprio (normalmente há taxa de registro/renovação).

## Domínio próprio no GitHub Pages
Use apenas se você controla o domínio independente e tem acesso ao DNS:
1. Em **Settings → Pages → Custom domain**, informe o domínio e salve.
2. Configure os registros DNS indicados pela documentação oficial do GitHub para seu caso.
3. Espere a propagação do DNS (pode levar até 24 horas) e habilite HTTPS quando disponível.
4. Não remova os registros existentes sem entender se eles atendem a e-mail ou outros serviços.

Documentação oficial de domínios personalizados:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Importante
- Este pacote não inclui serviço de hospedagem, compra de domínio, backend de captação ou integração com CRM.
- O formulário abre o WhatsApp com a mensagem preenchida; não salva leads em banco de dados.
- O endereço atual continua funcionando até que o provedor o altere. Não há como garantir que será possível mantê-lo.
