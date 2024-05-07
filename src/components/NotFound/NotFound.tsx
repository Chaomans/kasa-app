import { NavLink } from "react-router-dom";
import styles from "./notFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.errorText}>
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className={styles.return}>
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
};

export default NotFound;
