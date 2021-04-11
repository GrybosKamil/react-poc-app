// import { useEffect, useState } from "react";
// import { setToLocal, getFromLocal } from "../utils/storage";

// import * as themesSchema from "./schema.json";

// export const useTheme = () => {
//   setToLocal("all-themes", themesSchema.default.themes);
//   const themes = getFromLocal("all-themes");
//   const themeList = Object.keys(themes).map((themeName) => themes[themeName]);

//   const [theme, setTheme] = useState(themes.light);
//   const [themeLoaded, setThemeLoaded] = useState(false);

//   useEffect(() => {
//     const localThemeId = getFromLocal("local-theme-id");
//     console.log("local theme id is:" + localThemeId);
//     let tempT = themeList.filter((x) => x.id === localThemeId)[0];
//     console.log(tempT);

//     tempT
//       ? setTheme(tempT)
//       : setThemeWithName(themesSchema.default.defaultTheme);

//     setThemeLoaded(true);
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const setThemeWithName = (themeName) => {
//     console.log("theme name :" + themeName);
//     let tempT = themeList.filter((x) => x.name === themeName)[0];
//     console.log(tempT);

//     setToLocal("local-theme-id", tempT.id);
//     setTheme(tempT);
//   };

//   const setThemeWithId = (themeId) => {
//     console.log("theme id :" + themeId);
//     let tempT = themeList.filter((x) => x.id === themeId)[0];
//     console.log(tempT);

//     setToLocal("local-theme-id", tempT.id);
//     setTheme(tempT);
//   };

//   const getThemes = () => {
//     return themes;
//   };

//   return { theme, themeLoaded, setThemeWithName, setThemeWithId, getThemes };
// };
