'use client';

import dynamic from 'next/dynamic';
import ArticleHeader from '@/app/lib/components/ArticleHeader';
import ArticleActions from '@/app/lib/components/ArticleActions';
import { usePathname } from 'next/navigation';

const MDXRemote = dynamic(
  () => import('next-mdx-remote').then((mod) => mod.MDXRemote),
  { ssr: false },
);

export default function Post({ posts, source, frontMatter }) {
  const pathName = usePathname();

  const currentIndex = posts.findIndex((post) => {
    return `/posts/${post.slug}` === pathName;
  });

  return (
    <>
      <ArticleHeader
        title={frontMatter.title}
        date={frontMatter.date}
        coverImage={frontMatter.coverImage}
      />
      <MDXRemote {...source} />
      <ArticleActions currentIndex={currentIndex} posts={posts} />
    </>
  );
}
