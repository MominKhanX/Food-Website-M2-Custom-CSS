import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerContent}>

        <div className={styles.footerSection}>

          <h3>About Us</h3>

          <p>Gourmet Delights brings you the finest culinary experiences right to your doorstep.</p>
        
        </div>

        <div className={styles.footerSection}>

          <h3>Quick Links</h3>

          <ul>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/order">Order Online</a></li>
          </ul>

        </div>

        <div className={styles.footerSection}>

          <h3>Contact Us</h3>

          <p>123 Gourmet Street, Foodville, FV 12345</p>

          <p>Phone: (123) 456-7890</p>

          <p>Email: info@gourmetdelights.com</p>

        </div>

      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 Gourmet Delights. All rights reserved.</p>
      </div>
      
    </footer>
  )
}

export default Footer

