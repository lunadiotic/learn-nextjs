import Heading from "@/components/Heading";

import { readFile } from "node:fs/promises";

export default async function PostPage() {
  const text = await readFile("./content/blog/belajar-nextjs.md", "utf8");

  return (
    <>
      <Heading>Belajar Next.js</Heading>
      <img
        src="/images/image-1.jpg"
        alt=""
        width={640}
        height={360}
        className="mb-2 rounded"
      />
      <p>{text}</p>
    </>
  );
}
