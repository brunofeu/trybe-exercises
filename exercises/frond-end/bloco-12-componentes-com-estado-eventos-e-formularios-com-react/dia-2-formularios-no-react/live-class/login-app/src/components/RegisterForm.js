import React, { Component } from 'react';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      nome: ''
    };
    // this.handleChange = this.handleChange.bind(this) 
    // quando a função é declarada como arrow function não precisa do bind
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`O login foi realizado ${this.state.email}`)
  }

  render() {
    const { email, password, nome} = this.state
    return (
      <section className="register-form">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nome">
            Nome:
            <input
              value={nome}
              type="text"
              name="nome"
              id="nome"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              value={email}
              type="email"
              name="email"
              id="email"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              value={password}
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
    )
  }
}

export default RegisterForm;