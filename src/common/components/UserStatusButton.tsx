import React, { FC, useContext } from "react";
import { IUserStatusButton } from "../type/IUserStatusButton";
import AppContext from "../context/AppContext";

const UserStatusButton: FC<IUserStatusButton> = (props: IUserStatusButton) => {
  const { userStatus, setUserStatusTo } = useContext(AppContext);

  const handleOnClick = (): void => {
    if (typeof setUserStatusTo !== "undefined") {
      setUserStatusTo(props.userStatus);
    }
  };

  return (
    <button
      id={props.id}
      className="user-status-button clear-button"
      disabled={userStatus === props.userStatus}
      type="button"
      onClick={handleOnClick}
    >
      <i className={props.icon} />
    </button>
  );
};

export default UserStatusButton;
