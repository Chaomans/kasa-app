import { useEffect, useState } from "react";
import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";
import { useParams } from "react-router-dom";
import styles from "./housing.module.scss";
import { House } from "../../utils/types";
import { useData } from "../../Providers/DataProvider";
import Tags from "../../components/Tags/Tags";
import Stars from "../../components/Stars/Stars";
import NotFound from "../../components/NotFound/NotFound";
import Slideshow from "../../components/Slideshow/Slideshow";

const Housing = () => {
  const { id } = useParams();
  const { data: houses, isPending, error } = useData();
  const [house, setHouse] = useState<House>();

  useEffect(() => {
    if (houses) {
      setHouse(houses.find((house) => house.id === id));
    }
  }, [houses, isPending, error]);

  const [descBlockStates, setDescBlockStates] = useState([
    {
      id: "description",
      open: false,
    },
    {
      id: "equipments",
      open: false,
    },
  ]);

  const handleChangeState = (_id: string, open: boolean) => {
    const descBlock = descBlockStates.find((block) => block.id === _id);
    if (descBlock) {
      const newdescBlock = {
        ...descBlock,
        open,
      };
      setDescBlockStates(
        descBlockStates.map((block) => (block.id === id ? newdescBlock : block))
      );
    }
  };

  return (
    <div className={styles.housing}>
      {error && <div className={styles.error}>{error}</div>}
      {isPending && (
        <div className={styles.pending}>
          <p>Chargement...</p>
        </div>
      )}
      {house && (
        <>
          <Slideshow images={house.pictures} title={house.title} />
          <div className={styles.informations}>
            <div className={styles.principal}>
              <div className={styles.location_infos}>
                <p className={styles.title}>{house.title}</p>
                <p className={styles.location}>{house.location}</p>
                <Tags tags={house.tags} />
              </div>
              <div className={styles.plus}>
                <div className={styles.owner}>
                  <p className={styles.name}>
                    {house.host.name.split(" ")[0]}
                    <br />
                    {house.host.name.split(" ")[1]}
                  </p>
                  <div className={styles.picture_div}>
                    <img
                      className={styles.picture}
                      src={house.host.picture}
                      alt="Host's picture."
                    />
                  </div>
                </div>
                <Stars note={parseInt(house.rating, 10)} />
              </div>
            </div>
            <div className={styles.descriptionblocks}>
              <div className={styles.descriptionblock}>
                <DescriptionBlock
                  id="description"
                  title="Description"
                  onChangeState={handleChangeState}
                >
                  {house.description}
                </DescriptionBlock>
              </div>
              <div className={styles.descriptionblock}>
                <DescriptionBlock
                  id="equipments"
                  title="Équipements"
                  onChangeState={handleChangeState}
                >
                  {house.equipments.map((equip) => (
                    <p key={equip}>{equip}</p>
                  ))}
                </DescriptionBlock>
              </div>
            </div>
          </div>
        </>
      )}
      {!error && !isPending && !house && <NotFound />}
    </div>
  );
};

export default Housing;
