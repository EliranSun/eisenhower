import { useState } from "react";
import { NOW, TOMORROW, YERSTERDAY } from "../constants";
import { getTime } from "../utils";

const TimeNavigation = ({ onChange = () => {} }) => {
  const [timestamp, setTimestamp] = useState(getTime[NOW]());

  const changeTime = (direction) => {
    const newTime = getTime[direction](timestamp);
    setTimestamp(newTime);
    onChange(newTime);
  };

  return (
    <div>
      {new Date(timestamp).toDateString()}
      <div className="navigation">
        <button onClick={() => changeTime(YERSTERDAY)}>{YERSTERDAY}</button>
        <button onClick={() => changeTime(NOW)}>{NOW}</button>
        <button onClick={() => changeTime(TOMORROW)}>{TOMORROW}</button>
      </div>
    </div>
  );
};

export default TimeNavigation;
