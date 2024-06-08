'use client';

import dynamic from 'next/dynamic';
const MDXRemote = dynamic(
  () => import('next-mdx-remote').then((mod) => mod.MDXRemote),
  { ssr: false },
);

export default function Post({ source }) {
  return (
    <div>
      <MDXRemote {...source} />
    </div>
  );
}
