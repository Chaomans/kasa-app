import { useData } from "../../Providers/DataProvider";
import Banner from "../../components/Banner/Banner";
import HouseCard from "../../components/HouseCard/HouseCard";
import styles from "./home.module.scss";

const Home = () => {
  const { data: houses, isPending, error } = useData();
  const bannerText =
    window.innerWidth <= 768
      ? "Chez vous,\npartout et ailleurs"
      : "Chez vous, partout et ailleurs";

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
          <Banner text={bannerText} page="home" />
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
