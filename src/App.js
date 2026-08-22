import mylogo from "./mylogo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={mylogo} alt="mylogo" className="Dictionary-logo " />
        </header>
        <main>
          <Dictionary defaultKeyword="happy" />
        </main>
        <footer className="App-footer">
          Coded by Gabriella Derzsi, open-sourced on{" "}
          <a href="https://github.com/Gabcii/dictionary-project">Github </a>and
          hosted on <a href="https://dictionary-app-gd.netlify.app">Netlify.</a>
        </footer>
      </div>
    </div>
  );
}
