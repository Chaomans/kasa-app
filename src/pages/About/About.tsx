import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";
import styles from "./about.module.scss";
import { IStringMap } from "../../utils/interfaces";

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
          <p>Fiabilité</p>
        </DescriptionBlock>
        <DescriptionBlock
          title="Respect"
          id="respect"
          onChangeState={handleChangeState}
        >
          <p>
            Climatisation
            <br />
            Wi-Fi
            <br />
            Cuisine
            <br />
            Espace de travail
            <br />
            Fer à repasser
            <br />
            Sèche-cheveux
            <br />
            Cintres
          </p>
        </DescriptionBlock>
        <DescriptionBlock
          title="Service"
          id="service"
          onChangeState={handleChangeState}
        >
          <p>Service</p>
        </DescriptionBlock>
        <DescriptionBlock
          title="Sécurité"
          id="security"
          onChangeState={handleChangeState}
        >
          <p>Sécurité</p>
        </DescriptionBlock>
      </div>
    </div>
  );
};

export default About;
