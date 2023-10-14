import Link from 'next/link'
import React from 'react'

export default function PostList({posts}) {
    console.log(posts)
  return (
    <div>
        <h1>list of post</h1>
        {
            posts.map(post => {
                return(
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                     <h1>{post.id} {post.title}</h1>
                        </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props:{
            posts: data.slice(0,5)
        }
    }
}
