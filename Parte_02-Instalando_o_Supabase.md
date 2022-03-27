### Introdução

Nesta parte do tutorial daremos início a configuração da nossa base de dados na página do [Supabase](https://supabase.com) e nos final faremos a instalação do [`supabase-js`](https://www.npmjs.com/package/@supabase/supabase-js).

### Mas afinal, o quê é o Supabase?

De acordo com a própria página do Supabase ele é uma alternativa de código aberto ao Firebase. Onde, através dele é fornecido todos os serviços necessários para criar o back-end de um produto. Fornecendo:

- Base de dados em Postgres;
- Autenticação com gerenciamento de usuários;
- Aramazenamento de arquivos; e
- Fornecimento de uma API instantânea

### Criando a base de dados no Supabase

Acesse o link [`https://app.supabase.io/`](https://app.supabase.io/) e logue com sua conta do GitHub clicando no botão `Sign In with GitHub`, conforme a imagem abaixo:
![Página de autenticação do Supabase com o título "Give Your Database Superpowers" e abaixo a inscrição "Create a backend in less than 2 minutes. Start your project with a Postgres Datase, Authentication, instant APIs, and realtime subscriptions." com dois botões abaixo um ao lado do outro, sendo que o do lado esquerdo é verde e contem o logo do GiHub e a inscrição "Sign in with GitHub" e o do esquerdo é preto com a inscrição "Docs"](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zf4xd0xg01um7r0qxm6l.png)

Será solicitado que você dê autorização, clique no botão `Autorize supabase`, conforme a imagem abaixo:
![Imagem contendo a página de solicitação de autorização de acesso à conta do GitHub. No topo estão lateralizados os logotipos do Supabase, um raio verde, e o do GitHub, um gato. Do lado esquerdo está o logo do Supabase, que está inseiro em um círculo preto, já do lado direito está o logo do GitHub inserido em um círculo cinza. Os logos estão conectados por uma linha tracejada em cinza, que ao centro contem um círculo verde com um ícone de `check`. Abaixo dos logotipos está o título "Authorize Supabase" e delimitados por um quadrado preto temos as inscrições "Supabase by supabase", na linha debaixo "wants to access your junior4martins account", na linha debaixo um pouco mais afastado a inscrição "Personal user data", na linha debaixo "Email addresses (read-only)"" e abaixo temos lateralizados os botões "cancel", do lado esquerdo e na cor preta e "Authorize supabase" na cor verde e do lado direito. Abaixo dos botões temos a incrição "Authorizing will redirect to" e na linha debaixo o link [https://alt.supabase.io](https://alt.supabase.io). Abaixo e fora do primeiro quadrado temos outro quadrado com três conjuntos de ícones e frase lateralizados, sendo o primeiro o ícone de proibido e ao lado a frase "Not owned or operated by GitHub", ao centro um ícone de um relógio com a frase "Created 4 months ago" e por último o ícone de um prédio com a frase "More tha 1k GitHub users" e abaixo a frase "Learn more about OAuth".](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3zfx4utn5llrpeo6gp5l.png)

Feito o login, clique no botão `New project`, será solicitado que você selecione uma organização.

> Por default o Supabase cria a organização com o `usuarioGitHub's Org`

Após selecionar a organização aperecerá um formulário para que você preencha os dados do seu projeto Supabase, conforme a imagem abaixo:
![Imagem contendo o formulário de criação do projeto, com o título "Create a new project" e descrição "Your project will have its own dedicated instance and full postgres database. An API will be set up so you can easily interact with your new database." e com os campos Organization, Name, Database Password, Region, Princing Plan. No final do fomulário temos dois botões, sendo que do lado esquedo, na cor preta está o botçao "cancel" e do lado direito, antecipado pela frase "You can rename your project later" está um botão verde com a inscrição "Create new project"](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m91wm7su0ifvqyyus3r8.png)

Preencha os campos do formulário da seguinte forma:

> **Name:** Remix Blog com Supabase
> **Database password:** _crie a senha que você quiser_ > **Region:** Para o meu caso o sistema indicou `East US (North Virgínia)` > **Princing Plan:** Free tier

Preenchido os campos, clique em `Create new project` e aguarde o Supabase acabar de criar seu projeto.

Na janela que será aberta (Project Building) você já terá algumas informações importantes do seu projeto, como Project API Keys e Project Configuration, as quais não iremos utilizar agora.

### Criando a nossa tabela do Blog

O Dashboard do Supabase possui um menu lateral onde ficam os links que irão direcionar para os serviços que são disponibilizados:
![Imagem do menu lateral do Supabase, contendo Home, Table Editor Authentication, Storage, SQL Editor, Database, Reports, API e Settings](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8icasro4aiah7jvvg9aw.png)

Clique no menu `Table editor` e depois em `Create new table`. No formulário que será aberto preencha com:

> **Name:** posts
> **Description:** Posts do nosso Blog

E adicione as colunas abaixo clicando em `add column`:
_Particularmente, eu gosto de adicionar sufixos aos nomes dos campos das minhas tabelas. É um gosto pessoal, pois acho mais descritivo. Você é livre para criar os campos com os nomes da forma que você quiser._ 😉

#### A tabela `posts` ficará assim:

| name            | type        | Default value      | Primary |
| --------------- | ----------- | ------------------ | ------- |
| post_id         | int8        |                    | checked |
| post_uuid       | uuid        | uuid_generate_v4() |         |
| post_author     | text        |                    |         |
| post_title      | text        |                    |         |
| post_text       | text        |                    |         |
| post_situation  | varchar     | A                  |         |
| post_created_at | timestamptz | now()              |         |

Adicionados os campos, clique em `create`. Se tudo estiver corrido bem a tabela `posts` aparecerá em `Table editor`.

### Instalando o Supabase no nosso projeto

Vá até a pasta raiz do projeto, onde o `remix-supabase` foi criado e rode o comando:

```
npm i -E @supabase/supabase-js
```

Este comando instalará o cliente do supabase na nossa aplicação.

Na parte 03 iremos criar o nosso cliente Supabase na nossa aplicação. Te vejo lá! 😉
