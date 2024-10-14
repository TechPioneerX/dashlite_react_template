import React from "react";
import classNames from "classnames";
import Toggle from "../sidebar/Toggle";
import User from "./dropdown/user/User";
import Notification from "./dropdown/notification/Notification";
import ChatDropdown from "./dropdown/chat/Chat";
import Logo from "../logo/Logo";
import { Icon } from "../../components/Component";

const Header = ({ fixed, sidebarToggle, setVisibility }) => {
  const headerClass = classNames({
    "nk-header": true,
    "nk-header-fixed": fixed,
  });

  return (
    <div className={headerClass}>
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ml-n1">
            <Toggle className="nk-nav-toggle nk-quick-nav-icon" icon="menu" click={sidebarToggle} />
          </div>
          <div className="nk-header-brand d-xl-none">
            <Logo />
          </div>
          <div className="nk-header-search ml-3 ml-xl-0">
            <Icon name="search" />
            <input
              className="form-control border-transparent form-focus-none"
              type="text"
              placeholder="Search anything"
            />
          </div>
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="chats-dropdown hide-mb-xs" onClick={() => setVisibility(false)}>
                <ChatDropdown />
              </li>
              <li className="notification-dropdown" onClick={() => setVisibility(false)}>
                <Notification />
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
