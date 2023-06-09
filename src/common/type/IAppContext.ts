import UserStatus from "../data/UserStatus";

type IAppContext = {
  userStatus: UserStatus;
  setUserStatusTo?: (status: UserStatus) => void;
};

export default IAppContext;
