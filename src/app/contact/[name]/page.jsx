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
    descriptionTitle: 'TODO: Týna úvodní věta',
    descriptionText: 'TODO: Krista text',
    link: '/contact/patricie',
    github: 'https://github.com/Kaykay-nova',
    linkedin: 'https://linkedin.com/in/kristýna-konečná-590292290',
    email: 'mailto:#',
  },
  patricie: {
    title: 'Patricie Vyhlídalová',
    descriptionTitle:
      'Předchozí práce mě naučily pečlivosti, trpělivosti a schopnosti pracovat na týmových i samostatných projektech.',
    descriptionText:
      'O obor IT se zajímám druhým rokem. Účastnila jsem se několika jednodenních a dvoudenních kurzů v rámci Czechitas, jako jsou Poznej Salesforce, Úvod do programování 1 a 2: Python, nebo Test it - testování v praxi. Na podzim roku 2023 jsem se rozhodla zaměřit na frontend, a proto jsem absolvovala semestrální kurz JavaScript 1, po kterém následovala Digitální Akademie: WEB, kterou jsem úspěšně dokončila v červnu 2024. I když vím, že to bude vyžadovat ještě spoustu času, chci se do budoucna zaměřit na full-stack vývoj.',
    link: '/contact/kristyna',
    github: 'https://github.com/Pattiev97',
    linkedin: 'https://linkedin.com/in/patricie-vyhlidalova',
    email: 'mailto:patina.vy@gmail.com',
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
              <img src="/img/patricie-vyhlidalova.jpg" alt="Foto Páťa" />
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
                <Link
                  href={`${contact.email}`}
                  target="_blank"
                  className="footer__icon"
                >
                  <FontAwesomeIcon className="footer__icon" icon={faEnvelope} />
                </Link>
                <Link
                  href={`${contact.github}`}
                  target="_blank"
                  className="footer__icon"
                >
                  <FontAwesomeIcon className="footer__icon" icon={faGithub} />
                </Link>
                <Link
                  href={`${contact.linkedin}`}
                  target="_blank"
                  className="footer__icon"
                >
                  <FontAwesomeIcon className="footer__icon" icon={faLinkedin} />
                </Link>
              </div>
            </div>
          </div>
          <p>
            <em>{contact.descriptionTitle}</em>
          </p>
          <p>{contact.descriptionText}</p>
        </div>
      </div>
    </main>
  );
};

export default ContactDetail;
