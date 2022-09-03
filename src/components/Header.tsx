import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full shadow-lg">
      <nav>
        <div className="w-full max-w-6xl flex mx-auto px-5 py-4 justify-between">
          <div className="text-2xl font-bold">
            <Link to="/">Algo Visualizer</Link>
          </div>
          <div className="self-center">
            <ul className="flex gap-20 items-center text-xl font-semibold">
              <li>
                <Link to="/bubblesort">Bubble Sort</Link>
              </li>
              <li>
                <Link to="/quicksort">Quick Sort</Link>
              </li>
              <li>
                <Link to="/">N/A</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
