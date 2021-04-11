import { useContext } from "react";

import LanguageContext from "../../context/language/LanguageContext";

const NotFoundPage = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div>
      <h2>{selectedLanguage.pages.errors.notFound.title}</h2>
      <h4>{selectedLanguage.pages.errors.notFound.message}</h4>
    </div>
  );
};

export default NotFoundPage;
