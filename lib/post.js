import matter from "gray-matter";
import { marked } from "marked";
import { readdir, readFile } from "node:fs/promises";

export async function getPost(slug) {
  const text = await readFile(`./content/blog/${slug}.md`, "utf8");
  const {
    content,
    data: { title, description, image, date, author },
  } = matter(text);
  const body = marked(content);
  return { slug, title, description, date, author, image, body };
}

export async function getAllPosts() {
  const files = await readdir("./content/blog");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));

  const posts = [];

  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push(post);
  }

  return posts;
}
