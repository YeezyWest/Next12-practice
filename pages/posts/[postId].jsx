import React from 'react'

export default function Post({post}) {
  return (
  <>
    <div>Post</div>
    <h1>{post.id} {post.title}</h1>
    <h1>{post.body}</h1>
  </>
  )
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    return{
        props: {
            post: data,
        },
    }
}