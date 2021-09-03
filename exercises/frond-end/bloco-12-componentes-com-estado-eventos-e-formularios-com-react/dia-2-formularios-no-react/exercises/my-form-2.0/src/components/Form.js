import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
    }
  }

  handleEvent = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name] : value
    })
  }


  render() {
    return (
      <div>
        <fieldset>
          <label>
            Nome:
            <input 
            name="name" 
            type="text" 
            required
            value={this.state.name}
            onChange={this.handleEvent}
            />
          </label>

        </fieldset>
      </div>
    );
  }
}

export default Form;