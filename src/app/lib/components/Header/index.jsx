'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@/app/style.css';
import './style.css';
import { useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  return (
    <header className="header">
      <div>
        <Link className="header__logo" href="/">
          BalancePal
        </Link>
      </div>
      <div className="hamburgerWraper" onClick={() => setActive(!active)}>
        <div className={active ? 'hamburgerActive' : 'hamburger'}>
          <nav
            className={`header__nav ${active ? 'sidenavActive' : 'sidenav'}`}
          >
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
        </div>
      </div>
    </header>
  );
}
