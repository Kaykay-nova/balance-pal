import Link from 'next/link';
import '../../../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social-links">
          <h3 className="footer__social-title">Sociální sítě</h3>
          <div className="footer__social-container">
            <div className="footer__social">
              <p className="footer__social-name">Krista</p>
              <div className="footer__social-icons">
                <Link
                  href="https://github.com/Kaykay-nova"
                  target="_blank"
                  className="footer__icon"
                >
                  <FontAwesomeIcon className="footer__icon" icon={faGithub} />
                </Link>
                <Link
                  href="https://linkedin.com/in/kristýna-konečná-590292290"
                  target="_blank"
                  className="footer__icon"
                >
                  <FontAwesomeIcon className="footer__icon" icon={faLinkedin} />
                </Link>
              </div>
            </div>
            <div className="footer__social">
              <p className="footer__social-name">Páťa</p>
              <div className="footer__social-icons">
                <Link href="#" target="_blank" className="footer__icon">
                <FontAwesomeIcon className="footer__icon" icon={faGithub} />
                </Link>
                <Link href="#" target="_blank" className="footer__icon">
                <FontAwesomeIcon className="footer__icon" icon={faLinkedin} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__nav-photo">
          <Link
            className="footer__photo footer__photo--quiz"
            href="./index.html#quiz"
          >
            Kvíz
          </Link>
          <Link
            className="footer__photo footer__photo--blog"
            href="./blog.html"
          >
            Tipy
          </Link>
        </div>
        <div className="footer__rights">
          <Link target="_blank" href="https://pattiev97.github.io/o-projektu/">
            O projektu
          </Link>
          <p>&copy; 2024</p>
        </div>
      </div>
    </footer>
  );
}
