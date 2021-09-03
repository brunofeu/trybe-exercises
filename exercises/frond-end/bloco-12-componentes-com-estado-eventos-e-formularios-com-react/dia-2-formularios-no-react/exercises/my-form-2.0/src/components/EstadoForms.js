import React, { Component } from 'react';

class EstadoForms extends Component {
  render() {
    const { value, handleEvent } = this.props;
    return (
      <label>
        Estado:
        <select
          name="estado"
          required
          value={value}
          onChange={handleEvent}
        />
      </label>
    );
  }
}
export default EstadoForms;