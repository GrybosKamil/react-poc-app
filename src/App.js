import Header from "./Header"
import Footer from "./Footer"
import PageContentContainer from "./components/PageContentContainer"

import './App.scss';

function App() {
  return (
    <div className="app-container">
      <div className="site-content">
        <Header />
        <PageContentContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
