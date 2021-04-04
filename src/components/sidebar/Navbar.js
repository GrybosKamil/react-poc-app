import { NavLink } from "react-router-dom"

import './Navbar.scss';

const Navbar = () => {
    const links = [
        {
            id: 1,
            path: "/",
            text: "Index"
        },
        {
            id: 2,
            path: "/settings",
            text: "Settings"
        },
        {
            id: 3,
            path: "/404",
            text: "Not Found"
        }
    ]

    return (
        <div className="sidebar-links-container">
            <ul className="sidebar-links">
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink
                                to={link.path}
                                exact
                                className="sidebar-link"
                                activeClassName="active-link">
                                {link.text}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Navbar;