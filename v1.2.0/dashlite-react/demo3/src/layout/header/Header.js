import React from "react";
import classNames from "classnames";
import Toggle from "../sidebar/Toggle";
import User from "./dropdown/user/User";
import Notification from "./dropdown/notification/Notification";
import AppDropdown from "./dropdown/app/App";
import ChatDropdown from "./dropdown/chat/Chat";
import { Icon } from "../../components/Component";
import { Link } from "react-router-dom";

const Header = ({ fixed, theme, className, sidebarToggle, setVisibility }) => {
  const headerClass = classNames({
    "nk-header": true,
    "nk-header-fixed": fixed,
    [`is-light`]: theme === "white",
    [`is-${theme}`]: theme !== "white" && theme !== "light",
    [`${className}`]: className,
  });
  let currentUrl;

  if (window.location.pathname !== undefined) {
    currentUrl = window.location.pathname;
  } else {
    currentUrl = null;
  }
  return (
    <div className={headerClass}>
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ml-n1">
            <Toggle className="nk-nav-toggle nk-quick-nav-icon" icon="menu" click={sidebarToggle} />
          </div>
          <div className="nk-header-app-name">
            <div className="nk-header-app-logo">
              <Icon name="dashlite" className="bg-purple-dim"></Icon>
            </div>
            <div className="nk-header-app-info">
              <span className="sub-text">DashLite</span>
              <span className="lead-text">Dashboard</span>
            </div>
          </div>
          <div className="nk-header-menu is-light">
            <div className="nk-header-menu-inner">
              <ul className="nk-menu nk-menu-main">
                <li
                  className={`nk-menu-item ${currentUrl === process.env.PUBLIC_URL + "/" ? "active current-page" : ""}`}
                >
                  <Link to={`${process.env.PUBLIC_URL}/`} className="nk-menu-link">
                    <span className="nk-menu-text">Overview</span>
                  </Link>
                </li>
                <li
                  className={`nk-menu-item ${
                    currentUrl === process.env.PUBLIC_URL + "/components" ? "active current-page" : ""
                  }`}
                >
                  <Link to={`${process.env.PUBLIC_URL}/components`} className="nk-menu-link">
                    <span className="nk-menu-text">Components</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="chats-dropdown hide-mb-xs" onClick={() => setVisibility(false)}>
                <ChatDropdown />
              </li>
              <li className="notification-dropdown mr-n1" onClick={() => setVisibility(false)}>
                <Notification />
              </li>
              <li className="list-apps-dropdown d-lg-none" onClick={() => setVisibility(false)}>
                <AppDropdown />
              </li>
              <li className="user-dropdown" onClick={() => setVisibility(false)}> 
                <User />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
