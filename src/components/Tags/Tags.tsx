import styles from "./tags.module.scss";

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag, i) => (
        <p className={styles.tag} key={i}>
          {tag}
        </p>
      ))}
    </div>
  );
};

export default Tags;
