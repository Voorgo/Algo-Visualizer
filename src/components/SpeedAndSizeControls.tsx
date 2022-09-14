import { LabeledSize, LabeledTime } from "../utils";
import { Dispatch, SetStateAction } from "react";

interface Controls {
  setArraySize: Dispatch<SetStateAction<number[]>>;
  arraySize: number[];
  setArr: Dispatch<SetStateAction<{ number: number; color: string }[]>>;
  time: number[];
  setTime: Dispatch<SetStateAction<number[]>>;
  disabled: boolean;
  setSorted: Dispatch<SetStateAction<boolean>>;
}

const SpeedAndSizeControls = ({
  setArraySize,
  arraySize,
  setArr,
  disabled,
  time,
  setTime,
  setSorted,
}: Controls) => {
  return (
    <div className="flex gap-10">
      <div className="w-max px-8 py-2 border rounded border-black bg-white">
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl font-semibold">Value</p>
          <LabeledSize
            setArraySize={setArraySize}
            values={arraySize}
            setArray={setArr}
            disabled={disabled}
            setSorted={setSorted}
          />
        </div>
      </div>
      <div className="w-max px-8 py-2 border rounded border-black bg-white">
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl font-semibold">Speed (ms)</p>
          <LabeledTime values={time} setTime={setTime} disabled={disabled} />
        </div>
      </div>
    </div>
  );
};

export default SpeedAndSizeControls;
