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
      post_title: 'Título do novo Post',
      post_text: 'Um texto qualquer',
    },
  ])

  return data
}

export default function Index() {
  const post = useLoaderData<PostsModel>()

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>{post.post_title}</h1>

      <p>
        <small>{post.post_author}</small>
      </p>
      <p>{post.post_text}</p>
    </div>
  )
}
