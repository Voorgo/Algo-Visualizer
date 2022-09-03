const Card = ({
  src,
  title,
  children,
}: {
  children: JSX.Element | JSX.Element[];
  src: string;
  title: string;
}) => {
  return (
    <div>
      <div>img</div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Card;
