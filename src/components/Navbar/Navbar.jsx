
import { useState } from 'react';

import {
  Menu,
  X,
  Gift,
  Wallet,
  Sparkles,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

import styles from './Navbar.module.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
  { label: 'Refer & Earn', icon: Gift, href: '#refer-earn' },
  { label: 'Swap Center', icon: Wallet, href: '#swap-center' },
  { label: 'Bonus VEs', icon: Sparkles, href: '#bonus-ves' },
  { label: 'Captcha Tasks', icon: ShieldCheck, href: '#captcha-tasks' },
  { label: 'Exchange', icon: ArrowRight, href: '#exchange-center' }
];

  return (
    <header className={styles.navbar}>

      <a href="#home" className={styles.logo}>
        <span className={styles.logoIcon}>
          <Sparkles size={20} />
        </span>
        VELOOP<span className={styles.logoDot}>.</span>
      </a>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.label}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={17} />
              {link.label}
            </a>
          );
        })}
      </nav>

      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

    </header>
  );
}

export default Navbar;
