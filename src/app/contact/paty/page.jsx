import Link from 'next/link';
import '@/app/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function ContactPerson() {
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
          <div class="contact__btn">
            <Link class="btn" href="/contact">&laquo; Zpět</Link> 
            <Link href="/contact/kristyna" class="btn">Druhá autorka &raquo;</Link>
          </div>
          <div class="contact__header">
            <h1>Patricie Vyhlídalová</h1>
            <div class="contact__social">
                <div class="footer__social-icons">
                    <Link href="mailto:#" target="_blank" class="footer__icon"><FontAwesomeIcon
                    className="footer__icon"
                    icon={faEnvelope}
                  /></Link>
                    <Link href="#" target="_blank" class="footer__icon"><FontAwesomeIcon
                    className="footer__icon"
                    icon={faGithub}
                  /></Link>
                    <Link href="#" target="_blank" class="footer__icon"><FontAwesomeIcon
                    className="footer__icon"
                    icon={faLinkedin}
                  /></Link>
                </div>
            </div>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
       </div>
    </main>
  );
}
