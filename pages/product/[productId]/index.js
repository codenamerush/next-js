import { useRouter } from 'next/router'

function ProductIdPage() {
  const router = useRouter()
  const productId = router.query.productId
  return <h1>Product Id {productId}!</h1>;
}

export default ProductIdPage;
