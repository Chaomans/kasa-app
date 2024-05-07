import styles from "./banner.module.scss";

type BannerProps = {
  text?: string;
  page: string;
};

const Banner = ({ text, page }: BannerProps) => {
  return (
    <div
      className={
        styles.banner +
        (page === "home" ? " " + styles.home : "") +
        (page === "about" ? " " + styles.about : "")
      }
    >
      {text && <p className={styles.bannerText}>{text}</p>}
    </div>
  );
};

export default Banner;
