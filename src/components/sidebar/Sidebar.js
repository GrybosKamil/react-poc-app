import { useContext } from "react";

import ThemeContext from "../../context/theme/ThemeContext";

import Navbar from "./Navbar";

import "./Sidebar.scss";

const Sidebar = () => {
  const { selectedTheme } = useContext(ThemeContext);

  const sidebarTheme = selectedTheme.theme.sidebar;

  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: sidebarTheme.backgroundColor,
        color: sidebarTheme.textColor,
      }}
    >
      <div className="sidebar-title">Sidebar</div>
      <Navbar />
    </div>
  );
};

export default Sidebar;
