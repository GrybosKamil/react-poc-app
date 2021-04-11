import { useContext } from "react";
import ThemeContext from "../../context/theme/ThemeContext";
import LanguageContext from "../../context/language/LanguageContext";

const Languages = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const { allLanguages, selectedLanguage, setLanguageWithName } = useContext(
    LanguageContext
  );

  const languages = Object.keys(allLanguages).map(
    (languageName) => allLanguages[languageName]
  );

  const widthOfLanguageButton = (1 / languages.length) * 100 + "%";

  return (
    <div>
      <div>{selectedLanguage.sidebar.languages}</div>

      {languages.map((language) => (
        <span
          key={language.id}
          style={{ width: widthOfLanguageButton, display: "inline-block" }}
        >
          {language.name === selectedLanguage.name && (
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
              backgroundColor: selectedTheme.colors.background,
              color: selectedTheme.colors.text,
              width: "100%",
            }}
            onClick={() => setLanguageWithName(language.name)}
          >
            {language.setThisLanguage}
          </button>
        </span>
      ))}
    </div>
  );
};

export default Languages;
