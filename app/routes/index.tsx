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
  const { data: posts } = await supabase.from<PostsModel>('posts').select('*')

  return posts
}

export default function Index() {
  const posts = useLoaderData<PostsModel[]>()

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Blog Remix com Supabase</h1>
      <p>
        <a href='/insert'>Inserir</a>
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
