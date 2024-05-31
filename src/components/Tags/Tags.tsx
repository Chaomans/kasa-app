import styles from "./tags.module.scss";

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <p className={styles.tag}>{tag}</p>
      ))}
    </div>
  );
};

export default Tags;
