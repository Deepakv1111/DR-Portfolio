"use client";

import T from "../../utility/T";
import { useCurrentDateEffect } from "../../utility/useCurrentDateEffect";

const Time = () => {
  const date: Date = useCurrentDateEffect();
  return <span className="time">{T.format(date)}</span>;
};

export default Time;
