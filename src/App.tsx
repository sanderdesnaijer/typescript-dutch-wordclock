// TODO;
// check all combinations
// 18
// 0:35
// find nice font

import { useState } from "react";

import "./App.css";

const grid = `
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
TIENTWAALFRT`
  .split("\n")
  .filter((row) => row.length > 0);

// numbers first
const EEN = [7, 8, 9];
const TWEE = [12, 13, 14, 15];
const DRIE = [16, 17, 18, 19];
const VIER = [20, 21, 22, 23];
const VIJF = [24, 25, 26, 27];
const ZES = [28, 29, 30];
const ZEVEN = [31, 32, 33, 34, 35];
const ACHT = [48, 49, 50, 51];
const NEGEN = [39, 40, 41, 42, 43];
const TIEN = [56, 57, 58, 59];
const ELF = [65, 66, 67];
const TWAALF = [73, 74, 75, 76, 77, 78];
const DERTIEN = [36, 37, 38, ...TIEN];
const VEERTIEN = [52, 53, 54, 55, ...TIEN];
const firstNumbersMap = [
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

// numbers second
const SECOND_EEN = [93, 94, 95];
const SECOND_TWEE = [96, 97, 98, 99];
const SECOND_DRIE = [100, 101, 102, 103];
const SECOND_VIER = [104, 105, 106, 107];
const SECOND_VIJF = [108, 109, 110, 111];
const SECOND_ZES = [112, 113, 114];
const SECOND_ZEVEN = [115, 116, 117, 118, 119];
const SECOND_ACHT = [120, 121, 122, 123];
const SECOND_NEGEN = [124, 125, 126, 127, 128];
const SECOND_TIEN = [132, 133, 134, 135];
const SECOND_ELF = [129, 130, 131];
const SECOND_TWAALF = [136, 137, 138, 139, 140, 141];

const secondNumbersMap = [
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
const OVER = [84, 85, 86, 87];
const VOOR = [80, 81, 82, 83];
const KWART = [60, 61, 62, 63, 64];
const HALF = [89, 90, 91, 92];
const SEPERATOR = [44];
const HOURS = [69, 70, 71];

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
    return [...wordMap[minutes], ...firstNumbersMap[hours], ...HOURS];
  }

  const nextHour = getNextHour(minutes, hours);
  return [...wordMap[minutes], ...secondNumbersMap[nextHour]];
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
  // console.log(grid);
  return (
    <>
      <button onClick={onToggleDebug}>debug</button>
      <button onClick={onAdvanceInTime}>
        <span>{`>`}</span>
      </button>
      <input
        style={{ width: 40 }}
        value={time.getHours()}
        onChange={onChangeTime("hours")}
      />
      <input
        style={{ width: 40 }}
        value={time.getMinutes()}
        onChange={onChangeTime("minutes")}
      />
      <ul style={{ width: 12 * gridSize, overflow: "hidden", fontSize: 26 }}>
        {grid.map((row, rowIndex) =>
          [...row].map((column, columIndex) => {
            const index = columIndex + rowIndex * 12;

            return (
              <li
                style={{
                  listStyle: "none",
                  float: "left",
                  width: gridSize,
                  height: gridSize,
                  color:
                    currentActiveLeds.indexOf(index) !== -1
                      ? "#FFF"
                      : "rgba(255,255,255,0.1)",
                }}
                key={index}
              >
                {column}
                {isDebug && (
                  <span
                    style={{ position: "absolute", color: "red", fontSize: 10 }}
                  >
                    {index}
                  </span>
                )}
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}

export default App;
