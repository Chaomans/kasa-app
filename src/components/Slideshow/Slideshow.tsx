import { useState } from "react";
import styles from "./slideshow.module.scss";

type SlideshowProps = {
  images: string[];
  title: string;
};

const Slideshow = ({ images, title }: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imgSrc, setimgSrc] = useState<string>(images[0]);
  const [loading, setLoading] = useState<boolean>(true);

  const previousImage = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setLoading(true);
    setimgSrc(images[prevIndex]);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setLoading(true);
    setimgSrc(images[nextIndex]);
  };

  return (
    <div className={styles.slideshow}>
      {images.length !== 1 && (
        <button
          className={styles.previous}
          onClick={() => previousImage()}
        ></button>
      )}
      {images.length !== 1 && (
        <button className={styles.next} onClick={() => nextImage()}></button>
      )}
      <div className={`${styles.imgDiv} ${loading ? styles.loading : ""}`}>
        <img
          src={imgSrc}
          alt={`Representative image number ${currentIndex + 1} out of ${
            images.length
          } for '${title}'`}
          className={styles.img}
          onLoad={() => setLoading(false)}
          onLoadStart={() => setLoading(true)}
        />
      </div>
      {images.length !== 1 && (
        <p className={styles.index}>
          {currentIndex + 1}/{images.length}
        </p>
      )}
    </div>
  );
};

export default Slideshow;
