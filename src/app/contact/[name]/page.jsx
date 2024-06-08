"use client"
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
    <div class="contact__container">
     <aside class="contact__aside--panel">
       <Link href="/contact/kristyna" class="contact__person">
         <div class="contact__person--card">
           <img src="/img/prince-akachi-J1OScm_uHUQ-unsplash.jpg" alt="Foto Kristýna"/>
           <h3>Kristýna</h3>
         </div>
       </Link>
       <Link href="/contact/patricie" class="contact__person">
         <div class="contact__person--card paty">
           <h3 class="contact__paty">Páťa</h3>
           <img src="/img/prince-akachi-J1OScm_uHUQ-unsplash.jpg" alt="Foto Páťa"/>
         </div>
       </Link>
     </aside>
     <div class="contact__main-content">
       <div class="contact__btn">
         <Link class="btn" href="/contact">&laquo; Zpět</Link> 
         <Link href={contact.link} class="btn">Druhá autorka &raquo;</Link>
       </div>
       <div class="contact__header">
         <h1>{contact.title}</h1>
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
       <p>{contact.description}</p>
     </div>
    </div>
 </main>
  );
}

export default ContactDetail;
