import Banner from "../../components/Banner/Banner";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <Banner page="about" />
    </div>
  );
};

export default About;
