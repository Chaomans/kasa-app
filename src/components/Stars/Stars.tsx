import styles from "./stars.module.scss";

type StarsProps = {
  note: number;
};

const Stars = ({ note }: StarsProps) => {
  const limit = 5;
  const filled = [];
  for (let i = 0; i < limit; i++) {
    i < note ? (filled[i] = styles.filled) : (filled[i] = "");
  }
  return (
    <div className={styles.stars}>
      {filled.map((isFilled, i) => (
        <span className={[styles.star, isFilled].join(" ")} key={i}></span>
      ))}
    </div>
  );
};

export default Stars;
