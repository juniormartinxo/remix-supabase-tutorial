Nesta parte do tutorial verificaremos se a nossa comunicação com API do Supabase está funcionando corretamente e criaremos uma rota temporária que permitirá criar novos registros para testarmos as requisições.

### Editando o arquivo `app/index.tsx`

Neste primeiro momento iremos verificar se a nossa conexão com o Supase está funcionando e para isto editaremos o arquivo `routes/index.tsx` responsável por chamar a rota `index` da nossa aplicação.

1. Importe `LoaderFunction` e `useLoaderData` do Remix

```ts
import { LoaderFunction, useLoaderData } from 'remix'
```

##### O que é o método `loader: LoaderFunction`?

O `loader` é uma função executada em server-side e é ela que usamos no Remix para obter dados externos, portanto a usaremos para obter os registros que virão do banco de dados.

##### Que é o hook `useLoaderData`?

O `useLoaderData` é um hook provido pelo próprio Remix para ter acesso ao que é exportado pelo `loader`

2. Importe também o cliente do Supabase

```ts
import { supabase } from '~/utils/supabase-client.server'
```

3. Crie o tipo `PostsModel`, que além de tipar as nossas variáveis, vai nos ajudar muito no intelisense do VSCode.

```ts
type PostsModel = {
  post_id: number
  post_uuid: string
  post_author: string
  post_title: string
  post_text: string
  post_situation: string
  post_created_at: string
}
```

4. Agora, daremos um `select` no Supabase para carregar as informações dos registros no `loader`:

```ts
export const loader: LoaderFunction = async () => {
  const { data: posts } = await supabase
    .from<PostsModel>('posts')
    .select('*')
    .order('post_id', { ascending: false })

  return posts
}
```

5. Deixe o componente `Index` desta forma:

```ts
export default function Index() {
  const posts = useLoaderData<PostsModel[]>()

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Blog Remix com Supabase</h1>
      <p>
        <a
          href='/'
          style={{
            textDecoration: 'none',
            backgroundColor: '#ef62df',
            color: '#fff',
            padding: '8px',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        >
          Inserir
        </a>
      </p>
      <ul style={{ listStyle: 'none' }}>
        {posts?.map(post => (
          <li key={post.post_uuid}>
            <h3>{post.post_title}</h3>
            <small>{post.post_author}</small>
            <blockquote>{post.post_text}</blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

Para ver se deu certo, rode o comando `npm run dev` e você perceberá que irá aparecer apenas o título `Blog Remix com Supabase`, pois não há nenhum registro inserido na base de dados.

> Repare que foi criado um link `Inserir` logo abaixo do título `Blog Remix com Supabase`, se clicarmos nele agora seremos direcionados para uma página que não existe ainda e, inevitavelmente, receberemos um erro `404`, mas isto será resolvido nos próximos passos.

### Criando a Rota temporária `insert`

Para testar e ver se a nossa comunicação com Supabase está realmente funcionando e se nosso `loader` está trazendo as informações dos registros, faremos antes um `insert` para escrever alguns registros no Supabase, que poderão ser apagados posteriormente, então, mãos a obra.

> **Aditivo:** _Nesta parte muito código será duplicado, mas não se preocupe, por enquanto faremos funcionar pra depois deixar mais limpo._

1. Crie dentro da pasta `routes` um arquivo com o nome `insert.tsx` e faça os mesmos imports que fizemos em `index`, ou seja:

```ts
import { LoaderFunction, useLoaderData } from 'remix'
import { supabase } from '~/utils/supabase-client.server'
```

2. Da mesma forma que na `index`, crie o type `PostsModel`:

```ts
type PostsModel = {
  post_id: number
  post_uuid: string
  post_author: string
  post_title: string
  post_text: string
  post_situation: string
  post_created_at: string
}
```

3. Vamos chamar o método `loader` dando um `insert` no Supabase, desta forma:

```ts
export const loader: LoaderFunction = async () => {
  const { data } = await supabase.from('posts').insert([
    {
      post_author: 'Junior Martins',
      post_title: 'O título da sua aplicação',
      post_text:
        'Uma coisa é certa: ninguém sai vivo dessa vida.. Por que "tudo junto" se escreve separado e "separado" se escreve tudo junto?. Se tamanho fosse documento o elefante era dono do circo.. Não concordo nem discordo, muito pelo contrário. Em rio de piranhas, jacaré nada de costas. Um é pouco, dois é bom e três é ímpar. Um é pouco, dois é bom e três é ímpar. O sonho não acabou. E ainda temos pão doce, maria-mole e queijadinha. Uma coisa é uma coisa, outra coisa é outra coisa.',
    },
  ])

  return data?.[0]
}
```

> **Aditivo:** _Você pode alterar o valor de `post_author`, `post_title` e `post_text` dentro do método `loader` para diferenciar os registros._

4. Crie o componente `Insert`:

```ts
export default function Insert() {
  const post = useLoaderData<PostsModel>()

  return (
    <>
      <h1>Novo registro inserido</h1>
      <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
        <h3>{post.post_title}</h3>
        <p>
          <small>{post.post_author}</small>
        </p>
        <blockquote>{post.post_text}</blockquote>
      </div>
    </>
  )
}
```

Para finalizar, inicie sua aplicação e clique no link `inserir` você irá visualizar uma mensagem informando que um novo registro foi inserido e logo abaixo os dados que foram inseridos. Clique agora em `Home` e irá ver que o nosso novo post foi listado, faça este processo algumas vezes pra ver que realmente um novo registro está sendo inserido.

Na parte 05, iremos melhorar o código e criar um formulário para fazer esta inserção com dados que a gente definir. Te vejo lá! 😉
