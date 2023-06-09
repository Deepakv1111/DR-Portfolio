"use client";

import { useState } from "react";
import { N } from "../../data/N";

const WeatherSnap = () => {
  const [temperature] = useState<number>(N.rand(65, 85));

  return (
    <span className="weather">
      <i className="weather-type fa-duotone fa-sun" />
      <span className="weather-temperature-value">{temperature}</span>
      <span className="weather-temperature-unit">°F</span>
    </span>
  );
};

export default WeatherSnap;
