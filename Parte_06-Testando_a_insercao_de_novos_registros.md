Nesta parte iremos testar se o nosso formulário já esta funcionando.

Vamos editar novamente o arquivo `index.tsx` e colocar o nosso menu que irá para área de postagens, onde iremos visualizar e inserir novas postagens

### Re-editando o arquivo `index.tsx`

Abra seu arquivo `routes/index.tsx`, apague os `imports` e importe apenas o componente `Link` do Remix:

```ts
import { Link } from 'remix'
```

Agora edite o componente `Index`, deixando-o assim:

```ts
export default function Index() {
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
          <Link
            to={'posts'}
            style={{
              textDecoration: 'none',
              backgroundColor: '#ef62df',
              color: '#fff',
              padding: '8px',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            Visualizar Posts
          </Link>
        </li>
      </ul>
    </div>
  )
}
```

Por último, vamos adicionar um componente `ErrorBoundary` para "capturar" os erros na `Index` de forma que não quebre o resto da aplicação.

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

### Testando a aplicação

Finalmente estamos prontos para testar a nossa aplicação, para isto rode com `npm run dev` e se tudo deu certo você verá no navegador algo parecido com a imagem abaixo:
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0yoo4w1wb91xkyx6hsxz.png)
Clique no link `Visualizar Posts` e você será direcionado para a página de visulização, que também será nossa página de inseração de novos posts.

A página que será aberta deve ser algo parecido com a imagem abaixo:
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1jzxaq8rte5w9biimruu.png)
Clique no botão `Novo` e reparece que o formulário abrirá logoa acima da visualização dos posts e isto se deve a mágica do componente `<Outlet/>` que inserimo lá na parte 05 enquanto estávamos editando o componente `Posts`.

Agora, para ter certeza que tudo está funcionando, clique em novo, preencha todos os dados e depois clique em `enviar`. SDe tudo deu certo até aqui, um novo post aparecerá abaixo dos botões `Home`e `Novo`.

Com isto finalizamos esta primeira parte do tutprial, nos próximos faremos a edição e exclusão dos registros.
