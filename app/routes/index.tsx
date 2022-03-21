import { Link } from 'remix'

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
          <Link to={'posts'}>Visualizar Posts</Link>
        </li>
      </ul>
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
