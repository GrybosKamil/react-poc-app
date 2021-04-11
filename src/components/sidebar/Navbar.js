import { NavLink } from "react-router-dom";
import { useContext } from "react";

import ThemeContext from "../../themeContext/ThemeContext";

import "./Navbar.scss";

const Navbar = () => {
  const { selectedTheme } = useContext(ThemeContext);

  const links = [
    {
      id: 1,
      path: "/",
      text: "Index",
    },
    {
      id: 2,
      path: "/settings",
      text: "Settings",
    },
    {
      id: 3,
      path: "/themes",
      text: "Themes",
    },
    {
      id: 4,
      path: "/404",
      text: "Not Found",
    },
  ];

  return (
    <div className="sidebar-links-container">
      <ul className="sidebar-links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                to={link.path}
                exact
                className="sidebar-link"
                activeClassName="active-link"
                style={{
                  backgroundColor: selectedTheme.colors.background,
                  color: selectedTheme.colors.text,
                }}
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
