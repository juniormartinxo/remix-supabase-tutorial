import { PostsModel } from '~/models/posts.model'
import { supabase } from '~/utils/supabase-client.server'

const getPosts = async () => {
  const { data: posts } = await supabase
    .from<PostsModel>('posts')
    .select('*')
    .order('post_id', { ascending: false })

  return posts
}

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

export { getPosts, addPost }
