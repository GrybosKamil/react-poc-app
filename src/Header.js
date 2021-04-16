import { useContext } from "react";

import ThemeContext from "./context/theme/ThemeContext";

const Header = () => {
  const { selectedTheme } = useContext(ThemeContext);

  console.log(selectedTheme);

  return (
    // <div className="header col-12">
    <div className="header" style={{ color: selectedTheme.theme.textColor }}>
      Header
    </div>
  );
};

export default Header;
