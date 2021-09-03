import React, { Component } from 'react';
import estados from './DataEstados';

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
        >
          {
            estados.map((estado) => <option>{estado.unidade_federativa}</option>)
          }
          </select>
      </label>
    );
  }
}
export default EstadoForms;