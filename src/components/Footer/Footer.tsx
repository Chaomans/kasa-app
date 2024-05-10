import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        className={styles.img}
        src="/assets/kasa_logo_white.svg"
        alt="kasa's logo"
      />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
