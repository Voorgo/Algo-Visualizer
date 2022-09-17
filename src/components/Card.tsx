import { Link } from "react-router-dom";

const Card = ({
  src,
  title,
  description,
  link,
}: {
  description: string;
  src: string;
  title: string;
  link: string;
}) => {
  return (
    <Link to={`/${link}`}>
      <div className="w-full border border-gray-400 rounded h-max bg-white overflow-hidden max-w-[23rem] shadow-[3px_4px_8px_-1px_gray] hover:scale-110 transition-transform">
        <img src={src} alt="algorithm" className="w-full object-cover" />
        <div className="p-3 flex flex-col gap-2">
          <h2 className="font-semibold">{title}</h2>
          <hr />
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
