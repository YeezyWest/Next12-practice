import React from 'react'
import { useRouter } from 'next/router'

export default function ProductReview() {
    const router = useRouter()
    const {productId, reviewId} = router.query
  return (
    <div>
        <h1>Review page {productId} and review {reviewId} </h1>
    </div>
  )
}
