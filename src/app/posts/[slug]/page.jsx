import { getPostBySlug, getPostSlugs } from '@/app/lib/posts';
import Post from '@/app/lib/components/Post';
import { serialize } from 'next-mdx-remote/serialize';

// Funkce pro generování statických cest pro příspěvky
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, '') }));
}

// Funkce pro generování metadat pro příspěvky
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  return { title: post.data.title };
}

// Komponenta pro zobrazení příspěvku
export default async function PostPage({ params }) {
  const post = getPostBySlug(params.slug);
  const mdxSource = await serialize(post.content, { scope: post.data });
  return <Post source={mdxSource} />;
}
