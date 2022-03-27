import { ActionFunction, Link, redirect } from 'remix'
import { supabase } from '~/utils/supabase-client.server'

export const action: ActionFunction = async ({ request }) => {
  const inputs = Object.fromEntries(await request.formData())

  await supabase.from('posts').insert([inputs])

  return redirect('.')
}

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
