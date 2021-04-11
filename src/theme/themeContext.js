// import { createContext, useEffect, useState } from "react";
// import { useTheme } from "./useTheme";

// const themes = {
//   dark: {
//     backgroundColor: "green",
//     color: "white",
//   },
//   light: {
//     backgroundColor: "red",
//     color: "black",
//   },
// };

// const initialState = {
//   dark: false,
//   theme: themes.light,
// };

// const ThemeContext = createContext(initialState);

// function ThemeProvider({ children }) {
//   const {
//     // theme,
//     themeLoaded,
//     setThemeWithId,
//     setThemeWithName,
//     getThemes,
//   } = useTheme();

//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     const isDark = localStorage.getItem("dark") === "true";
//     setDark(isDark);
//   }, [dark]);

//   const toggle = () => {
//     console.log("toggle");
//     const isDark = !dark;
//     localStorage.setItem("dark", JSON.stringify(isDark));
//     setDark(isDark);
//   };

//   const selectTheme = (themeId) => {
//     // localStorage.setItem('selected-theme', themeId);
//     // setTheme(themes.themeId);
//     console.log(themeId);
//     setThemeWithId(themeId);
//     // toggle();
//   };

//   const theme = dark ? themes.dark : themes.light;

//   return (
//     <ThemeContext.Provider value={{ theme, dark, selectTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export { ThemeProvider, ThemeContext };
