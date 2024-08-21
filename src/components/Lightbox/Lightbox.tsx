import { useState } from "react";

type LightboxProps = {
  images: string[];
  title: string;
};

const Lightbox = ({ images, title }: LightboxProps) => {
  const [index, setIndex] = useState<number>(0);
  setIndex(0);

  const loadImage = (src: string) => {
    return <img src={src} alt={`Image ${index + 1} of ${title}`}></img>;
  };

  loadImage(images[index]);

  return (
    <div className="lightbox">
      <button className="prev"></button>
      <button className="next"></button>
      <div className="imgDiv loader"></div>
    </div>
  );
};

export default Lightbox;
