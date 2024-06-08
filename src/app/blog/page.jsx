import Link from 'next/link';
import { getAllPosts } from '@/app/lib/posts';
import '../../app/style.css';

export default async function Blog() {
  const posts = await getAllPosts();

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
      <div className="blog-list">
        <h2 id="scroll" className="blog__title">
          Články
        </h2>
        <ul>
          {posts.map((post) => (
            <li className="blog-list__post" key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <div className="blog-list__post">
                  <span className="blog-list__post--cover"></span>
                  <p className="blog-list__post--title">{post.data.title}</p>
                  <span className="blog__arrow">&raquo;</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {/* <div className="blog-list__post">
          <span className="blog-list__post--cover"></span>
          <p className="blog-list__post--title">
            Jak se vyjádřit a stanovit si hranice, aniž byste ublížili ostatním.
          </p>
          <a className="blog__arrow" href="./post.html">
            &raquo;
          </a>
        </div>
        <div className="blog-list__post">
          <span className="blog-list__post--cover"></span>
          <p className="blog-list__post--title">
            Jak se vyjádřit a stanovit si hranice, aniž byste ublížili ostatním.
          </p>
          <a className="blog__arrow" href="./post.html">
            &raquo;
          </a>
        </div>
        <div className="blog-list__post">
          <span className="blog-list__post--cover"></span>
          <p className="blog-list__post--title">
            Jak se vyjádřit a stanovit si hranice, aniž byste ublížili ostatním.
          </p>
          <a className="blog__arrow" href="./post.html">
            &raquo;
          </a>
        </div>
        <div className="blog-list__post">
          <span className="blog-list__post--cover"></span>
          <p className="blog-list__post--title">
            Jak se vyjádřit a stanovit si hranice, aniž byste ublížili ostatním.
          </p>
          <a className="blog__arrow" href="./post.html">
            &raquo;
          </a>
        </div>
        <div className="blog-list__post">
          <span className="blog-list__post--cover"></span>
          <p className="blog-list__post--title">
            Jak se vyjádřit a stanovit si hranice, aniž byste ublížili ostatním.
          </p>
          <a className="blog__arrow" href="./post.html">
            &raquo;
          </a>
        </div> */}
      </div>
      <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#" className="pag-active">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">&raquo;</a>
      </div>
    </main>
  );
}
