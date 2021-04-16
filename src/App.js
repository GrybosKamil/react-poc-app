import { useContext } from "react";

import ThemeContext from "./context/theme/ThemeContext";

import Header from "./Header";
import Footer from "./Footer";
import PageContentContainer from "./components/pageContent/PageContentContainer";

import "./App.scss";

const App = () => {
  const { selectedTheme } = useContext(ThemeContext);

  return (
    <div
      className="app-container"
      style={{
        backgroundColor: selectedTheme.theme.backgroundColor,
        color: selectedTheme.theme.text,
      }}
    >
      <div className="site-content">
        <Header />
        <PageContentContainer />
        <Footer />
      </div>
    </div>
  );
};

export default App;
