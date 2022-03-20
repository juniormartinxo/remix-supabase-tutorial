import { LoaderFunction, useLoaderData } from 'remix'
import { supabase } from '~/utils/supabase-client.server'

type PostsModel = {
  post_id: number
  post_uuid: string
  post_author: string
  post_title: string
  post_text: string
  post_situation: string
  post_created_at: string
}

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

export default function Insert() {
  const post = useLoaderData<PostsModel>()

  return (
    <>
      <p>
        <a href='/'>Home</a>
      </p>
      <h1>Novo registro inserido</h1>
      <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
        <h3>{post.post_title}</h3>
        <p>ID: {post.post_id}</p>
        <p>UUID: {post.post_uuid}</p>
        <p>
          <small>{post.post_author}</small>
        </p>
        <blockquote>{post.post_text}</blockquote>
      </div>
    </>
  )
}
