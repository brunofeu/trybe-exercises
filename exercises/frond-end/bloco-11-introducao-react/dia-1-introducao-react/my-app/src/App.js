import React from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (

      <>
    <Header/>
    <HelloWorld />
    </>
    )
  }
}

export default App;
