import { ReactNode, useState } from "react";
import styles from "./descriptionBlock.module.scss";

type DescriptionBlockProps = {
  title: string;
  children: ReactNode;
  id: string;
  visible?: boolean;
  onChangeState: (id: string, open: boolean) => void;
};

const DescriptionBlock = ({
  title,
  children,
  id,
  visible = false,
  onChangeState,
}: DescriptionBlockProps) => {
  const [isOpen, setIsOpen] = useState(visible);

  const changeState = () => {
    setIsOpen(!isOpen);
    onChangeState(id, isOpen);
  };

  return (
    <div className={styles.descriptionBlock}>
      <div className={styles.block} onClick={() => changeState()}>
        <p className={styles.title}>{title}</p>
        <div>
          <img
            className={styles.arrow + (isOpen ? ` ${styles.turned}` : "")}
            src="/assets/Arrow.svg"
            alt="Arrow showing the state open or close of the description block"
          />
        </div>
      </div>
      <div className={styles.description + (isOpen ? ` ${styles.open}` : "")}>
        {children}
      </div>
    </div>
  );
};

export default DescriptionBlock;
