import { useMemo } from "react";

export const ClockLetter: React.FC<{
  index: number;
  isDebug: boolean;
  isActive: boolean;
  children?: React.ReactNode;
}> = ({ index, isDebug, isActive, children }) => {
  return (
    <div
      className="clock-column"
      style={{
        color: isActive ? "#FFF" : "rgba(255,255,255,0.1)",
        position: "relative",
      }}
    >
      <span>{children}</span>
      {isDebug && (
        <span
          style={{
            position: "absolute",
            color: "red",
            fontSize: 10,
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          {index}
        </span>
      )}
    </div>
  );
};

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
