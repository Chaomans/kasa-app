import "./footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <img src="/assets/kasa_logo_white.svg" alt="kasa's logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
