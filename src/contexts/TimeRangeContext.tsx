import { createContext, useContext, useState } from "react";

export type TimeRangeKey = string;

const TimeRangeContext = createContext<{
  range: TimeRangeKey;
  setRange: (r: TimeRangeKey) => void;
}>({
  range: "last_3h",
  setRange: () => {},
});

export const TimeRangeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [range, setRange] = useState<TimeRangeKey>("last_3h");
  return (
    <TimeRangeContext.Provider value={{ range, setRange }}>
      {children}
    </TimeRangeContext.Provider>
  );
};

export const useTimeRange = () => useContext(TimeRangeContext);
