### Mas afinal, o quê é o Supabase?

De acordo com a página do Supabase ele é uma alternativa de código aberto ao Firebase. Onde, através dele é fornecido todos os serviços necessários para criar o back-end de um produto. Fornecendo:

- Base de dados em Postgres;
- Autenticação com gerenciamento de usuários;
- Aramazenamento de arquivos; e
- Fornecimento de uma API instantânea

### Criando a base de dados no Supabase

Acesse o link `https://app.supabase.io/` e logue com sua conta do GitHub
![Página de autenticação do Supabase](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zf4xd0xg01um7r0qxm6l.png)
_Página de autenticação do Supabase_

Será solicitado que você dê autorização, clique no botão `Autorize supabase`
![Imagem contendo a página de solicitação de autorização de acesso à conta do GitHub](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3zfx4utn5llrpeo6gp5l.png)
_Imagem contendo a página de solicitação de autorização de acesso à conta do GitHub_

Feito o login, clique no botão `New project`, será solicitado que você selecione uma organização.

> Por default o Supabase cria a organização com o `usuarioGitHub's Org`

Após selecionar a organização aperecerá um formulário para que você preencha os dados do seu projeto Supabase, conforme a imagem abaixo:
![Imagem contendo o formulário de criação do projeto, com os campos Organization, Name, Database Password, Region, Princing Plan](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m91wm7su0ifvqyyus3r8.png)
_Imagem contendo o formulário de criação do projeto, com os campos Organization, Name, Database Password, Region, Princing Plan_

Preencha os campos da seguinte forma:

> **Name:** Remix Blog com Supabase
> **Database password:** _crie a senha que você quiser_ > **Region:** Para o meu caso o sistema indicou `East US (North Virgínia)` > **Princing Plan:** Free tier

Preenchido os campos, clique em `Create new project` e aguarde o Supabase acabar de criar seu projeto.

Na janela que será aberta (Project Building) você já terá algumas informações importantes do seu projeto, como Project API Keys e Project Configuration, as quais não iremos utilizar agora.

### Criando a nossa tabela do Blog

O Dashboard do Supabase possui um menu lateral onde ficam os links que irão direcionar para os serviços que são disponibilizados:
![Imagem do menu lateral do Supabase, contendo Home, Table Editor Authentication, Storage, SQL Editor, Database, Reports, API e Settings](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8icasro4aiah7jvvg9aw.png)
_Imagem do menu lateral do Supabase, contendo Home, Table Editor Authentication, Storage, SQL Editor, Database, Reports, API e Settings_

Clique no menu `Table editor` e depois em `Create new table`. No formulário que será aberto preencha com:

> **Name:** posts
> **Description:** Posts do nosso Blog

E adicione as colunas abaixo clicando em `add column`:

> Particularmente, eu gosto de adicionar sufixos aos nomes dos campos das minhas tabelas. É um gosto pessoal, pois acho mais descritivo. Você é livre para criar os campos com os nomes da forma que você quiser ;)

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

A partir de agora já estamos quase prontos para iniciar o nosso CRUD.

### Instalando o Supabase no nosso projeto

Vá até a pasta raiz do projeto, onde o `remix-supabase` foi criado e rode o comando:

```
npm i -E @supabase/supabase-js
```

Este comando instalará o cliente do supabase na nossa aplicação.

Na parte 03 iremos criar o nosso cliente Supabase na nossa aplicação. Te vejo lá! 😉
