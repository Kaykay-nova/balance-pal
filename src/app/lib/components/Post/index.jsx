'use client';

import dynamic from 'next/dynamic';
import ArticleHeader from '@/app/lib/components/ArticleHeader';
import ArticleActions from '@/app/lib/components/ArticleActions';

const MDXRemote = dynamic(
  () => import('next-mdx-remote').then((mod) => mod.MDXRemote),
  { ssr: false },
);

export default function Post({ source, frontMatter }) {
  return (
    <>
      <ArticleHeader
        title={frontMatter.title}
        date={frontMatter.date}
        coverImage={frontMatter.coverImage}
      />
      <MDXRemote {...source} />
      <ArticleActions />
    </>
  );
}
