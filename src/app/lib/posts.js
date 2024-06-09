import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'src/content');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { data, content, slug: realSlug };
}

export async function getAllPosts(page = 1, limit = 5) {
  const slugs = getPostSlugs();
  const totalPosts = slugs.length;
  const start = (page - 1) * limit;
  const end = page * limit;
  const paginatedSlugs = slugs.slice(start, end);

  const posts = paginatedSlugs.map((slug) => getPostBySlug(slug));

  const mdxPosts = await Promise.all(
    posts.map(async (post) => {
      const mdxSource = await serialize(post.content, { scope: post.data });
      return {
        ...post,
        mdxSource,
      };
    }),
  );

  return { posts: mdxPosts, totalPosts };
}
