type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <p className="tag">{tag}</p>
      ))}
    </div>
  );
};

export default Tags;
