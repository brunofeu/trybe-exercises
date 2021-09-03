import React, { Component } from 'react';

class CpfForms extends Component {
  render() {
    const { value, handleEvent } = this.props;
    return (
      <label>
        CPF:
        <input
          name="cpf"
          type="text"
          required
          value={value}
          onChange={handleEvent}
          maxLength={11}
        />
      </label>
    )
  }
}

export default CpfForms;