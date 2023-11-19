import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <h1>Blog</h1>
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
