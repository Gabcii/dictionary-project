import mylogo from "./mylogo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mylogo} alt="mylogo" className="Dictionary-logo" />
      </header>
    </div>
  );
}
