"use client";

import Background from "@/components/Background";
import Info from "@/components/Info";
import Loading from "@/components/Loading";
import Menu from "@/components/Menu";
import Pin from "@/components/Pin";
import UserStatusButton from "@/components/UserStatusButton";
import React from "react";
import UserStatus from "../common/data/UserStatus";
import IAppContext from "../common/type/IAppContext";
import AppContext from "../common/context/AppContext";

export default function Home() {
  const [userStatus, setUserStatusTo] = React.useState<UserStatus>(
    UserStatus.LoggedOut
  );

  const getStatusClass = (): string => {
    if (typeof userStatus !== "undefined") {
      return userStatus.replace(/\s+/g, "-").toLowerCase();
    }
    return UserStatus.LoggedOut.replace(/\s+/g, "-").toLowerCase();
  };

  return (
    <AppContext.Provider value={{ userStatus, setUserStatusTo }}>
      <div id="app" className={getStatusClass()}>
        <Info id="app-info" />
        <Pin />
        <Menu />
        <Background />
        <div id="sign-in-button-wrapper">
          <UserStatusButton
            icon="fa-solid fa-arrow-right-to-arc"
            id="sign-in-button"
            userStatus={UserStatus.LoggingIn}
          />
        </div>
        <Loading />
      </div>
    </AppContext.Provider>
  );
}
