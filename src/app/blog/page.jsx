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
      <h2 id="scroll" className="blog__title">
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
