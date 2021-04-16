import { useContext } from "react";

import ThemeContext from "./context/theme/ThemeContext";

const Footer = () => {
  const { selectedTheme } = useContext(ThemeContext);

  return (
    // <div className="footer col-12">
    <div className="footer" style={{ color: selectedTheme.theme.textColor }}>
      Footer
    </div>
  );
};

export default Footer;
