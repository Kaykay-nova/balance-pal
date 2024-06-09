import { getAllPosts } from '@/app/lib/posts';

import '../../app/style.css';
import { BlogContent } from '../lib/components/BlogContent';

export default async function Blog({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const limit = 5;
  const { posts, totalPosts } = await getAllPosts(page, limit);
  const totalPages = Math.ceil(totalPosts / limit);

  return <BlogContent posts={posts} totalPages={totalPages} page={page} />;
}
