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
