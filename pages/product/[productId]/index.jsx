import React from 'react'
import { useRouter } from 'next/router'
import react from 'react'


export default function ProductDetail() {
    const router = useRouter()
    const productId = router.query.productId
  return (
    <div>
        <h1>Detail about product {productId}</h1>
    </div>
  )
}
