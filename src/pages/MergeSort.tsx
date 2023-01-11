import { useState } from "react";
import AlgorithmMain from "../components/AlgorithmMain";
import AlgorithmTitle from "../components/AlgorithmTitle";
import { sleep } from "../utils/sleep";
import SpeedAndSizeControls from "../components/SpeedAndSizeControls";
import Buttons from "../components/Buttons";
import AlreadySortedModal from "../components/AlreadySortedModal";

interface ArrayType {
  number: number;
  color: string;
}

const MergeSort = () => {
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
  const mergeArrays = async (arr1: ArrayType[], arr2: ArrayType[]) => {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      // await sleep(time);
      if (arr2[j].number > arr1[i].number) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    setArr([...results]);
    return results;
  };
  const mergeSort = async (arr: ArrayType[]) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left: any = await mergeSort(arr.slice(0, mid));
    let right: any = await mergeSort(arr.slice(mid));
    return mergeArrays(left, right);
  };

  return (
    <AlgorithmMain>
      <>{visible && <AlreadySortedModal />}</>
      <div className="w-full h-[80vh]  flex flex-col gap-3 pt-5">
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
            disabled={disabled}
            time={time}
            setTime={setTime}
            arraySize={arraySize}
            setSorted={setSorted}
          />
          <Buttons
            array={arr}
            setArr={setArr}
            disabled={disabled}
            algorithm={mergeSort}
            sorted={sorted}
            setSorted={setSorted}
            setVisible={setVisible}
          />
        </div>
      </div>
    </AlgorithmMain>
  );
};

export default MergeSort;
