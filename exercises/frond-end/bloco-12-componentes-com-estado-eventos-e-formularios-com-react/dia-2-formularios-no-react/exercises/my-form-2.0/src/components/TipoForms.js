import React, { Component } from 'react';

class TipoForms extends Component {
  render() {
    const { value, handleEvent } = this.props;
    return (
      <label>
        Tipo:
        <input
          name="tipo"
          type="radio"
          required
          value={value}
          onChange={handleEvent}
        />
      </label>
    )
  }
}

export default TipoForms;