import Link from 'next/link';
import '../../app/style.css';

export default function Contact() {
  return (
    <main>
       <div class="contact__container">
        <aside class="contact__aside--panel">
          <Link href="/contact/kristyna" class="contact__person">
            <div class="contact__person--card">
              <img src="/img/prince-akachi-J1OScm_uHUQ-unsplash.jpg" alt="Foto Kristýna"/>
              <h3>Kristýna</h3>
            </div>
          </Link>
          <Link href="/contact/paty" class="contact__person">
            <div class="contact__person--card paty">
              <h3 class="contact__paty">Páťa</h3>
              <img src="/img/prince-akachi-J1OScm_uHUQ-unsplash.jpg" alt="Foto Páťa"/>
            </div>
          </Link>
        </aside>
        <div class="contact__main-content">
          <h1>O nás</h1>
          <p>Jsme tým nadšených tvůrkyň, které se rozhodly spojit své síly a vytvořit tento projekt.</p>
          <p>Jak to všechno začalo?</p>
          <p>Tento projekt vznikl jako součást vzdělávacího kurzu Digitální akademie u Czechitas. Naše myšlenka byla jednoduchá: využít schopnosti, které jsme se naučily během kurzu, a vytvořit něco, co bude užitečné a zábavné.</p>
          <p>Díky patří i našim mentorům!</p>
          <p>Nemohly bychom to dokázat bez podpory našich skvělých mentorů z digitální akademie. Děkujeme za jejich trpělivost, inspiraci a cenné rady! 🙌</p>
          <p>Pokud vás zajímá více informací o autorkách, rozklikněte naše medailonky.</p>
        </div>
       </div>
      </main>
  );
}
