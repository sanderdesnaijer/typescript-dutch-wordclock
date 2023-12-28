type TimeType = "minutes" | "hours";

export const TimeInput: React.FC<{
  currentTime: Date;
  onChangeTime: (newTime: Date) => void;
  timeType: TimeType;
}> = ({ currentTime, onChangeTime, timeType }) => {
  const onChangeValue =
    (timeType: TimeType) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (value !== "") {
        const valueAsNumber = parseInt(value);
        const newDate = new Date(currentTime);
        if (timeType === "minutes") {
          newDate.setMinutes(valueAsNumber);
        } else if (timeType === "hours") {
          newDate.setHours(valueAsNumber);
        }
        onChangeTime(newDate);
      }
    };

  const value =
    timeType === "hours" ? currentTime.getHours() : currentTime.getMinutes();

  return (
    <input
      style={{ width: 40, padding: "4px 8px" }}
      value={value}
      onChange={onChangeValue(timeType)}
    />
  );
};
