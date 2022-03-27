### Introdução

Olá! Neste tutorial você aprenderá como fazer um CRUD completo usando Remix e Supabase. Iremos abordar desde a instalção da aplicação com Remix, passando pela criação de uma conta no [Supabase](https://supabase.com/), criação de tabelas e configuração para comunicação com a API até a criação de um formulário que permitirá a inserção de novos registros.

Faremos um CRUD completo com estas duas ferramentas maravilhosas e que sou suspeito de falar, mas não consigo ver você não se apaixonando ao término de passo-a-passo.

> Se você já sabe como criar um projeto com REMIX, pode pular para as próximas partes:
> [Remix :: CRUD com Supabase - Parte 01 - Criando o projeto](#) > [Remix :: CRUD com Supabase - Parte 02 - Instalando o Supabase](#) > [Remix :: CRUD com Supabase - Parte 03 - Configurando o Supabase Client no Remix](#) > [Remix :: CRUD com Supabase - Parte 04 - Arrumando a casa](#) > [Remix :: CRUD com Supabase - Parte 05 - Trabalhando com formulário](#) > [Remix :: CRUD com Supabase - Parte 06 - Testando nossa aplicação](#)

### Techs utilizadas

- [Remix](https://remix.run/)
- [Supabase](https://supabase.com/)
- [Typescript](https://docs.microsoft.com/pt-br/learn/modules/typescript-get-started/)

### Pré-requisitos

- Node.js 14 ou superior
- npm 7 ou superior
- Um editor de código de sua preferência, aqui utilizaremos o VSCode

### 1. Iniciando o projeto

O primeiro passo que iremos dar será criar nosso projeto e para isto utilizaremos o comando:

`npx create-remix@latest`

O comando iniciará o setup que criará sua aplicação Remix, deixe as respostas assim:

> Need to install the following packages:
> create-remix@latest
> Ok to proceed? (y) y
>
> ? Where would you like to create your app? (./my-remix-app): **remix-supabase**
> ? What type of app do you want to create? (Use arrow keys): **Just the bascis**
> ? Where do you want to deploy? Choose Remix if you're unsure, it's easy to change deployment targets. (Use arrow keys): **Remix App Server**
> ? TypeScript or JavaScript? (Use arrow keys): **Typescript**
> ? Do you want me to run 'npm install'? (Y/n) **Y**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vnolr4br20nl91qvjbcv.png)

Finalizada a instalação, abra o projeto criado com o editor de sua preferência:

Se assim como eu, você estiver utilizando o `VSCode`, basta digitar os comandos abaixo:

```
> cd remix-supabase
> code .
```

### 2. Testando se tudo foi criado corretamente

Para testar se sua aplicação REMIX foi criada de forma correta rode o comando:

```
npm run dev
```

Deve aparecer a seguinte mensagem no terminal:

```
> dev
> remix dev

Watching Remix app in development mode...
💿 Built in 1.4s
Remix App Server started at http://localhost:3000
```

Acesse `http://localhost:3000` e veja que existe um app Remix rodando, conforme a imagem abaixo:
![Imagem da aplicação default do REMIX, com o título "New Remix App", contendo a frase "Welcome to Remix" e abaixo três links, o primeiro (15m Quickstart Blog Tutorial) que direciona a um tutorial de como fazer um blog, o segundo (Deep Dive Jokes App Tutorial) que direciona para um tutorial de como fazer um site de piadas e o terceiro (Remix Docs) que direciona para a documentação do Remix.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ruzo1fbdrzzmmwzw8z8h.png)
_Imagem da aplicação default do REMIX, com o título "New Remix App", contendo a frase "Welcome to Remix" e abaixo três links, o primeiro (15m Quickstart Blog Tutorial) que direciona a um tutorial de como fazer um blog, o segundo (Deep Dive Jokes App Tutorial) que direciona para um tutorial de como fazer um site de piadas e o terceiro (Remix Docs) que direciona para a documentação do Remix._

### 3. Estrutura do projeto Remix

O Remix criará várias pastas no seu projeto, mas a mais importante e que iremos trabalhar será a pasta `app`, que é onde toda a mágica acontece. Dentro da pasta `app` você encontrará a pasta `routes`, que é onde ficam as rotas da nossa aplicação. A pasta `routes` é primoridal, pois ela é o cerne de tudo e é nela que toda simplicidade do Remix ganha força.

![A imagem traz a estrutura das pastas principais do Remix listadas em: .cache, app>routes, build, node_modules e public](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nq9beep32cxm29qrqlol.png)
_A imagem traz a estrutura das pastas principais do Remix listadas em: .cache, app>routes, build, node_modules e public e os arquivos .eslintrc, .gitignore, package-lock.json, package.json, README[dot]md, remix.config.js, remix.env.d.ts e tsconfig.json_

Na parte 02 criaremos a nossa base de dados no Supabase e faremos a instalaremos o `supabase-js` na nossa aplicação. Te vejo lá! 😉
