> Se você já sabe como criar um projeto com REMIX, aconselho pular para as próximas partes:
>
> - [Parte 01 - Criando o projeto](#)
> - [Parte 02 - Instalando e configurando SUPABASE](#)

### Techs utilizadas

- [Remix](https://remix.run/)
- [Supabase](https://supabase.com/)

### Pré-requisitos

- Node.js 14 ou superior
- npm 7 ou superior
- Um editor de código de sua preferência, aqui utilizaremos o VSCode

### 1. Iniciando o projeto

O primeiro passo que iremos dar é criar nosso projeto e para isto utilizaremos o comando:

`npx create-remix@latest`

Rodando o comando, iniciará o setup que criará sua aplicação Remix, deixe as respostas assim:

> Se for sua primeira instalação ou caso o pacote do REMIX esteja desatualizado, a primeira pergunta será:

```
Need to install the following packages:
  create-remix@latest
Ok to proceed? (y) y
```

Caso contrário, o setup irá começar com a pergunta de qual lugar você irá criar o projeto.

Crie seu projeto:

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

Acesse `http://localhost:3000` e veja que existe uma app remix rodando, conforme a imagem abaixo:
![Imagem da aplicação default do REMIX, com o título "New Remix App", contendo a frase "Welcome to Remix" e abaixo três links, o primeiro (15m Quickstart Blog Tutorial) que direciona a um tutorial de como fazer um blog, o segundo (Deep Dive Jokes App Tutorial) que direciona para um tutorial de como fazer um site de piadas e o terceiro (Remix Docs) que direciona para a documentação do Remix.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ruzo1fbdrzzmmwzw8z8h.png)
_Imagem da aplicação default do REMIX, com o título "New Remix App", contendo a frase "Welcome to Remix" e abaixo três links, o primeiro (15m Quickstart Blog Tutorial) que direciona a um tutorial de como fazer um blog, o segundo (Deep Dive Jokes App Tutorial) que direciona para um tutorial de como fazer um site de piadas e o terceiro (Remix Docs) que direciona para a documentação do Remix._

### 3. Estrutura do projeto Remix

O Remix criará várias pastas no seu projeto, mas a mais importante e que iremos trabalhar será a pasta `app`, que é onde toda a mágica acontece. Dentro da pasta `app` haverá a pasta `routes`, que é onde ficam as rotas da nossa aplicação. A pasta `routes` é primoridal, pois ela é cerne de tudo é nela que toda simplicidade do Remix ganha força.

![A imagem traz a estrutura das pastas principais do Remix listadas em: .cache, app>routes, build, node_modules e public](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nq9beep32cxm29qrqlol.png)
_A imagem traz a estrutura das pastas principais do Remix listadas em: .cache, app>routes, build, node_modules e public_

Na parte 02 instaleremos criaremos a nossa base de dados Supabase na nossa aplicação e instalaremos ele na nossa aplicação. Te vejo lá! 😉
