import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ThemeContext from "../../context/theme/ThemeContext";

import SettingsContainer from "../SettingsContainer";

import Themes from "../../components/themes/Themes";
import Languages from "../../components/languages/Languages";

import NotFoundPage from "../../pages/errors/NotFoundPage";

import "./PageContentContainer.scss";

const PageContent = () => {
  const { selectedTheme } = useContext(ThemeContext);

  const pageContentTheme = selectedTheme.theme.pageContent;

  return (
    <div
      className="page-content"
      style={{
        backgroundColor: pageContentTheme.backgroundColor,
        color: pageContentTheme.text,
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
        <Route exact path="/languages">
          <Languages />
        </Route>
        <Route path="*">
          <NotFoundPage />
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
