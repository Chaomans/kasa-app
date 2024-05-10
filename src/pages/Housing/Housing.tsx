import { useEffect, useState } from "react";
import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";
import { useParams } from "react-router-dom";
import styles from "./houses.module.scss";
import { House } from "../../utils/types";
import useHouses from "../../utils/useHouses";

const Housing = () => {
  const { id } = useParams();
  const { data: houses, isPending, error } = useHouses();
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
    <div className="housing">
      {error && <div className={styles.error}>{error}</div>}
      {isPending && (
        <div className={styles.pending}>
          <p>Chargement...</p>
        </div>
      )}
      {house && (
        <>
          <div className="images"></div>
          <div className="informations">
            <div className="principal">
              <div className="location"></div>
              <div className="owner"></div>
            </div>
            <div className="other">
              <div className="tags"></div>
              <div className="stars"></div>
            </div>
            <DescriptionBlock
              id="description"
              title="Description"
              onChangeState={handleChangeState}
            >
              {house.description}
            </DescriptionBlock>
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
        </>
      )}
    </div>
  );
};

export default Housing;
