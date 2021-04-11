import { useContext } from "react";
import ThemeContext from "../theme/ThemeContext";

import Navbar from "./sidebar/Navbar";

import "./Sidebar.scss";

const Sidebar = () => {
  const { allThemes, setThemeWithName } = useContext(ThemeContext);

  const themes = Object.keys(allThemes).map(
    (themeName) => allThemes[themeName]
  );

  return (
    <div>
      <div className="sidebar-title">Sidebar</div>
      <Navbar />

      {themes.map((theme) => (
        <button
          style={{
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
            width: "100%",
          }}
          key={theme.id}
          onClick={() => setThemeWithName(theme.name)}
        >
          Set '{theme.name}' theme
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
