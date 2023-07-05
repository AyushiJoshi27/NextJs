import { useRouter } from "next/router"

export default function BlogPostspage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
