import "./App.css";
import React from "react";
import catalog from './data';
import SerieList from "./components/SerieList";

class App extends React.Component {
  render() {
    return (
      <main className="main-container">
        <SerieList catalog={catalog}/>
      </main>
    );
  }
}

export default App;
