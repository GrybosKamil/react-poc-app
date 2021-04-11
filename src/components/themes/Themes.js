import { useContext } from "react";
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

  return (
    <div>
      <div>Themes</div>

      {themes.map((theme) => (
        <span
          key={theme.id}
          style={{ width: widthOfThemeButton, display: "inline-block" }}
        >
          {theme.name === selectedTheme.name && (
            <div
              style={{
                border: "5px solid green",
                borderRadius: "15px",
              }}
            >
              Active
            </div>
          )}

          <button
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              width: "100%",
            }}
            onClick={() => setThemeWithName(theme.name)}
          >
            {selectedLanguage.themes.useTheme[theme.name]}
          </button>
        </span>
      ))}
    </div>
  );
};

export default Themes;
