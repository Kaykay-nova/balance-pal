import Link from 'next/link';
import '../../../style.css';

export function Header() {
  return (
    <header className="header">
      <div className="header__logo">BalancePal</div>
      <nav className="header__nav">
        <Link className="header__link header__link--active" href="/">
          Domů
        </Link>
        <Link className="header__link" href="/blog">
          Blog
        </Link>
        <Link className="header__link" href="/contact">
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
