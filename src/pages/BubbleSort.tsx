import { useState } from "react";
import AlgorithmMain from "../components/AlgorithmMain";
import AlgorithmTitle from "../components/AlgorithmTitle";
import { sleep } from "../utils/sleep";
import SpeedAndSizeControls from "../components/SpeedAndSizeControls";
import Buttons from "../components/Buttons";
import AlreadySortedModal from "../components/AlreadySortedModal";

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
  const [time, setTime] = useState([30]);
  const [sorted, setSorted] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const bubbleSort = async () => {
    let noSwap;
    if (arr.length > 0) {
      setSorted(false);
      for (let i = 0; i < arr.length; i++) {
        noSwap = true;
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j].number > arr[j + 1].number) {
            let temp;
            setDisabled(true);
            arr[j].color = "#ffef00";
            arr[j + 1].color = "#ffef00";
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;

            setArr([...arr]);
            await sleep(time);
            noSwap = false;
          }
          arr[j].color = "#dc2061";
          arr[j + 1].color = "#1b86ff";
        }
        if (noSwap) break;
      }

      for (let i = 0; i < arr.length; i++) {
        arr[i].color = "#1ee01e";
      }
      setArr([...arr]);
      setSorted(true);
      setDisabled(false);
    }
  };

  return (
    <AlgorithmMain>
      <>{visible && <AlreadySortedModal />}</>
      <div className="w-full h-[80vh]  flex flex-col gap-3 pt-5">
        <AlgorithmTitle name="Bubble Sort" />
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
                  <div className="text-center text-white px-[2px] bg-black rounded border-white border shadow-[3px_4px_8px_-1px_black]">
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
            disabled={disabled}
            time={time}
            setTime={setTime}
            arraySize={arraySize}
            setSorted={setSorted}
          />
          <Buttons
            array={arr}
            setArr={setArr}
            algorithm={bubbleSort}
            disabled={disabled}
            sorted={sorted}
            setSorted={setSorted}
            setVisible={setVisible}
          />
        </div>
      </div>
    </AlgorithmMain>
  );
};

export default BubbleSort;
