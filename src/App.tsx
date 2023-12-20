import { useState } from "react";
import "./App.css";

function processString(inputString: string): string[] {
  // Remove "\n" from the string
  const cleanedString = inputString.replace(/\n/g, "");

  // Split the string into an array of letters
  const lettersArray = cleanedString.split("");

  // Remove empty strings from the array
  const resultArray = lettersArray.filter((letter) => letter !== "");

  return resultArray;
}
const wordGrid = processString(`
HETAISKEENLM
TWEEDRIEVIER
VIJFZESZEVEN
DERNEGEN-ENS
ACHTVEERTIEN
KWARTELFSUUR
RTWAALFAVOOR
OVERQHALFEEN
TWEEDRIEVIER
VIJFZESZEVEN
ACHTNEGENELF
TIENTWAALFRT`);

// top numbers
const EEN = [7, 8, 9];
const TWEE = [20, 21, 22, 23];
const DRIE = [16, 17, 18, 19];
const VIER = [12, 13, 14, 15];
const VIJF = [24, 25, 26, 27];
const ZES = [28, 29, 30];
const ZEVEN = [31, 32, 33, 34, 35];
const ACHT = [48, 49, 50, 51];
const NEGEN = [40, 41, 42, 43, 44];
const TIEN = [56, 57, 58, 59];
const ELF = [64, 65, 66];
const TWAALF = [73, 74, 75, 76, 77, 78];
const DERTIEN = [45, 46, 47, ...TIEN];
const VEERTIEN = [52, 53, 54, 55, ...TIEN];
const topNumbers = [
  TWAALF,
  EEN,
  TWEE,
  DRIE,
  VIER,
  VIJF,
  ZES,
  ZEVEN,
  ACHT,
  NEGEN,
  TIEN,
  ELF,
];

// bottom nummbers
const SECOND_EEN = [84, 85, 86];
const SECOND_TWEE = [96, 97, 98, 99];
const SECOND_DRIE = [100, 101, 102, 103];
const SECOND_VIER = [104, 105, 106, 107];
const SECOND_VIJF = [116, 117, 118, 119];
const SECOND_ZES = [113, 114, 115];
const SECOND_ZEVEN = [108, 109, 110, 111, 112];
const SECOND_ACHT = [120, 121, 122, 123];
const SECOND_NEGEN = [124, 125, 126, 127, 128];
const SECOND_TIEN = [140, 141, 142, 143];
const SECOND_ELF = [129, 130, 131];
const SECOND_TWAALF = [134, 135, 136, 137, 138, 139];

const bottomNumbers = [
  SECOND_TWAALF,
  SECOND_EEN,
  SECOND_TWEE,
  SECOND_DRIE,
  SECOND_VIER,
  SECOND_VIJF,
  SECOND_ZES,
  SECOND_ZEVEN,
  SECOND_ACHT,
  SECOND_NEGEN,
  SECOND_TIEN,
  SECOND_ELF,
];

const IT_IS = [0, 1, 2, 4, 5];
const OVER = [92, 93, 94, 95];
const VOOR = [80, 81, 82, 83];
const KWART = [67, 68, 69, 70, 71];
const HALF = [87, 88, 89, 90];
const SEPERATOR = [39];
const HOURS = [60, 61, 62];

const wordMap: Record<number, number[]> = {
  0: IT_IS,
  1: [...IT_IS, ...EEN, ...OVER],
  2: [...IT_IS, ...TWEE, ...OVER],
  3: [...IT_IS, ...DRIE, ...OVER],
  4: [...IT_IS, ...VIER, ...OVER],
  5: [...IT_IS, ...VIJF, ...OVER],
  6: [...IT_IS, ...ZES, ...OVER],
  7: [...IT_IS, ...ZEVEN, ...OVER],
  8: [...IT_IS, ...ACHT, ...OVER],
  9: [...IT_IS, ...NEGEN, ...OVER],
  10: [...IT_IS, ...TIEN, ...OVER],
  11: [...IT_IS, ...ELF, ...OVER],
  12: [...IT_IS, ...TWAALF, ...OVER],
  13: [...IT_IS, ...DERTIEN, ...SEPERATOR, ...OVER],
  14: [...IT_IS, ...VEERTIEN, ...OVER],
  15: [...IT_IS, ...KWART, ...OVER],
  16: [...IT_IS, ...ZES, ...SEPERATOR, ...TIEN, ...OVER],
  17: [...IT_IS, ...ZEVEN, ...SEPERATOR, ...TIEN, ...OVER],
  18: [...IT_IS, ...ACHT, ...TIEN, ...OVER],
  19: [...IT_IS, ...NEGEN, ...SEPERATOR, ...TIEN, ...OVER],
  20: [...IT_IS, ...TIEN, ...VOOR, ...HALF],
  21: [...IT_IS, ...NEGEN, ...VOOR, ...HALF],
  22: [...IT_IS, ...ACHT, ...VOOR, ...HALF],
  23: [...IT_IS, ...ZEVEN, ...VOOR, ...HALF],
  24: [...IT_IS, ...ZES, ...VOOR, ...HALF],
  25: [...IT_IS, ...VIJF, ...VOOR, ...HALF],
  26: [...IT_IS, ...VIER, ...VOOR, ...HALF],
  27: [...IT_IS, ...DRIE, ...VOOR, ...HALF],
  28: [...IT_IS, ...TWEE, ...VOOR, ...HALF],
  29: [...IT_IS, ...EEN, ...VOOR, ...HALF],
  30: [...IT_IS, ...HALF],
  31: [...IT_IS, ...EEN, ...OVER, ...HALF],
  32: [...IT_IS, ...TWEE, ...OVER, ...HALF],
  33: [...IT_IS, ...DRIE, ...OVER, ...HALF],
  34: [...IT_IS, ...VIER, ...OVER, ...HALF],
  35: [...IT_IS, ...VIJF, ...OVER, ...HALF],
  36: [...IT_IS, ...ZES, ...OVER, ...HALF],
  37: [...IT_IS, ...ZEVEN, ...OVER, ...HALF],
  38: [...IT_IS, ...ACHT, ...OVER, ...HALF],
  39: [...IT_IS, ...NEGEN, ...OVER, ...HALF],
  40: [...IT_IS, ...TIEN, ...OVER, ...HALF],
  41: [...IT_IS, ...NEGEN, ...SEPERATOR, ...TIEN, ...VOOR],
  42: [...IT_IS, ...ACHT, ...TIEN, ...VOOR],
  43: [...IT_IS, ...ZEVEN, ...SEPERATOR, ...TIEN, ...VOOR],
  44: [...IT_IS, ...ZES, ...SEPERATOR, ...TIEN, ...VOOR],
  45: [...IT_IS, ...KWART, ...VOOR],
  46: [...IT_IS, ...VEERTIEN, ...VOOR],
  47: [...IT_IS, ...DERTIEN, ...SEPERATOR, ...VOOR],
  48: [...IT_IS, ...TWAALF, ...VOOR],
  49: [...IT_IS, ...ELF, ...VOOR],
  50: [...IT_IS, ...TIEN, ...VOOR],
  51: [...IT_IS, ...NEGEN, ...VOOR],
  52: [...IT_IS, ...ACHT, ...VOOR],
  53: [...IT_IS, ...ZEVEN, ...VOOR],
  54: [...IT_IS, ...ZES, ...VOOR],
  55: [...IT_IS, ...VIJF, ...VOOR],
  56: [...IT_IS, ...VIER, ...VOOR],
  57: [...IT_IS, ...DRIE, ...VOOR],
  58: [...IT_IS, ...TWEE, ...VOOR],
  59: [...IT_IS, ...EEN, ...VOOR],
};

const gridSize = 40;
const gridRows = 12;
const gridColumns = 12;

const grid = Array.from({ length: gridRows }).reduce(
  (list: number[][], _, rowIndex: number) => {
    const columns = Array.from({ length: gridColumns }).map(
      (_, columnIndex) => columnIndex + rowIndex * gridColumns
    );
    // reverse uneven columns so it mimics the led wire direction
    const orderedColumns = rowIndex % 2 === 1 ? columns.reverse() : columns;
    list.push(orderedColumns);
    return list;
  },
  []
);

const getNextHour = (minutes: number, hours: number): number => {
  if (minutes <= 20) {
    return hours;
  }
  const nextHour = hours + 1;
  return nextHour === 12 ? 0 : nextHour;
};

const getLeds = (date: Date): number[] => {
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  if (minutes === 0) {
    return [...wordMap[minutes], ...topNumbers[hours], ...HOURS];
  }

  const nextHour = getNextHour(minutes, hours);
  return [...wordMap[minutes], ...bottomNumbers[nextHour]];
};

function App() {
  // time handling
  const [time, setTime] = useState(new Date());
  const currentActiveLeds = getLeds(time);
  const onAdvanceInTime = () => {
    const newDate = new Date();
    newDate.setHours(time.getHours(), time.getMinutes() + 1);
    setTime(() => newDate);
  };

  const onChangeTime =
    (timeType = "minutes" || "hours") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (value !== "") {
        const valueAsNumber = parseInt(value);
        const newDate = new Date(time);
        if (timeType === "minutes") {
          newDate.setMinutes(valueAsNumber);
        } else if (timeType === "hours") {
          newDate.setHours(valueAsNumber);
        }
        setTime(() => newDate);
      }
    };
  // debug
  const [isDebug, setDebug] = useState<boolean>(false);
  const onToggleDebug = (): void => setDebug(!isDebug);

  return (
    <>
      <button style={{ height: "auto" }} onClick={onToggleDebug}>
        debug
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button style={{ height: "auto" }} onClick={onAdvanceInTime}>
          <span>{`<`}</span>
        </button>
        <input
          style={{ width: 40, padding: "4px 8px" }}
          value={time.getHours()}
          onChange={onChangeTime("hours")}
        />
        <input
          style={{ width: 40, padding: "4px 8px" }}
          value={time.getMinutes()}
          onChange={onChangeTime("minutes")}
        />
        <button onClick={onAdvanceInTime}>
          <span>{`>`}</span>
        </button>
      </div>
      <div className="clock">
        {grid.map((row, rowIndex) => (
          <div className="clock-row" key={`row-${rowIndex}`}>
            {row.map((column, columnIndex) => {
              const renderIndex = columnIndex + rowIndex * gridColumns;
              return (
                <div
                  className="clock-column"
                  key={column}
                  style={{
                    color:
                      currentActiveLeds.indexOf(column) !== -1
                        ? "#FFF"
                        : "rgba(255,255,255,0.1)",
                    position: "relative",
                  }}
                >
                  <p>{wordGrid[renderIndex]}</p>
                  {isDebug && (
                    <span
                      style={{
                        position: "absolute",
                        color: "red",
                        fontSize: 10,
                        top: 0,
                      }}
                    >
                      {column}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
