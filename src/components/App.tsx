import { useState } from "react";
import { ClockGrid } from "./ClockGrid";
import "./App.css";

import { gridColumns, gridRows, wordGrid, wordMap } from "../dutchClock12x12";
import TimeControl from "./TimeControl";

function App() {
  // debug
  const [isDebug, setDebug] = useState<boolean>(false);
  const onToggleDebug = (): void => setDebug(!isDebug);
  const [time, setTime] = useState<Date>(new Date());

  return (
    <>
      <button style={{ height: "auto" }} onClick={onToggleDebug}>
        debug
      </button>
      <TimeControl time={time} setTime={setTime} />
      <ClockGrid
        columnCount={gridColumns}
        rowCount={gridRows}
        isDebug={isDebug}
        time={time}
        wordMap={wordMap}
        wordGrid={wordGrid}
      ></ClockGrid>
    </>
  );
}

export default App;
