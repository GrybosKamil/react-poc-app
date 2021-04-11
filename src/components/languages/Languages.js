import { useContext } from "react";
import LanguageContext from "../../context/language/LanguageContext";

const Languages = () => {
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
          {language.name === selectedLanguage.name && <div>Active</div>}

          <button
            style={{
              width: "100%",
            }}
            onClick={() => setLanguageWithName(language.name)}
          >
            Set '{language.language}' language
          </button>
        </span>
      ))}
    </div>
  );
};

export default Languages;
