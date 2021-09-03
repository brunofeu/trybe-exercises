import React, { Component } from 'react';

class EnderecoForms extends Component {
  render() {
    const { value, handleEvent } = this.props;
    return (
      <label>
        Endereço:
        <input
          name="endereco"
          type="text"
          required
          value={value}
          onChange={handleEvent}
          maxLength={200}
        />
      </label>
    )
  }
}

export default EnderecoForms;