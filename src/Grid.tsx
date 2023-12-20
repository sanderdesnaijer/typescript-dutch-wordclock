import { useMemo } from "react";

export const GridColumn: React.FC<{
  value: number;
  isDebug: boolean;
  isActive: boolean;
  displayValue: string;
}> = ({ value, isDebug, isActive, displayValue }) => {
  return (
    <div
      className="clock-column"
      style={{
        color: isActive ? "#FFF" : "rgba(255,255,255,0.1)",
        position: "relative",
      }}
    >
      <p>{displayValue}</p>
      {isDebug && (
        <span
          style={{
            position: "absolute",
            color: "red",
            fontSize: 10,
            top: 0,
          }}
        >
          {value}
        </span>
      )}
    </div>
  );
};

export const Grid: React.FC<{
  rowCount: number;
  columnCount: number;
  onRender: ({
    value,
    renderIndex,
  }: {
    value: number;
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
            return onRender({ renderIndex, value: column });
          })}
        </div>
      ))}
    </div>
  );
};
