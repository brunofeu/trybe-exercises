import React, { Component } from 'react';
import './Form.css'
import EstadoFavorito from './EstadoFavorito';
import Sabor from './Sabor';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      sabor: 'coco'

    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className='form'>
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} />
          <Sabor value={this.state.sabor} handleChange={this.handleChange}/>
          <fieldset>
            <input
              name="idade"
              type="number"
              onChange={this.handleChange}
            />
            <input
              name="vaiComparecer"
              type="checkbox"
              onChange={this.handleChange}
            />
            <input type="file" />
          </fieldset>

        </form>
      </div>
    )
  }
}

export default Form;