import { Link, LoaderFunction, Outlet, useLoaderData } from 'remix'
import { getPosts } from '~/api/supabase-api'
import { PostsModel } from '~/models/posts.model'

export const loader: LoaderFunction = async () => {
  const posts = await getPosts()

  return posts
}

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
          <a href='/'>Home</a>
        </li>
        <li>
          <Link to={'new'}>Novo</Link>
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

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className='error-container'>
      <h1>😱 App Error</h1>
      <pre>❗ {error.message}</pre>
    </div>
  )
}
