import Header from "./Header"
import Footer from "./Footer"

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <div className="content">
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
