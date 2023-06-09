export type ILogInUtility = {
  verify: (pin: string) => Promise<boolean>;
};
