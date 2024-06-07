import { useState } from "react";
import styles from "./banner.module.scss";

type BannerProps = {
  text?: string;
  page: string;
};

const Banner = ({ text, page }: BannerProps) => {
  const [bannerText, _] = useState<string>(text ?? "");

  return (
    <div
      className={
        styles.banner +
        (page === "home" ? " " + styles.home : "") +
        (page === "about" ? " " + styles.about : "")
      }
    >
      {bannerText && (
        <p className={styles.bannerText}>
          {bannerText.split("\n").map((t, i) => {
            if (i + 1 < bannerText.length) {
              return (
                <span key={i}>
                  {t} <br />
                </span>
              );
            }
            return t;
          })}
        </p>
      )}
    </div>
  );
};

export default Banner;
