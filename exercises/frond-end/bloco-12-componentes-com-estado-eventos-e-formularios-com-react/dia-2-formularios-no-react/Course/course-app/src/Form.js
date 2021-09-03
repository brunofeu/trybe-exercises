import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      estadoFavorito: '',
    }
  }

  handleChange(event) {
    this.setState({estadoFavorito: event.target.value})
  }

  render() {
    return (
      <div>
        <form>
          <textarea value={ this.state.estadoFavorito }onChange={this.handleChange}/>
          <input type="number"></input>
          <input type="select"></input>
        </form>
      </div>
    )
  }
}

export default Form;