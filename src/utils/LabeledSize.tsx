import { Range, getTrackBackground } from "react-range";
import { Dispatch, SetStateAction } from "react";

const STEP = 1;
const MIN = 0;
const MAX = 40;

const LabeledSize = ({
  setArraySize,
  values,
  setArray,
  disabled,
  setSorted,
}: {
  values: number[];
  setArraySize: Dispatch<SetStateAction<number[]>>;
  setArray: Dispatch<SetStateAction<{ number: number; color: string }[]>>;
  disabled: boolean;
  setSorted: Dispatch<SetStateAction<boolean>>;
}) => {
  const changeArray = (value: number | number[]) => {
    const updatedArray: { number: number; color: string }[] = [];
    for (let i = 0; i < value; i++) {
      updatedArray[i] = {
        number: Math.floor(Math.random() * 100 + 1),
        color: "#dc2061",
      };
    }
    setArray([...updatedArray]);
    setSorted(false);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        disabled={disabled}
        onChange={(values) => {
          changeArray(values);
          setArraySize(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "150px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#548BF4", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "25px",
              width: "25px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-25px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                padding: "2px",
                borderRadius: "4px",
                backgroundColor: "#548BF4",
              }}
            >
              {values[0]}
            </div>
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default LabeledSize;
