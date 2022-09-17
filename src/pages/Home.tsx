import Card from "../components/Card";

const algorithms = [
  {
    title: "Bubble Sort",
    link: "bubblesort",
    src: require("../images/bubble.png"),
    description:
      "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
  },
  {
    title: "Selection Sort",
    link: "selectionsort",
    src: require("../images/selection.png"),
    description:
      "The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning. ",
  },
  {
    title: "Insertion Sort",
    link: "insertionsort",
    src: require("../images/insertion.png"),
    description:
      "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.",
  },
];

const Home = () => {
  return (
    <main className="w-full min-h-[calc(100vh-72px)] py-8">
      <div className="max-w-6xl flex flex-wrap justify-center gap-6 h-full mx-auto ">
        {algorithms.map((algorithm, i) => (
          <Card
            title={algorithm.title}
            src={algorithm.src}
            description={algorithm.description}
            link={algorithm.link}
            key={i}
          ></Card>
        ))}
      </div>
    </main>
  );
};

export default Home;
