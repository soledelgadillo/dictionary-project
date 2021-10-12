import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          This app was coded by Sol Delgadillo, and it's{" "}
          <a href="https://github.com/soledelgadillo/dictionary-project">
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
