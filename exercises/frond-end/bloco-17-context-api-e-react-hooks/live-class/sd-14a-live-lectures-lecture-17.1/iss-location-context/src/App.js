import React, { Component } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import ISSContext from './Context/ISSContext';
import getCurrentISSLocation from './services/issAPI';

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 10,
      longitude: 50,
      error: null,
      isLoading: false,
    };
    this.getISSLocation = this.getISSLocation.bind(this);
  }

  async getISSLocation() {
    const result = await getCurrentISSLocation();
    this.setState({
      latitude: Number(result.iss_position.latitude),
      longitude: Number(result.iss_position.longitude),
    });
  }

  render() {
    return (
      <ISSContext.Provider
        value={ { ...this.state, getISSLocation: this.getISSLocation } }
      >
        <div className="App">
          <h1>
            Space Station
            {' '}
            <span className="purple-font">Tracker</span>
          </h1>
          <ISSLocation />
        </div>
      </ISSContext.Provider>
    );
  }
}

export default App;
