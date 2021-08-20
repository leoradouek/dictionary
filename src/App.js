import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Backwards from "./Backwards";
import Definition from "./Definition";

const dictionaryAPI = "https://api.dictionaryapi.dev/api/v2/entries/en/";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Backwards />
        <Definition />
      </div>
    );
  }
}

export default App;
