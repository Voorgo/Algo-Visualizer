import { useState } from "react";
import AlgorithmMain from "../components/AlgorithmMain";
import AlgorithmTitle from "../components/AlgorithmTitle";
import { sleep } from "../utils/sleep";
import { LabeledSize, LabeledTime, Buttons } from "../utils";

const BubbleSort = () => {
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
  const [time, setTime] = useState([100]);

  const changeColor = async () => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        await sleep(time);
        arr[i].color = "#ffef00";
        if (i > 0) arr[i - 1].color = "#dc2061";
        setArr([...arr]);
      }
    }
  };

  const bubbleSort = async () => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length - 1; i++) {
        await sleep(time);
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j].number > arr[j + 1].number) {
            let temp = arr[j].number;
            arr[j].color = "#ffef00";
            arr[j + 1].color = "#ffef00";

            arr[j].number = arr[j + 1].number;
            arr[j + 1].number = temp;
            setArr([...arr]);
          }
          arr[j].color = "#dc2061";
          arr[j + 1].color = "#dc2061";
        }
      }
    }
  };

  return (
    <AlgorithmMain>
      <div className="w-full h-[80vh] bg-[#f1f1f1] flex flex-col gap-3 pt-5">
        <AlgorithmTitle name="Bubble Sort" />
        <div className="w-full grow flex flex-col justify-end">
          <div className="flex items-end justify-center w-full gap-2">
            {arr.map((e, i) => {
              return (
                <div className="flex flex-col gap-2" key={i}>
                  <div
                    style={{
                      width: `${Math.floor(1000 / arr.length)}px`,
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
          <div className="flex gap-10">
            <div className="w-max px-8 py-2 border rounded border-black bg-white">
              <div className="flex flex-col items-center gap-5">
                <p className="text-xl font-semibold">Value</p>
                <LabeledSize
                  setArraySize={setArraySize}
                  values={arraySize}
                  setArray={setArr}
                />
              </div>
            </div>
            <div className="w-max px-8 py-2 border rounded border-black bg-white">
              <div className="flex flex-col items-center gap-5">
                <p className="text-xl font-semibold">Time</p>
                <LabeledTime values={time} setTime={setTime} />
              </div>
            </div>
          </div>
          <Buttons array={arr} setArr={setArr} bubbleSort={bubbleSort} />
        </div>
      </div>
    </AlgorithmMain>
  );
};

export default BubbleSort;
