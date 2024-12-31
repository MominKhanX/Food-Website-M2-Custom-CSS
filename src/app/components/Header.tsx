'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Header.module.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>

      <nav className={styles.nav}>

        <Link href="/" className={styles.logo}>
          <img src="/Images/Logo2.png" alt="Logo" />
        </Link>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>

          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>

          <li><Link href="/menu" onClick={toggleMenu}>Menu</Link></li>

          <li><Link href="/specials" onClick={toggleMenu}>Specials</Link></li>

          <li><Link href="/blog" onClick={toggleMenu}>Blog</Link></li>

          <li><Link href="/about" onClick={toggleMenu}>About Us</Link></li>

          <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>

          <li><Link href="/order" className={styles.orderBtn} onClick={toggleMenu}>Order Online</Link></li>

        </ul>

      </nav>

    </header>
  )
}

export default Header
