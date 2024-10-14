import React from "react";
import classNames from "classnames";
import SimpleBar from "simplebar-react";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Toggle from "./Toggle";
import { DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Icon, LangDropdown } from "../../components/Component";

const Sidebar = ({ fixed, theme, className, sidebarToggle, mobileView, ...props }) => {
  const classes = classNames({
    "nk-sidebar": true,
    "nk-sidebar-fixed": fixed,
    [`is-light`]: theme === "white",
    [`is-${theme}`]: theme !== "white" && theme !== "light",
    [`${className}`]: className,
  });

  return (
    <div className={classes}>
      <div className="nk-sidebar-element nk-sidebar-head">
        <div className="nk-sidebar-brand">
          <Logo />
        </div>
        <div className="nk-menu-trigger mr-n2">
          <Toggle className="nk-nav-toggle nk-quick-nav-icon d-xl-none" icon="arrow-left" click={sidebarToggle} />
        </div>
      </div>
      <SimpleBar className="nk-sidebar-body">
        <div className="nk-sidebar-content">
          <div className="nk-sidebar-menu">
            <Menu sidebarToggle={sidebarToggle} mobileView={mobileView} />
          </div>
          <div className="nk-sidebar-footer">
            <ul className="nk-menu nk-menu-footer">
              <li className="nk-menu-item">
                <a href="#link" className="nk-menu-link" onClick={(ev) => ev.preventDefault()}>
                  <span className="nk-menu-icon">
                    <Icon name="help-alt"></Icon>
                  </span>
                  <span className="nk-menu-text">Support</span>
                </a>
              </li>
              <li className="nk-menu-item ml-auto">
                <UncontrolledDropdown direction="up">
                  <DropdownToggle
                    tag="a"
                    href="#toggle"
                    onClick={(ev) => ev.preventDefault()}
                    className="nk-menu-link dropdown-indicator has-indicator"
                  >
                    <span className="nk-menu-icon">
                      <Icon name="globe"></Icon>
                    </span>
                    <span className="nk-menu-text">English</span>
                  </DropdownToggle>
                  <LangDropdown size="sm" />
                </UncontrolledDropdown>
              </li>
            </ul>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};
export default Sidebar;
