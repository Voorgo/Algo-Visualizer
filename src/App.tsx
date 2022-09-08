import { Route, Routes } from "react-router-dom";
import { Header, Home } from "./components";
import BubbleSort from "./pages/BubbleSort";
import SelectionSort from "./pages/SelectionSort";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bubblesort" element={<BubbleSort />} />
        <Route path="/selectionsort" element={<SelectionSort />} />
      </Routes>
    </>
  );
}

export default App;
