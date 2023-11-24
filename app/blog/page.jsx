import Link from "next/link";
import Heading from "@/components/Heading";

export default function BlogPage() {
  return (
    <>
      <Heading>Blog</Heading>
      <p>List of posts</p>
      <ul>
        <li>
          <Link href="/blog/belajar-nextjs">Belajar Next.js</Link>
        </li>
        <li>
          <Link href="/blog/latihan-route-nextjs">Latihan Route Next.js</Link>
        </li>
      </ul>
    </>
  );
}
