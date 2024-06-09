import Link from 'next/link';
import '../../app/style.css';

export default function Contact() {
  return (
    <main>
      <div className="contact__container">
        <aside className="contact__aside--panel">
          <Link href="/contact/kristyna" className="contact__person">
            <div className="contact__person--card">
              <img
                src="/img/prince-akachi-J1OScm_uHUQ-unsplash.jpg"
                alt="Foto Kristýna"
              />
              <h3>Kristýna</h3>
            </div>
          </Link>
          <Link href="/contact/patricie" className="contact__person">
            <div className="contact__person--card paty">
              <h3 className="contact__paty">Páťa</h3>
              <img
                src="/img/patricie-vyhlidalova.jpg"
                alt="Foto Páťa"
              />
            </div>
          </Link>
        </aside>
        <div className="contact__main-content">
          <h1>O nás</h1>
          <p>
            Jsme tým nadšených tvůrkyň, které se rozhodly spojit své síly a
            vytvořit tento projekt.
          </p>
          <p>Jak to všechno začalo?</p>
          <p>
            Tento projekt vznikl jako součást vzdělávacího kurzu Digitální
            akademie u Czechitas. Naše myšlenka byla jednoduchá: využít
            schopnosti, které jsme se naučily během kurzu, a vytvořit něco, co
            bude užitečné a zábavné.
          </p>
          <p>Díky patří i našim mentorům!</p>
          <p>
            Nemohly bychom to dokázat bez podpory našich skvělých mentorů z
            digitální akademie. Děkujeme za jejich trpělivost, inspiraci a cenné
            rady! 🙌
          </p>
          <p>
            Pokud vás zajímá více informací o autorkách, rozklikněte naše
            medailonky.
          </p>
        </div>
      </div>
    </main>
  );
}
