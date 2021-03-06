import { useState, createContext } from "react";
// import { useState, useEffect, useLayoutEffect, createContext } from "react";

import { getFromLocal, setToLocal } from "../../utils/storage";

import * as themesSchema from "./themes.json";

const ThemeContext = createContext({
  allThemes: {},
  selectedThemeName: "",
  selectedTheme: {},
  setThemeWithName: () => {},
});

export default ThemeContext;

export function ThemeProvider(props) {
  const allThemes = getFromLocal("all-themes") || themesSchema.default.themes;
  // const allThemes = themesSchema.default.themes;
  setToLocal("all-themes", allThemes);

  const [selectedThemeName, setSelectedThemeName] = useState(
    getFromLocal("selected-theme-name") || themesSchema.default.defaultThemeName
  );
  setToLocal("selected-theme-name", selectedThemeName);

  // useLayoutEffect(() => {
  //   const selectedThemeName = getFromLocal("selected-theme-name");

  //   if (selectedThemeName) {
  //     setThemeN(selectedTheme);
  //   }
  // }, [themeName]);

  // useEffect(() => {
  //   console.log("changed theme name");
  //   setToLocal("selected-theme-name", themeName);
  // }, [themeName]);

  const setThemeWithName = (name) => {
    console.log("Set theme: " + name);
    setToLocal("selected-theme-name", name);
    setSelectedThemeName(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        allThemes,
        selectedTheme: allThemes[selectedThemeName],
        setThemeWithName,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
