import { useState, createContext } from "react";
// import { useState, useEffect, useLayoutEffect, createContext } from "react";
import { getFromLocal, setToLocal } from "../../utils/storage";

import languagesSchema from "./languages";

const LanguageContext = createContext({
  allLanguages: {},
  selectedLanguageName: "",
  selectedLanguage: {},
  setLanguageWithName: () => {},
});

export default LanguageContext;

export function LanguageProvider(props) {
  setToLocal("all-languages", languagesSchema.languages);
  const allLanguages =
    getFromLocal("all-languages") || languagesSchema.languages;
  setToLocal("all-languages", allLanguages);

  const [selectedLanguageName, setSelectedLanguageName] = useState(
    getFromLocal("selected-language-name") || languagesSchema.defaultLanguage
  );

  // useLayoutEffect(() => {
  //   const selectedLanguageName = getFromLocal("selected-language-name");

  //   if (selectedLanguageName) {
  //     setLanguageN(selectedLanguage);
  //   }
  // }, [languageName]);

  // useEffect(() => {
  //   console.log("changed language name");
  //   setToLocal("selected-language-name", languageName);
  // }, [languageName]);

  const setLanguageWithName = (name) => {
    console.log("Set language: " + name);
    setToLocal("selected-language-name", name);
    setSelectedLanguageName(name);
  };

  return (
    <LanguageContext.Provider
      value={{
        allLanguages,
        selectedLanguage: allLanguages[selectedLanguageName],
        setLanguageWithName,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}
