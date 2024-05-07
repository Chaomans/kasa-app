import Banner from "../../components/Banner/Banner";
import HouseCard from "../../components/HouseCard/HouseCard";
import useHouses from "../../utils/useHouses";
import styles from "./home.module.scss";

const Home = () => {
  const { data: houses, isPending, error } = useHouses();
  return (
    <div className={styles.home}>
      {error && <div className={styles.error}>{error}</div>}
      {isPending && (
        <div className={styles.pending}>
          <p>Chargement...</p>
        </div>
      )}
      {houses && (
        <>
          <Banner text="Chez vous, et partout ailleurs" page="home" />
          <div className={styles.cards}>
            {houses.map((house) => (
              <HouseCard house={house} key={house.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
