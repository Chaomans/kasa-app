import styles from "./footer.module.scss";
import logo from "/assets/kasa_logo_white.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.img} src={logo} alt="kasa's logo" />
      <p className={styles.rights}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
