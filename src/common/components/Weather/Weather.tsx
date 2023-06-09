import React from "react";
import { N } from "../../data/N";
import MenuSection from "../MenuSection";
import WeatherType from "../../data/WeatherType";
import classNames from "../../utility/classNames";

const Weather: React.FC = () => {
  const getDays = (): JSX.Element[] => {
    return [
      {
        id: 1,
        name: "Mon",
        temperature: N.rand(60, 80),
        weather: WeatherType.Sunny,
      },
      {
        id: 2,
        name: "Tues",
        temperature: N.rand(60, 80),
        weather: WeatherType.Sunny,
      },
      {
        id: 3,
        name: "Wed",
        temperature: N.rand(60, 80),
        weather: WeatherType.Cloudy,
      },
      {
        id: 4,
        name: "Thurs",
        temperature: N.rand(60, 80),
        weather: WeatherType.Rainy,
      },
      {
        id: 5,
        name: "Fri",
        temperature: N.rand(60, 80),
        weather: WeatherType.Stormy,
      },
      {
        id: 6,
        name: "Sat",
        temperature: N.rand(60, 80),
        weather: WeatherType.Sunny,
      },
      {
        id: 7,
        name: "Sun",
        temperature: N.rand(60, 80),
        weather: WeatherType.Cloudy,
      },
    ].map((day: any) => {
      const getIcon = (): string | undefined => {
        switch (day.weather) {
          case WeatherType.Cloudy:
            return "fa-duotone fa-clouds";
          case WeatherType.Rainy:
            return "fa-duotone fa-cloud-drizzle";
          case WeatherType.Stormy:
            return "fa-duotone fa-cloud-bolt";
          case WeatherType.Sunny:
            return "fa-duotone fa-sun";
        }
      };

      return (
        <div key={day.id} className="day-card">
          <div className="day-card-content">
            <span className="day-weather-temperature">
              {day.temperature}
              <span className="day-weather-temperature-unit">°F</span>
            </span>
            {typeof getIcon() !== "undefined" && (
              <i
                className={classNames(
                  "day-weather-icon" + day.weather.toLowerCase(),
                  getIcon() || ""
                )}
              />
            )}
            <span className="day-name">{day.name}</span>
          </div>
        </div>
      );
    });
  };
  return (
    <MenuSection
      icon="fa-solid fa-sun"
      id="weather-section"
      scrollable
      title="How's it look out there?"
    >
      {getDays()}
    </MenuSection>
  );
};

export default Weather;
