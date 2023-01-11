import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./components";
import {
  BubbleSort,
  SelectionSort,
  InsertionSort,
  MergeSort,
  Home,
} from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Algo-Visualizer" element={<Home />} />
        <Route path="/" element={<Navigate to="/Algo-Visualizer" replace />} />
        <Route path="/bubblesort" element={<BubbleSort />} />
        <Route path="/selectionsort" element={<SelectionSort />} />
        <Route path="/insertionsort" element={<InsertionSort />} />
        <Route path="/mergesort" element={<MergeSort />} />
      </Routes>
    </>
  );
}

export default App;
