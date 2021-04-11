import { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import ThemeContext from "../../themeContext/ThemeContext";

import SettingsContainer from "../SettingsContainer";
import Sidebar from "../Sidebar";

import Themes from "../../components/themes/Themes";

import "./PageContentContainer.scss";

const PageContentContainer = (props) => {
  const { selectedTheme } = useContext(ThemeContext);

  return (
    <div className="page-content-container container">
      <div className="col-3  page-sidebar">
        <Sidebar />
      </div>

      <div
        className="col-9 page-content"
        style={{
          backgroundColor: selectedTheme.colors.background,
          color: selectedTheme.colors.text,
        }}
      >
        <Switch>
          <Route exact path="/">
            <div>Index</div>
          </Route>
          <Route exact path="/settings">
            <SettingsContainer />
          </Route>
          <Route exact path="/themes">
            <Themes />
          </Route>
          <Route path="*">
            <div>404 Not Found</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default PageContentContainer;
