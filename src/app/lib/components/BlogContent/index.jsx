'use client';
import { useRef, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export const BlogContent = ({ posts, totalPages, page, pageNumber }) => {
  const lastHash = useRef();

  useEffect(() => {
    if (page !== null) {
      lastHash.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [page]);

  return (
    <main>
      <div className="main__blog">
        <div className="main__blog--cover"></div>
        <div className="main__blog--content">
          <h2 className="main__blog--title">Vítejte na našem blogu!</h2>
          <p className="main__blog--text">
            “Každý den čelíme různým výzvám, ať už jde o pracovní povinnosti,
            rodinné záležitosti nebo osobní cíle. Je důležité se zamyslet nad
            tím, jak efektivně spravovat svůj čas, jak se vyhnout vyhoření a jak
            pečovat o své duševní zdraví. Na našem blogu najdete užitečné články
            a tipy, které vám pomohou dosáhnout harmonie mezi prací a osobním
            životem.”
          </p>
        </div>
        <Link href="#scroll" className="scroll-btn">
          &dArr;
        </Link>
      </div>
      <h2 ref={lastHash} id="scroll" className="blog__title">
        Články
      </h2>

      <ul className="blog-list">
        {posts.map((post) => {
          console.log(post.data.coverImage);
          return (
            <li className="blog-list__item" key={post.slug}>
              <Link className="blog-list__post" href={`/posts/${post.slug}`}>
                <span
                  className="blog-list__post--cover"
                  style={{
                    backgroundImage: `url(${post.data.coverImage})`,
                  }}
                ></span>
                <p className="blog-list__post--title">{post.data.title}</p>
                <span className="blog__arrow">&raquo;</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="pagination">
        {pageNumber > 1 && (
          <Link href={`?page=${pageNumber - 1}`}>&laquo;</Link>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <Link
            key={index + 1}
            href={`?page=${index + 1}`}
            className={pageNumber === index + 1 ? 'pag-active' : ''}
          >
            {index + 1}
          </Link>
        ))}
        {posts.length === 5 && (
          <Link href={`?page=${pageNumber + 1}`}>&raquo;</Link>
        )}
      </div>
    </main>
  );
};
