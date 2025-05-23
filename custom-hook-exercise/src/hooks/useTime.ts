import { useEffect, useState } from 'react'

function useTime(type: "day" | "hour"){
  const [ time, setTime ] = useState<string>("")

  useEffect(() => {
    const now = new Date();

    if (type === "day") {
      const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
      setTime(weekday);
    } else if (type === "hour") {
      setTime(now.getHours().toString());
    }
  }, [type]);
  return time;
}

export default useTime