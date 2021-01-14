import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [hello, setHello] = useState(null);
  const getHello = useCallback(async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL);
    setHello(response);
  }, []);
  useEffect(() => {
    getHello();
  }, [getHello]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
      {JSON.stringify(hello)}
    </div>
  );
}

export default App;
