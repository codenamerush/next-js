import { useRouter } from 'next/router'

function ProductReview() {
  const router = useRouter()
  const productId = router.query.productId
  const reviewId = router.query.reviewId
    return <h1>Product Review #{reviewId} for {productId}!</h1>;
  }
  
  export default ProductReview;
  