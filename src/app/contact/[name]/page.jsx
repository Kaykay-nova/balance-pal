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
    descriptionTitle:
      'Programování mě baví, protože je to kreativní proces, kde z několika řádků kódu vznikají funkční a užitečné aplikace. Je to nekonečná cesta objevování a učení se, protože technologie se neustále vyvíjí. A nakonec, je to pocit uspokojení, když vidíte, že váš kód funguje a lidé ho používají.',
    descriptionText: (
      <>
        Z grafického designu jsem se přirozeně dostala k programování. Zajímala
        mě nejen vizuální stránka, ale i technické zázemí webových stránek. V
        předchozí práci jsem editovala obsah našeho webu, a tak jsem se poprvé
        setkala s HTML a CSS. To mě motivovalo k dalšímu vzdělávání. Chvíli jsem
        se učila samostudiem, ale cílený rekvalifikační kurz&nbsp;
        {
          <Link
            href="https://www.itnetwork.cz/prace-a-podnikani-v-it/rekvalifikacni-kurzy/rekvalifikacni-kurzy-javascript"
            alt="IT network - JavaScript"
            target='_blank'
          >
            programování v jazyce Javascript
          </Link>
        }
        &nbsp;mi dal potřebné základy. Nyní se účastním kurzu&nbsp;
        {
          <Link
            href="https://www.czechitas.cz/kurzy/digitalni-akademie-web"
            alt="Digitální akademie: WEB"
            target='_blank'
          >
            Digitální akademie
          </Link>
        }
        &nbsp;u Czechitas, kde se zaměřuji na front-end vývoj s Reactem. Ačkoli
        je přede mnou ještě dlouhá cesta, už teď se těším z toho, co jsem se
        naučila a co všechno dokážu vytvořit.
      </>
    ),
    link: '/contact/patricie',
    github: 'https://github.com/Kaykay-nova',
    linkedin: 'https://linkedin.com/in/kristýna-konečná-590292290',
    email: 'mailto:kristyna.konecna@gmail.com',
  },
  patricie: {
    title: 'Patricie Vyhlídalová',
    descriptionTitle:
      'Předchozí práce mě naučily pečlivosti, trpělivosti a schopnosti pracovat na týmových i samostatných projektech.',
    descriptionText: (
      <>
        O obor IT se zajímám druhým rokem. Účastnila jsem se několika
        jednodenních a dvoudenních kurzů v rámci Czechitas, jako jsou Poznej
        Salesforce,&nbsp;
        {
          <Link
            href="https://www.czechitas.cz/kurzy/uvod-do-pythonu"
            alt="Úvod do Pythonu"
            target='_blank'
          >
            Úvod do Pythonu
          </Link>
        }
        &nbsp;nebo&nbsp;
        {
          <Link
            href="https://www.czechitas.cz/kurzy/test-it-testovani-v-praxi"
            alt="Test it - testování v praxi"
            target='_blank'
          >
            Test it - testování v praxi
          </Link>
        }
        . Na podzim roku 2023 jsem se rozhodla zaměřit na frontend, a proto jsem
        absolvovala semestrální kurz&nbsp;
        {
          <Link
            href="https://www.czechitas.cz/kurzy/javascript-1-zaklady"
            alt="JavaScript 1 - Základy"
            target='_blank'
          >
            JavaScript 1
          </Link>
        }
        , po kterém následovala&nbsp;
        {
          <Link
            href="https://www.czechitas.cz/kurzy/digitalni-akademie-web"
            alt="Digitální akademie: WEB"
            target='_blank'
          >
            Digitální Akademie: WEB
          </Link>
        }
        , kterou jsem úspěšně dokončila v červnu 2024. I když vím, že to bude
        vyžadovat ještě spoustu času, chci se do budoucna zaměřit na full-stack
        vývoj.
      </>
    ),
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
              <img src="/img/profil_kristyna.jpg" alt="Foto Kristýna" />
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
          <div className="contact__header">
            <h1>{contact.title}</h1>
            <div className="contact__social">
              <div className="footer__social-icons contact-icons">
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

          <div className="contact__btn">
            <Link className="btn" href="/contact">
              &laquo; Zpět
            </Link>
            <Link href={contact.link} className="btn">
              Druhá autorka &raquo;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactDetail;
