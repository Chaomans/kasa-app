import { NavLink } from "react-router-dom";
import "./header.module.scss";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img src="/assets/kasa_logo.svg" alt="kasa's logo." />
        </NavLink>
        <div className="links">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="about">À propos</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
