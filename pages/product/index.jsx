import Link from 'next/link'
import React from 'react'

export default function ProductList() {
  return (
    <div>
      <Link href="/">
      <a>Home</a>
      </Link>
       <Link href="/product/1" >
       <h1>
        Product 1
       </h1>
       </Link>
        <h1>Product 2</h1>
        <h1>Product 3</h1>
    </div>
  )
}
