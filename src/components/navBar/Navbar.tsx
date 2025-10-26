'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sobre mí', path: '/aboutMe' },
  { name: 'Proyectos', path: '/projects' },
  { name: 'Contáctame', path: '/contact' },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo o nombre */}
        <Link href="/" className={styles.logo}>
          Pablo.dev
        </Link>

        {/* Enlaces de navegación */}
        <div className={styles.links}>
            {/* con esto hacemos que el pathname sea igual a la ruta que seleccionamos segun el array */}
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
