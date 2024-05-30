type StarsProps = {
  note: number;
};

const Stars = ({ note }: StarsProps) => {
  const limit = 5;
  const filled = [];
  for (let i = 0; i < limit; i++) {
    i < note ? (filled[i] = "filled") : (filled[i] = "");
  }
  return (
    <div className="stars">
      {filled.map((isFilled) => (
        <span className={"star " + isFilled}></span>
      ))}
    </div>
  );
};

export default Stars;
