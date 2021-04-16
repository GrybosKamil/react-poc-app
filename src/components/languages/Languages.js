import { useEffect, useContext, useRef, createRef } from "react";
import { Button } from "react-bootstrap";

import lodash from "lodash";
import VanillaTilt from "vanilla-tilt";
import { flatten } from "flat";

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

  const tilts = useRef([]);
  tilts.current = languages.map((_, i) => tilts.current[i] ?? createRef(null));

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

  const languageNestedKeys = Object.keys(flatten(selectedLanguage));

  return (
    <div>
      <div>{selectedLanguage.sidebar.languages}</div>

      {languages.map((language, i) => (
        <div
          key={language.id}
          style={{
            width: widthOfLanguageButton,
            display: "inline-block",
            padding: "15px",
          }}
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

          <Button
            ref={tilts.current[i]}
            style={{
              backgroundColor: selectedTheme.colors.background,
              color: selectedTheme.colors.text,
              width: "100%",
            }}
            active={language.name === selectedLanguage.name}
            onClick={() => setLanguageWithName(language.name)}
          >
            {language.setThisLanguage}
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
        <table>
          <thead>
            <tr>
              <th>Elem ID</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {languageNestedKeys.map((elem) => (
              <tr key={elem}>
                <td>{elem}</td>
                <td>{lodash.get(selectedLanguage, elem)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Languages;
