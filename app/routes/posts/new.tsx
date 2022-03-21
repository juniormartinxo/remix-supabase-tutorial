import { ActionFunction, redirect } from 'remix'
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
          <button type='submit'>Enviar</button>
          <br />
        </div>
      </form>
    </div>
  )
}
