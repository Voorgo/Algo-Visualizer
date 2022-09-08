import { LabeledSize, LabeledTime } from "../utils";

interface Controls {
  setArraySize: any;
  arraySize: number[];
  setArr: any;
  time: number[];
  setTime: any;
  sorted: boolean;
}

const SpeedAndSizeControls = ({
  setArraySize,
  arraySize,
  setArr,
  sorted,
  time,
  setTime,
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
            sorted={sorted}
          />
        </div>
      </div>
      <div className="w-max px-8 py-2 border rounded border-black bg-white">
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl font-semibold">Speed (ms)</p>
          <LabeledTime values={time} setTime={setTime} sorted={sorted} />
        </div>
      </div>
    </div>
  );
};

export default SpeedAndSizeControls;
