import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.headerLink}>
          <img src="assets/kasa_logo.svg" alt="kasa's logo." />
        </NavLink>
        <div className={styles.links}>
          <NavLink to="/" className={styles.headerLink}>
            Accueil
          </NavLink>
          <NavLink to="about" className={styles.headerLink}>
            À propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
