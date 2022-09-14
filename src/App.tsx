import { Route, Routes } from "react-router-dom";
import { Header, Home } from "./components";
import { BubbleSort, SelectionSort, InsertionSort } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bubblesort" element={<BubbleSort />} />
        <Route path="/selectionsort" element={<SelectionSort />} />
        <Route path="/insertionsort" element={<InsertionSort />} />
      </Routes>
    </>
  );
}

export default App;
