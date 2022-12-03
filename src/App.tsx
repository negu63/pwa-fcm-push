import logo from "./logo.svg";
import "./App.css";
import Notification from "./Notification";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>PWA Firebase Cloud Messaging Push Notification Test</p>
        <p>Send message from server.</p>
      </header>
      <Notification />
    </div>
  );
}

export default App;
