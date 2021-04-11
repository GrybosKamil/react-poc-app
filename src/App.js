import { ThemeProvider } from "./theme/ThemeContext";

import Header from "./Header";
import Footer from "./Footer";
import PageContentContainer from "./components/pageContent/PageContentContainer";

import "./App.scss";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <div className="site-content">
          <Header />
          <PageContentContainer />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
