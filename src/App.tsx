import { Route, Routes } from "react-router-dom";
import { Header, Home } from "./components";
import BubbleSort from "./pages/BubbleSort";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bubblesort" element={<BubbleSort />} />
      </Routes>
    </>
  );
}

export default App;
