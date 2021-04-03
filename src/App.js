import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"

import './App.scss';

function App() {
  return (
    <div className="app-container">
      <div className="site-content">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
