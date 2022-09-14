import { Link } from "react-router-dom";

const Header = () => {
  const AbbreviateTitle = () => {
    let bubble = document.querySelector("#bubble") as HTMLAnchorElement;
    let selection = document.querySelector("#selection") as HTMLAnchorElement;
    let insertion = document.querySelector("#insertion") as HTMLAnchorElement;
    bubble.innerText = "BUB";
    selection.innerText = "SEL";
    insertion.innerText = "INS";
    bubble.title = "Bubble Sort";
    selection.title = "Selection Sort";
    insertion.title = "Insertion Sort";
  };

  const clicked = (e: React.MouseEvent<HTMLAnchorElement>) => {
    AbbreviateTitle();
    e.currentTarget.innerText = e.currentTarget.title;
  };
  return (
    <header className="w-full shadow-lg">
      <nav>
        <div className="w-full max-w-6xl flex mx-auto px-5 py-4 justify-between">
          <div className="text-2xl font-bold">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={require("../images/logo.png")}
                alt="logo"
                width="48px"
                height="48px"
                className="h-[48px]"
              />
              Algo Visualizer
            </Link>
          </div>
          <div className="self-center">
            <ul className="flex gap-20 items-center text-xl font-semibold">
              <li>
                <Link
                  to="/bubblesort"
                  title="Bubble Sort"
                  className="px-3 py-2 rounded transition-[background] duration-200 hover:bg-gray-200"
                  onClick={(e) => clicked(e)}
                  id="bubble"
                >
                  BUB
                </Link>
              </li>
              <li>
                <Link
                  to="/selectionsort"
                  title="Selection Sort"
                  className="px-3 py-2 rounded transition-[background] duration-200 hover:bg-gray-200"
                  onClick={(e) => clicked(e)}
                  id="selection"
                >
                  SEL
                </Link>
              </li>
              <li>
                <Link
                  to="/insertionsort"
                  title="Insertion Sort"
                  className="px-3 py-2 rounded transition-[background] duration-200 hover:bg-gray-200"
                  onClick={(e) => clicked(e)}
                  id="insertion"
                >
                  INS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
