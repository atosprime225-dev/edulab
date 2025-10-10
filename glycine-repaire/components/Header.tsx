// components/Header.tsx
import styles from './Header.module.css';
export default function Header() {
  return (
  <header className={styles.Header}>
      <div> Edulab</div>
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
    
