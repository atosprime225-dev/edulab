// components/Header.tsx
import Image from 'next/image';
import styles from './Header.module.css';
export default function Header() {
  return (
  <header className={styles.Header}>
      <div className={styles.logoContainer}>
        <Image src="/Edulab triangle imbriqué.png" alt="Logo Edulab" width={92} height={92} style={{height: 'auto' , width: 'auto', maxHeight: '60px'}} />        
      </div>
    <nav className={styles.navlinks}>
      <div className={styles.dropdown}>
      <a href="#">Ressources</a>
      <div className={styles.dropdowncontent}>
        <a href="#">Innovation pédagogique</a>
        <a href="#">Pratique de classe</a>
        <a href="#">Neuroscience et pédagogie</a>
      </div> 
      </div>
      <a href="#">Communauté</a>
      <a href="#">À propos</a>
    </nav> 
  </header>
  );
}
    
