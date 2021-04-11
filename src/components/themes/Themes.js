import { useContext } from "react";
import ThemeContext from "../../context/theme/ThemeContext";

const Themes = () => {
  const { allThemes, selectedTheme, setThemeWithName } = useContext(
    ThemeContext
  );

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
          {theme.name === selectedTheme.name && <div>Active</div>}

          <button
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              width: "100%",
            }}
            onClick={() => setThemeWithName(theme.name)}
          >
            Set '{theme.name}' theme
          </button>
        </span>
      ))}
    </div>
  );
};

export default Themes;
