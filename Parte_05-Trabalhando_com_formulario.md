Nesta parte veremos o quanto é fácil trabalhar com formulários no Remix, iremos melhorar nossa estrutura de arquivos, colocando as coisas nos lugares certos para evitar código duplicado e permitir assim o reaproveitamento na nossa aplicação.

### 🎲 Criando o modelo

Nas partes anteriores deste tutorial nós criamos a `PostModel` nos arquivos onde ele era necessário, mas agora iremos deixá-lo em lugar onde "quem precisar" na aplicação possa usá-lo, portanto, crie o arquivo `posts.model.ts` dentro da pasta `app/models/`, de forma que ele fique assim: `app/models/posts.model.ts`. Edite-o e deixe desta forma:

```ts
export type PostsModel = {
  post_id?: number
  post_uuid?: string
  post_author: string
  post_title: string
  post_text: string
  post_situation?: string
  post_created_at?: string
}
```

### Criando a API

Criado o modelo, podemos agora trabalhar com a API, que armazenará todas as ações que permitirão executar nosso CRUD, para isto, crie o arquivo `supabase-api.ts` dentro do diretório `app/api/`, de forma que fique assim: `app/api/supabase-api.ts`.

1. Edite o arquivo `supabase-api.ts` e import o `PostsModels` e o cliente `supabase`, deixando-o assim:

```ts
import { PostsModel } from '~/models/posts.model'
import { supabase } from '~/utils/supabase-client.server'
```

2. Ainda no `supabase-api.ts`. crie a função `getPosts`, que ficará encarregada de realizar um `select` no Supabase para nós.

```ts
const getPosts = async () => {
  const { data: posts } = await supabase
    .from<PostsModel>('posts')
    .select('*')
    .order('post_id', { ascending: false })

  return posts
}
```

3. Agora criaremos a função `addPost`, que ficará responsável por adicionar um registro novo.

```ts
const addPost = async ({ post_author, post_title, post_text }: PostsModel) => {
  const { data, error } = await supabase.from<PostsModel>('posts').insert([
    {
      post_author: post_author,
      post_title: post_title,
      post_text: post_text,
    },
  ])

  return { data, error }
}
```

4. Por fim, exporte as duas funcões:

```ts
export { getPosts, addPost }
```

### Criando a rota `posts`

Crie dentro da pasta `routes` um arquivo com nome `posts.tsx` e dentro dele faça os seguintes imports:

```ts
import { Link, LoaderFunction, Outlet, useLoaderData } from 'remix'
import { getPosts } from '~/api/supabase-api'
import { PostsModel } from '~/models/posts.model'
```

- `Link` para criarmos o link que irá chamará o formulário para iserir um novo registro;
- `LoaderFunction` para tiparmos o método `loader` que ficará responsável por chamar a função `getPosts`, que carrega os registros do banco de dados;
- `useLoaderData` permite façamos o uso dos dados carregados pelo `loader`;
- `Outlet`, este componente é um wrapper em torno do Outlet do React Router com a capacidade de passar o estado da interface do usuário para rotas aninhadas. Ou seja, com ele será possível carregar a rota filha que conterá o fomulário dentro da rota pai `posts.tsx`;
- `getPosts` é a função que carrega os registros do banco de dados; e
- `postModels` é o `type model` dos dados que virão do banco de dados.

Feito as importações criaremos o método `loader` para chamar a `getPosts`:

```ts
export const loader: LoaderFunction = async () => {
  const posts = await getPosts()

  return posts
}
```

Agora iremos criar nosso componente `Posts`:

```ts
export default function Posts() {
  const posts = useLoaderData<PostsModel[]>()

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Blog Remix com Supabase</h1>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
        }}
      >
        <li>
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
            Home
          </a>
        </li>
        <li>
          <Link
            to={'new'}
            style={{
              textDecoration: 'none',
              backgroundColor: '#62efd0',
              color: '#0d6443',
              padding: '8px',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            Novo
          </Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
      <div>
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
    </div>
  )
}
```

E, por fim, chamaremos a função `ErrorBoundary` do Remix, a qual permite que os erros sejam capturados dentro da rota que foi chamada, evitando assim que toda a aplicaçãose quebre:

```ts
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className='error-container'>
      <h1>😱 App Error</h1>
      <pre>❗ {error.message}</pre>
    </div>
  )
}
```

### Criando a página do fomulário

Criado a página de listagem dos posts, iremos criar a página que conterá o fomulário que permitirá que a gente insira novos registros, para isto crie a pasta `posts` dentro de `routes`, de forma que fique `routes/posts`. Dentro da pasta `posts` crie o arquivo `new.tsx` e faça as seguintes imports:

```ts
import { ActionFunction, Link, redirect } from 'remix'
import { supabase } from '~/utils/supabase-client.server'
```

- `ActionFunction` para tiparmos o método do Remix chamado `action` que é reponsável por "capturar" as variáveis enviadas pelo fomulário. Na verdade `action` pega todas varáveis de qualquer `request` na rota onde ele está.
- `redirect` permite que a rota seja redirecionada
- `supabase` é o nosso cliente do Supabase

Feito os `imports`, chamaremos o método `action`:

```ts
export const action: ActionFunction = async ({ request }) => {
  const inputs = Object.fromEntries(await request.formData())

  await supabase.from('posts').insert([inputs])

  return redirect('.')
}
```

Agora criaremos o componente `NewPost` que conterá nosso formulário:

```ts
export default function NewPost() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Novo post</h1>
      <form
        action='#'
        method='post'
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <div>
          <label htmlFor=''>Título</label>
          <br />
          <input type='text' name='post_title' />
        </div>
        <div>
          <label htmlFor=''>Autor</label>
          <br />
          <input type='text' name='post_author' />
        </div>
        <div>
          <label htmlFor=''>Texto</label>
          <br />
          <textarea
            name='post_text'
            id='post_text'
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <div>
          <button
            type='submit'
            style={{
              backgroundColor: '#62a4ef',
              color: '#fff',
              padding: '8px',
              borderRadius: '4px',
              border: 'none',
              lineHeight: '1.4',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            Enviar
          </button>
          <Link
            to={'/posts'}
            style={{
              marginLeft: '10px',
              textDecoration: 'none',
              backgroundColor: '#ef62df',
              color: '#fff',
              padding: '8px',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            Cancelar
          </Link>
          <br />
        </div>
      </form>
    </div>
  )
}
```

Com isto finalizamos o formulário e na parte 06 iremos criar nosso primeiro post através do formulário criado. Te espero lá! 😉
