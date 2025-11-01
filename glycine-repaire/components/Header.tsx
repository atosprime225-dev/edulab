// components/Header.tsx
import Image from 'next/image';
import styles from './Header.module.css';
export default function Header() {
  return (
  <header className={styles.Header}>
      <div className={styles.logoContainer}>
        <a href="https://edulab-kzku.vercel.app/"> 
        <Image src="/Edulab triangle imbriqué.png"  alt="Logo Edulab" width={156} height={156} style={{height: 'auto' , width: 'auto', maxHeight: '60px'}}/>
        </a>        
      </div>
    <nav className={styles.navlinks}>
      <div className={styles.dropdown}>
      <a href="#">Ressources</a>
      <div className={styles.dropdowncontent}>
        <a href="/innovation-pedagogique">Innovation pédagogique</a>
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
    
