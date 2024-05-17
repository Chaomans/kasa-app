import { NavLink } from "react-router-dom";
import { House } from "../../utils/types";
import styles from "./houseCard.module.scss";

type HouseCardProps = {
  house: House;
};

const HouseCard = ({ house }: HouseCardProps) => {
  return (
    <NavLink to={`/logement/${house.id}`} className={styles.card}>
      <img
        src={house.cover}
        alt={`${house.title}'s presentation image.`}
        className={styles.cardCover}
      />
      <p className={styles.cardTitle}>{house.title}</p>
    </NavLink>
  );
};

export default HouseCard;
