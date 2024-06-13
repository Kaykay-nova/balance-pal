'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../../../style.css';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div>
        <Link className="header__logo" href="/">
          BalancePal
        </Link>
      </div>
      <nav className="header__nav">
        <Link
          href="/"
          className={`header__link ${
            pathname === '/' ? 'header__link--active' : ''
          }`}
        >
          Domů
        </Link>
        <Link
          href="/blog"
          className={`header__link ${
            pathname === '/blog' || pathname.includes('posts')
              ? 'header__link--active'
              : ''
          }`}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`header__link ${
            pathname.includes('contact') ? 'header__link--active' : ''
          }`}
        >
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
