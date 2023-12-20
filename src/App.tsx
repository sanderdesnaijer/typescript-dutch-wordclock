import { useState } from "react";
import { TimeButton } from "./TimeButton";
import { TimeInput } from "./TimeInput";
import { Grid, GridColumn } from "./Grid";
import "./App.css";

import {
  HOURS,
  WordMap,
  bottomNumbers,
  gridColumns,
  gridRows,
  topNumbers,
  wordGrid,
  wordMap,
} from "./dutchClock12x12";

const getNextHour = (minutes: number, hours: number): number => {
  if (minutes <= 20) {
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

function App() {
  // debug
  const [isDebug, setDebug] = useState<boolean>(false);
  const onToggleDebug = (): void => setDebug(!isDebug);
  const [time, setTime] = useState(new Date());
  const currentActiveLeds = getLeds(time, wordMap);

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
        <TimeButton
          direction="backwards"
          currentTime={time}
          onChangeTime={setTime}
        />

        <TimeInput timeType="hours" currentTime={time} onChangeTime={setTime} />
        <TimeInput
          timeType="minutes"
          currentTime={time}
          onChangeTime={setTime}
        />
        <TimeButton
          direction="forwards"
          currentTime={time}
          onChangeTime={setTime}
        />
      </div>
      <Grid
        columnCount={gridColumns}
        rowCount={gridRows}
        onRender={({ index, renderIndex }) => (
          <GridColumn
            key={index}
            isActive={currentActiveLeds.indexOf(index) !== -1}
            index={index}
            displayValue={wordGrid[renderIndex]}
            isDebug={isDebug}
          />
        )}
      ></Grid>
    </>
  );
}

export default App;
