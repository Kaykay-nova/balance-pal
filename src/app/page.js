
import HomeContent from './lib/components/HomeContent';
import { getAllPosts } from '@/app/lib/posts';


export default async function Home() {
  const { posts } = await getAllPosts();
  
return <HomeContent posts={posts}/>
}
