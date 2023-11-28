import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";

export default async function BlogPage() {
  const posts = await getAllPosts();
  console.log(posts);
  return (
    <>
      <Heading>Blog</Heading>
      <h2 className="text-2xl mb-3">List of posts</h2>

      <PostCard
        title="Belajar Next.js"
        href="/blog/belajar-nextjs"
        image="/images/image-1.jpg"
        description="Belajar Next.js panjang"
        date="13.01.2022"
        author="Admin"
      />

      <PostCard
        title="Belajar Next.js"
        href="/blog/belajar-nextjs"
        image="/images/image-1.jpg"
        description="Belajar Next.js panjang"
        date="13.01.2022"
        author="Admin"
      />
    </>
  );
}
