import React from "react";
import UserStatus from "../data/UserStatus";
import Info from "./Info";
import Movies from "./Movies";
import QuickNav from "./QuickNav";
import Reminder from "./Reminder";
import Restaurants from "./Restaurants";
import Tools from "./Tools";
import UserStatusButton from "./UserStatusButton";
import Weather from "./Weather";

const Menu: React.FC = () => {
  return (
    <div id="app-menu">
      <div id="app-menu-content-wrapper">
        <div id="app-menu-content">
          <div id="app-menu-content-header">
            <div className="app-menu-content-header-section">
              <Info id="app-menu-info" />
              <Reminder />
            </div>
            <div className="app-menu-content-header-section">
              <UserStatusButton
                icon="fa-solid fa-arrow-right-from-arc"
                id="sign-out-button"
                userStatus={UserStatus.LoggedOut}
              />
            </div>
          </div>
          <QuickNav />
          <a
            id="youtube-link"
            className="clear-button"
            href="https://www.youtube.com/c/Hyperplexed"
            target="_blank"
          >
            <i className="fa-brands fa-youtube" />
            <span>Hyperplexed</span>
          </a>
          <Weather />
          <Restaurants />
          <Tools />
          <Movies />
        </div>
      </div>
    </div>
  );
};

export default Menu;
