import { TimeButton } from "./TimeButton";
import { TimeInput } from "./TimeInput";

const TimeControl: React.FC<{ time: Date; setTime: (time: Date) => void }> = ({
  time,
  setTime,
}) => {
  return (
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
      <TimeInput timeType="minutes" currentTime={time} onChangeTime={setTime} />
      <TimeButton
        direction="forwards"
        currentTime={time}
        onChangeTime={setTime}
      />
    </div>
  );
};

export default TimeControl;
