import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
// import store from '../store';

describe('Cadastro de clientes', () => {
  test('Verifica se a tela inicial é renderizada', () => {
    renderWithRouterAndRedux(<App />);
    const initialText = screen.getByText(/cadastro de clientes/i);
    expect(initialText).toBeInTheDocument();
  });

  test('verificar se os dados de login são salvos corretamente', () => {
    const { store } = renderWithRouterAndRedux(<App />, { initialEntries: ['/login'] });
    const emailInput = screen.getByTestId('input-email');
    const passwordInput = screen.getByTestId('input-password');
    const buttonLogin = screen.getByTestId('btn-login');

    userEvent.type(emailInput, 'bruno@gmail.com');
    userEvent.type(passwordInput, 'xablau');
    userEvent.click(buttonLogin);

    expect(store.getState().loginReducer.email).toBe('bruno@gmail.com');
    expect(store.getState().loginReducer.password).toBe('xablau');
  });

  test('verifica se o cadastro funciona corretamente', () => {
    const { store } = renderWithRouterAndRedux(
      <App />,
      { initialEntries: ['/register'],
        initialState: {
          registerReducer: [],
          loginReducer: {
            email: 'bruno@gmail.com',
            password: 'xablau',
          },
        },
      },
    );

    const nameInput = screen.getByTestId('input-register-nome');
    const ageInput = screen.getByTestId('input-register-idade');
    const emailInput = screen.getByTestId('input-register-email');
    const buttonRegister = screen.getByRole('button', { name: /registrar cliente/i });

    userEvent.type(nameInput, 'Perna Longa');
    userEvent.type(ageInput, '80');
    userEvent.type(emailInput, 'bugsbunny@warner.com');
    userEvent.click(buttonRegister);

    expect(store.getState().registerReducer[0].name).toBe('Perna Longa');
    expect(store.getState().registerReducer[0].age).toBe('80');
    expect(store.getState().registerReducer[0].email).toBe('bugsbunny@warner.com');
  });
});
