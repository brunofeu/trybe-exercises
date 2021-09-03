import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: 'casa'
    }
  }

  handleEvent = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name] : value
    })
  }


  render() {
    const { name, email, cpf, endereco, cidade, estado, tipo} = this.state;

    return (
      <div>
        <fieldset className="data-fieldset">
          <legend>Dados Pessoais</legend>
          <label>
            Nome:
            <input 
            name="name" 
            type="text" 
            required
            value={name.toUpperCase()}
            onChange={this.handleEvent}
            maxLength={40}
            />
          </label>
          <label>
            Email:
            <input 
            name="email" 
            type="email" 
            required
            value={email}
            onChange={this.handleEvent}
            />
          </label>

          <label>
            CPF:
            <input 
            name="cpf" 
            type="number" 
            required
            value={cpf}
            onChange={this.handleEvent}
            max={99999999999}
            />
          </label>

          <label>
            Endereço:
            <input 
            name="endereco" 
            type="text" 
            required
            value={endereco}
            onChange={this.handleEvent}
            maxLength={200}
            />
          </label>

        </fieldset>
      </div>
    );
  }
}

export default Form;