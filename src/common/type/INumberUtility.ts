export type INumberUtility = {
  clamp: (min: number, value: number, max: number) => number;
  rand: (min: number, max: number) => number;
};
