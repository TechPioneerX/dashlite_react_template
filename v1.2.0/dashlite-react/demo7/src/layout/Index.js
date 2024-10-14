import React, { useEffect, useState } from "react";
import Pages from "../route/Index";
import Sidebar from "./sidebar/Sidebar";
import Head from "./head/Head";
import Header from "./header/Header";
import classNames from "classnames";
import LeftPanel from "./left-panel/LeftPanel";

const Layout = () => {
  //Sidebar
  const [mobileView, setMobileView] = useState();
  const [visibility, setVisibility] = useState(false);
  const [currentMenuTab, setCurrentMenuTab] = useState("Dashboards");
  const [themeState] = useState({
    main: "default",
    sidebar: "white",
    apps: "light",
    skin: "light",
  });

  //Adds classes to body
  useEffect(() => {
    document.body.className = `nk-body ui-rounder has-sidebar has-touch nk-nio-theme ${visibility ? "nav-shown" : ""} ${
      themeState.skin === "dark" ? "dark-mode" : ""
    }`;
  }, [themeState, visibility]);

  useEffect(() => {
    viewChange();
  }, []);

  // function to toggle sidebar
  const toggleSidebar = (e) => {
    e.preventDefault();
    if (visibility === false) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  // function to change the design view under 1200 px
  const viewChange = () => {
    if (window.innerWidth < 1200) {
      setMobileView(true);
    } else {
      setMobileView(false);
      setVisibility(false);
    }
  };
  window.addEventListener("load", viewChange);
  window.addEventListener("resize", viewChange);

  const sidebarClass = classNames({
    "nk-sidebar": "true",
    "nk-sidebar-mobile": mobileView,
    "nk-sidebar-active": visibility && mobileView,
  });

  return (
    <React.Fragment>
      <Head title="Loading" />
      <div className="nk-app-root">
        <div className={sidebarClass}>
          <LeftPanel theme={themeState.apps} setCurrentMenuTab={setCurrentMenuTab} setVisibility={setVisibility} />
          <Sidebar
            sidebarToggle={toggleSidebar}
            mobileView={mobileView}
            theme={themeState.sidebar}
            currentMenuTab={currentMenuTab}
          />
        </div>
        {visibility && mobileView && <div className="nk-sidebar-overlay" onClick={toggleSidebar}></div>}
        <div className="nk-main">
          <div className="nk-wrap">
            <Header fixed sidebarToggle={toggleSidebar} setVisibility={setVisibility} />
            <Pages />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
