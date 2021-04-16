import { ThemeProvider } from "./context/theme/ThemeContext";
import { LanguageProvider } from "./context/language/LanguageContext";

import App from "./App";

const AppContainer = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default AppContainer;
