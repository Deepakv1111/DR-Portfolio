import { ITimeUtility } from "../type/ITimeUtility";

const T: ITimeUtility = {
  format: (date: Date): string => {
    const hours: string | number = T.formatHours(date.getHours()),
      minutes: string | number = date.getMinutes(),
      seconds: string | number = date.getSeconds();

    return `${hours}:${T.formatSegment(Number(minutes))}`;
  },
  formatHours: (hours: number): string => {
    return (hours % 12 === 0 ? 12 : hours % 12).toString();
  },
  formatSegment: (segment: number): string => {
    return (segment < 10 ? `0${segment}` : segment).toString();
  },
};

export default T;
