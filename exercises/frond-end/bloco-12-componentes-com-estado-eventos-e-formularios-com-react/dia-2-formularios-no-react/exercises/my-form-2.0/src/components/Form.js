import React, { Component } from 'react';
import NameForms from './NameForm';
import EmailForms from './EmailForms';
import CpfForms from './CpfForms';
import EnderecoForms from './EnderecoForms';
import CidadeForms from './CidadeForms';
import EstadoForms from './EstadoForms';
import TipoForms from './TipoForms';

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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { name, email, cpf, endereco, cidade, estado, tipo } = this.state;

    return (
      <div>
        <fieldset className="data-fieldset">
          <legend>Dados Pessoais</legend>
          <NameForms value={name} handleEvent={this.handleEvent} />
          <EmailForms value={email} handleEvent={this.handleEvent} />
          <CpfForms value={cpf} handleEvent={this.handleEvent} />
          <EnderecoForms value={endereco} handleEvent={this.handleEvent} />
          <CidadeForms value={cidade} handleEvent={this.handleEvent} />
          <EstadoForms value={estado} handleEvent={this.handleEvent}/>
          <TipoForms value={tipo} handleEvent={this.handleEvent}/>
        </fieldset>
      </div>
    );
  }
}

export default Form;