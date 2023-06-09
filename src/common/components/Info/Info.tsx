import dynamic from "next/dynamic";
import IInfoProps from "../../type/IInfoProps";

const Time = dynamic(() => import("../Time"), { ssr: false });
const WeatherSnap = dynamic(() => import("../WeatherSnap"), { ssr: false });

const Info = ({ id }: IInfoProps) => {
  return (
    <div id={id || "app-info"} className="info">
      <Time />
      <WeatherSnap />
    </div>
  );
};

export default Info;
