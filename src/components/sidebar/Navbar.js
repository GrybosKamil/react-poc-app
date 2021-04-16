import { useContext } from "react";
import { NavLink } from "react-router-dom";

import ThemeContext from "../../context/theme/ThemeContext";
import LanguageContext from "../../context/language/LanguageContext";

import "./Navbar.scss";

const Navbar = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const { selectedLanguage } = useContext(LanguageContext);

  const links = [
    {
      id: 1,
      path: "/",
      text: "index",
    },
    {
      id: 2,
      path: "/settings",
      text: "settings",
    },
    {
      id: 3,
      path: "/themes",
      text: "themes",
    },
    {
      id: 4,
      path: "/languages",
      text: "languages",
    },
    {
      id: 404,
      path: "/404",
      text: "notFound",
    },
  ];

  const navbarTheme = selectedTheme.theme.sidebar.navbar;

  return (
    <div className="sidebar-links-container">
      <ul className="sidebar-links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                to={link.path}
                exact={link.path === "/"}
                className={"sidebar-link " + link.text}
                activeClassName="active-link"
                style={{
                  textTransform: navbarTheme.textTransform,
                  backgroundColor: navbarTheme.backgroundColor,
                  color: navbarTheme.textColor,
                }}
              >
                {selectedLanguage.sidebar[link.text]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
