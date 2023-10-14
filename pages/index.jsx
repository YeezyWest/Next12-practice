import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Home() {
  const router = useRouter()
  const handleClick = ()=> {
    console.log("Order Made")
    router.push("/product")
  }
  return (
    <div>
     <h1>Home</h1> 
      <Link href="/blog"> 
      <a>Blog</a>
      </Link>
      <Link href="/product"> 
      <a>Product</a>
      </Link>
      <button onClick={handleClick}>
        Place order
      </button>
      <Link href="/user"> 
      <a>Users</a>
      </Link>
      <Link href="/posts"> 
      <a>Post</a>
      </Link>
      </div>
  )
}
