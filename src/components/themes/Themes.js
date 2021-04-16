import { useEffect, useContext, useRef, createRef } from "react";
import { Button } from "react-bootstrap";

import lodash from "lodash";
import VanillaTilt from "vanilla-tilt";
import { flatten } from "flat";

import ThemeContext from "../../context/theme/ThemeContext";
import LanguageContext from "../../context/language/LanguageContext";

const Themes = () => {
  const { allThemes, selectedTheme, setThemeWithName } = useContext(
    ThemeContext
  );
  const { selectedLanguage } = useContext(LanguageContext);

  const themes = Object.keys(allThemes).map(
    (themeName) => allThemes[themeName]
  );

  const widthOfThemeButton = (1 / themes.length) * 100 + "%";

  const tilts = useRef([]);
  tilts.current = themes.map((_, i) => tilts.current[i] ?? createRef(null));

  useEffect(() => {
    const options = {
      scale: 1.1,
      speed: 5000,
      max: 20,
      perspective: 600,
      reverse: true,
      glare: true,
      maxGlare: 0.5,
    };

    const vanillaTilts = [];
    for (const tiltRef of tilts.current) {
      vanillaTilts.push(new VanillaTilt(tiltRef.current, options));
    }

    return () => {
      for (const vanillaTilt of vanillaTilts) {
        vanillaTilt.destroy();
      }
    };
  }, []);

  const themeNestedKeys = Object.keys(flatten(selectedTheme.theme));

  const themesTheme = selectedTheme.theme.pageContent.themes;

  return (
    <div>
      <div style={{ color: selectedTheme.theme.pageContent.textColor }}>
        Themes
      </div>
      {themes.map((theme, i) => (
        <div
          key={theme.id}
          style={{
            width: widthOfThemeButton,
            display: "inline-block",
            padding: "15px",
          }}
        >
          {theme.name === selectedTheme.name && (
            <div
              style={{
                border: "5px solid green",
                borderRadius: "15px",
                borderColor: themesTheme.activeTheme.borderColor,
                color: themesTheme.activeTheme.textColor,
              }}
            >
              Active
            </div>
          )}

          <Button
            ref={tilts.current[i]}
            style={{
              backgroundColor: theme.theme.backgroundColor,
              color: theme.theme.textColor,
              width: "100%",
            }}
            active={theme.name === selectedTheme.name}
            onClick={() => setThemeWithName(theme.name)}
          >
            {selectedLanguage.themes.useTheme[theme.name]}
          </Button>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <table
          style={{ color: selectedTheme.theme.pageContent.themes.textColor }}
        >
          <thead>
            <tr>
              <th>Elem ID</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {themeNestedKeys.map((elem) => (
              <tr key={elem}>
                <td>{elem}</td>
                <td>{lodash.get(selectedTheme.theme, elem)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Themes;
