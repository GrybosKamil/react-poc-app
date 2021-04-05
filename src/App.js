import {useState} from "react"

import Header from "./Header"
import Footer from "./Footer"
import PageContentContainer from "./components/PageContentContainer"

import './App.scss';

// import { ThemeProvider } from "react-bootstrap";
import { useTheme } from "./theme/useTheme";

import { ThemeProvider } from './theme/themeContext'

function App() {
  const { theme, themeLoaded, setThemeWithName, getThemes } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  console.log("hello");
  console.log(theme)


  const changeTheme = (themeName) => {
    console.log("themeName -> ", themeName)
    setThemeWithName(themeName);
    setSelectedTheme(getThemes()[themeName]);
  }

  return (
    themeLoaded &&
    <ThemeProvider theme={selectedTheme}>
      <div className="app-container">
        <div className="site-content">
          <Header />
          <PageContentContainer
            theme={theme}
            changeTheme={changeTheme}
            getThemes={getThemes} />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
