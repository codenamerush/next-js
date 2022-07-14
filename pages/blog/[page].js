import { useRouter } from 'next/router'

function BlogPage() {
  const router = useRouter()
  const pageNo = router.query.page
  return <h1>Blog Page {pageNo}!</h1>;
}

export default BlogPage;
