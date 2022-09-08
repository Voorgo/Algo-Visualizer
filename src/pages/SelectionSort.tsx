import { useState } from "react";
import AlgorithmMain from "../components/AlgorithmMain";
import AlgorithmTitle from "../components/AlgorithmTitle";
import { sleep } from "../utils/sleep";
import SpeedAndSizeControls from "../components/SpeedAndSizeControls";
import Buttons from "../components/Buttons";

const SelectionSort = () => {
  const [arr, setArr] = useState([
    { number: 38, color: "#dc2061" },
    { number: 12, color: "#dc2061" },
    { number: 22, color: "#dc2061" },
    { number: 85, color: "#dc2061" },
    { number: 54, color: "#dc2061" },
    { number: 68, color: "#dc2061" },
    { number: 4, color: "#dc2061" },
  ]);
  const [arraySize, setArraySize] = useState([0]);
  const [time, setTime] = useState([30]);
  const [sorted, setSorted] = useState<boolean>(true);

  const selectionSort = async () => {
    const swap = (idx1: number, idx2: number) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    setSorted(false);
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        arr[j].color = "#ffef00";
        setArr([...arr]);
        await sleep(time);
        if (arr[lowest].number > arr[j].number) {
          arr[lowest].color = "#dc2061";
          lowest = j;
          setArr([...arr]);
          await sleep(time);
        }
        arr[lowest].color = "#5d0083";
        setArr([...arr]);
        arr[j].color = "#dc2061";
      }
      if (i !== lowest) {
        swap(i, lowest);
      }
      arr[i].color = "#1b86ff";
      setArr([...arr]);
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i].color = "#1ee01e";
    }
    setArr([...arr]);
    setSorted(true);
  };

  return (
    <AlgorithmMain>
      <div className="w-full h-[80vh] bg-[#f1f1f1] flex flex-col gap-3 pt-5">
        <AlgorithmTitle name="Selection Sort" />
        <div className="w-full grow flex flex-col justify-end">
          <div className="flex items-end justify-center w-full gap-2">
            {arr.map((e, i) => {
              return (
                <div className="flex flex-col gap-2" key={i}>
                  <div
                    style={{
                      width: `${Math.floor(900 / arr.length)}px`,
                      height: `${e.number * 3}px`,
                      background: e.color,
                    }}
                    className="shadow-[3px_4px_8px_-1px_black] border border-white transition-[height]"
                  ></div>
                  <div className="text-center text-white bg-black rounded border-white border shadow-[3px_4px_8px_-1px_black]">
                    {e.number}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-8 mb-2 flex justify-center gap-10">
          <SpeedAndSizeControls
            setArr={setArr}
            setArraySize={setArraySize}
            sorted={sorted}
            time={time}
            setTime={setTime}
            arraySize={arraySize}
          />
          <Buttons
            array={arr}
            setArr={setArr}
            sorted={sorted}
            algorithm={selectionSort}
          />
        </div>
      </div>
    </AlgorithmMain>
  );
};

export default SelectionSort;
