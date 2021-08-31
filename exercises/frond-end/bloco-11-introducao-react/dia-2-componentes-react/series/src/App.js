import "./App.css";
import React from "react";
import Serie from "./components/Serie";
import catalog from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Serie serieInfo={catalog[0]} />
        <Serie serieInfo={catalog[1]} />
      </div>
    );
  }
}

export default App;
