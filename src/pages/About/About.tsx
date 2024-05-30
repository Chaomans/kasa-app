import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";
import styles from "./about.module.scss";

const About = () => {
  const [descBlockStates, setDescBlockStates] = useState([
    {
      id: "reliability",
      open: false,
    },
    {
      id: "respect",
      open: false,
    },
    {
      id: "service",
      open: false,
    },
    {
      id: "security",
      open: false,
    },
  ]);

  const handleChangeState = (id: string, open: boolean) => {
    const descBlock = descBlockStates.find((block) => block.id === id);
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
    <div className={styles.about}>
      <Banner page="about" />
      <div className={styles.descriptionBlocks}>
        <DescriptionBlock
          title="Fiabilité"
          id="reliability"
          onChangeState={handleChangeState}
        >
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </DescriptionBlock>
        <DescriptionBlock
          title="Respect"
          id="respect"
          onChangeState={handleChangeState}
        >
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </DescriptionBlock>
        <DescriptionBlock
          title="Service"
          id="service"
          onChangeState={handleChangeState}
        >
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </DescriptionBlock>
        <DescriptionBlock
          title="Sécurité"
          id="security"
          onChangeState={handleChangeState}
        >
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </DescriptionBlock>
      </div>
    </div>
  );
};

export default About;
