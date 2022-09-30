import { useEffect, useState } from "react";

const _time = new Date().toLocaleTimeString();
const _date = new Date().toLocaleDateString();

function Clock() {
  const [time, setTime] = useState(_time);
  const [date, setDate] = useState(_date);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="text-[8rem] text-center font-extralight">
      <p className="cursor-default">{time}</p>
      <p className="text-4xl ">{date}</p>
    </div>
  );
}

export default Clock;
