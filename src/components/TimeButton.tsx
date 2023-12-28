type TimeDirection = "forwards" | "backwards";

export const TimeButton: React.FC<{
  currentTime: Date;
  onChangeTime: (newTime: Date) => void;
  direction: TimeDirection;
}> = ({ currentTime, onChangeTime, direction }) => {
  const onAdvanceInTime =
    (direction: TimeDirection = "forwards") =>
    () => {
      const newDate = new Date();
      const newMinutes = direction === "forwards" ? 1 : -1;
      newDate.setHours(
        currentTime.getHours(),
        currentTime.getMinutes() + newMinutes
      );
      onChangeTime(newDate);
    };

  const icon = direction === "backwards" ? "<" : ">";
  return (
    <button
      aria-label={direction}
      onClick={onAdvanceInTime(direction)}
      style={{ height: "auto" }}
    >
      <span>{icon}</span>
    </button>
  );
};
