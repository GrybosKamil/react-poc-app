import React from "react"
import { Route, Switch } from "react-router-dom"
import { useContext } from 'react';
// import { ThemeContext } from 'styled-components';

import './PageContentContainer.scss';

import SettingsContainer from "./SettingsContainer"
import Sidebar from "./Sidebar"

import { ThemeContext } from '../theme/themeContext'

const PageContentContainer = (props) => {
    const themeContext = useContext(ThemeContext);
    console.log("theme context");
    console.log(themeContext);

    const themes = Object.keys(props.getThemes()).map(themeName => props.getThemes()[themeName]);
    console.log("themes -> ", themes);

    const currentTheme = {colors:{background: "red"}};

    const { theme, toggle, dark } = React.useContext(ThemeContext)

    return (
        <div className="page-content-container container">
            <div className="col-3  page-sidebar">
                <Sidebar />
            </div>

            <div className="col-9 page-content" style={{backgroundColor: theme.backgroundColor}}>
            {/* <div className="col-9 page-content" style={{backgroundColor: currentTheme.colors.background}}> */}
                {themes.map(theme => (
                        <button
                            style={{
                                backgroundColor: theme.colors.background,
                                color: theme.colors.text
                            }}
                            key={theme.id}
                            onClick={toggle}>
                             {/* onClick={() => props.changeTheme(theme.name)}> */}
                            Set '{theme.name}'
                        </button>
                    ))
                }

                <Switch>
                    <Route exact path="/">
                        <div>
                            Index
                            </div>
                    </Route>
                    <Route exact path="/settings">
                        <SettingsContainer />
                    </Route>
                    <Route path="*">
                        <div>
                            404 Not Found
                            </div>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default PageContentContainer;