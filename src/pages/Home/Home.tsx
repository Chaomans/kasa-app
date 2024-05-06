import useHouses from "../../utils/useHouses";

const Home = () => {
  const { data: houses, isPending, error } = useHouses();
  return (
    <div className="home">
      {error && <div className="home__error">{error}</div>}
      {isPending && <div className="pending">Chargement</div>}
      {houses && <div className="home__houses">houses</div>}
    </div>
  );
};

export default Home;
