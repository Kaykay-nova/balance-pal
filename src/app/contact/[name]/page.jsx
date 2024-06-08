'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const contacts = {
  kristyna: {
    title: 'Kristýna Konečná',
    description: 'TODO: Týna description',
    link: '/contact/patricie',
  },
  patricie: {
    title: 'Patricie Vyhlídalová',
    description: 'TODO: Paty description',
    link: '/contact/kristyna',
  },
};

const ContactDetail = () => {
  const params = useParams();
  const { name } = params;

  const contact = contacts[name];

  if (!contact) {
    return <p>Kontakt nenalezen</p>;
  }

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
                src="/img/prince-akachi-J1OScm_uHUQ-unsplash.jpg"
                alt="Foto Páťa"
              />
            </div>
          </Link>
        </aside>
        <div className="contact__main-content">
          <div className="contact__btn">
            <Link className="btn" href="/contact">
              &laquo; Zpět
            </Link>
            <Link href={contact.link} className="btn">
              Druhá autorka &raquo;
            </Link>
          </div>
          <div className="contact__header">
            <h1>{contact.title}</h1>
            <div className="contact__social">
              <div className="footer__social-icons">
                <Link href="mailto:#" target="_blank" className="footer__icon">
                  <FontAwesomeIcon className="footer__icon" icon={faEnvelope} />
                </Link>
                <Link href="#" target="_blank" className="footer__icon">
                  <FontAwesomeIcon className="footer__icon" icon={faGithub} />
                </Link>
                <Link href="#" target="_blank" className="footer__icon">
                  <FontAwesomeIcon className="footer__icon" icon={faLinkedin} />
                </Link>
              </div>
            </div>
          </div>
          <p>{contact.description}</p>
        </div>
      </div>
    </main>
  );
};

export default ContactDetail;
