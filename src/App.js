import { ThemeProvider } from "./context/theme/ThemeContext";
import { LanguageProvider } from "./context/language/LanguageContext";

import Header from "./Header";
import Footer from "./Footer";
import PageContentContainer from "./components/pageContent/PageContentContainer";

import "./App.scss";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app-container">
          <div className="site-content">
            <Header />
            <PageContentContainer />
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
