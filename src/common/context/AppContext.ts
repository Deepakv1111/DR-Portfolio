import React from "react";
import IAppContext from "../type/IAppContext";
import UserStatus from "../data/UserStatus";

const AppContext = React.createContext<IAppContext>({
  userStatus: UserStatus.LoggedOut,
});

export default AppContext;
