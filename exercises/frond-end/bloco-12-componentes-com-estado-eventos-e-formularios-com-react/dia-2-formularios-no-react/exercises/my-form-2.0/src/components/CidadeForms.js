import React, { Component } from 'react';

class CidadeForms extends Component {
  render() {
    const { value, handleEvent } = this.props;
    return (
      <label>
        Cidade:
        <input
          name="cidade"
          type="text"
          required
          value={value}
          onChange={handleEvent}
          maxLength={28}
        />
      </label>
    )
  }
}

export default CidadeForms;