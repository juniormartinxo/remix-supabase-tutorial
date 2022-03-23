Nesta parte iremos ver o quanto é fácil trabalhar com formulários no Remix, mas antes vamos melhorar nossa estrutura de arquivos, siga os seguintes passos:

### Criando o modelo
Nas partes anteriores deste tutorial nós criamos a `PostModel` nos arquivos onde ele era necessário, mas agora iremos deixá-lo em lugar onde "quem precisar" na aplicação possa usá-lo, portanto, crie o arquivo `posts.model.ts` dentro da passta `routes/models/`, de forma que ele fique assim: `routes/models/posts.model.ts`.

### Criando a API
Criado o modelo, podemos agora criar a API, que armazenará todas as ações que permitirão executar nosso CRUD, para isto, crie o arquivo `supabase-api.ts` dentro do diretório `routes/api/`, de forma que fique assim: `routes/api/supabase-api.ts`.

1) Edite o arquivo `supabase-api.ts` e import o `PostsModels` e o cliente `supabase`, deixando-o assim:

```ts
import { PostsModel } from '~/models/posts.model'
import { supabase } from '~/utils/supabase-client.server'
```

2) Ainda no `supabase-api.ts`. crie a função `getPosts`, que ficará encarregada de realizar um `select` no Supabase para nós.

```ts
const getPosts = async () => {
  const { data: posts } = await supabase.from<PostsModel>('posts').select('*')

  return posts
}
```

3) Agora criaremos a função `addPost`, que ficará responsável por adicionar um registro novo.
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

4) Por fim, exporte as duas funcões:
```ts
export { getPosts, addPost }
```

### Criando a rota `posts`
Crie dentro da pasta `routes` um arquivo com nome `posts.tsx` e 

### O quê é o `action: ActionFunction`
O `action` é um método que faz com que o Remix entenda que quando um formulário enviar um request para determinada rota ele deverá executar este método para pegar informações que foram passadas.
