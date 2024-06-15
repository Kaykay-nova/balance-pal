'use client';
import Link from 'next/link';
import './style.css';

const ArticleActions = ({ currentIndex, posts }) => {
  const prevSlug = posts[currentIndex - 1]?.slug;
  const nextSlug = posts[currentIndex + 1]?.slug;

  return (
    <div className="post__buttons">
      {prevSlug ? (
        <Link href={`/posts/${prevSlug}`} className="post__buttons--btn">
          &laquo; <span className='btn__text'>Předchozí</span>
        </Link>
      ) : (
        <div />
      )}

      {currentIndex === posts.length - 1 ? (
        <Link href="/blog" className="post__buttons--btn">
          Všechny články
        </Link>
      ) : (
        <Link href={`/posts/${nextSlug}`} className="post__buttons--btn">
          <span className='btn__text'>Další</span> &raquo;
        </Link>
      )}
    </div>
  );
};

export default ArticleActions;
