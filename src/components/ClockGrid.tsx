import { useMemo } from "react";

export const ClockGrid: React.FC<{
  rowCount: number;
  columnCount: number;
  onRender: ({
    index,
    renderIndex, // index as displayed on screen
  }: {
    index: number;
    renderIndex: number;
  }) => React.ReactElement;
}> = ({ rowCount = 12, columnCount = 12, onRender }) => {
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

  return (
    <div className="clock">
      {grid.map((row, rowIndex) => (
        <div className="clock-row" key={`row-${rowIndex}`}>
          {row.map((column, columnIndex) => {
            const renderIndex = columnIndex + rowIndex * columnCount;
            return onRender({ renderIndex, index: column });
          })}
        </div>
      ))}
    </div>
  );
};
