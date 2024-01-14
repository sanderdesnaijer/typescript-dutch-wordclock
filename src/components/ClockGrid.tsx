import { useMemo } from "react";
import { HOURS, WordMap, bottomNumbers, topNumbers } from "../dutchClock12x12";
import { ClockLetter } from "./ClockLetter";

const getNextHour = (minutes: number, hours: number): number => {
  if (minutes < 20) {
    return hours;
  }
  const nextHour = hours + 1;
  return nextHour === 12 ? 0 : nextHour;
};

const getLeds = (date: Date, wordMap: WordMap): number[] => {
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  if (minutes === 0) {
    return [...wordMap[minutes], ...topNumbers[hours], ...HOURS];
  }

  const nextHour = getNextHour(minutes, hours);
  return [...wordMap[minutes], ...bottomNumbers[nextHour]];
};

export const ClockGrid: React.FC<{
  rowCount: number;
  columnCount: number;
  time: Date;
  isDebug: boolean;
  wordMap: WordMap;
  wordGrid: string[];
}> = ({
  rowCount = 12,
  columnCount = 12,
  time,
  isDebug,
  wordMap,
  wordGrid,
}) => {
  const grid = useMemo(
    () =>
      Array.from({ length: rowCount }).reduce(
        (list: number[][], _, rowIndex: number) => {
          const columns = Array.from({ length: columnCount }).map(
            (_, columnIndex) => columnIndex + rowIndex * columnCount
          );
          // reverse uneven columns so it mimics the led wire direction
          const orderedColumns =
            rowIndex % 2 === 1 ? columns.reverse() : columns;
          list.push(orderedColumns);
          return list;
        },
        []
      ),
    [rowCount, columnCount]
  );

  const currentActiveLeds = getLeds(time, wordMap);

  console.log(currentActiveLeds);

  return (
    <div className="clock">
      {grid.map((row, rowIndex) => (
        <div className="clock-row" key={`row-${rowIndex}`}>
          {row.map((column, columnIndex) => {
            const renderIndex = columnIndex + rowIndex * columnCount;

            return (
              <ClockLetter
                key={column}
                isActive={currentActiveLeds.indexOf(column) !== -1}
                index={column}
                isDebug={isDebug}
              >
                {wordGrid[renderIndex]}
              </ClockLetter>
            );
          })}
        </div>
      ))}
    </div>
  );
};
