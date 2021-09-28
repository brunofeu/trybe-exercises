import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Router } from 'react-router';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

it('Ao entrar na página verifica se o texto "Sobre mim"'
  + ' aparece e clica no link de projetos', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const aboutText = screen.getByRole('heading', {
    level: 1,
    name: /página sobre mim/i,
  });
  expect(aboutText).toBeInTheDocument();

  const projectsLink = screen.getByRole('link', {
    name: /projetos/i,
  });
  expect(projectsLink).toBeInTheDocument();

  userEvent.click(projectsLink);

  const projectsText = screen.getByRole('heading', {
    level: 1,
    name: /página de projetos/i,
  });
  expect(projectsText).toBeInTheDocument();
});

it('Ao entrar na página verifica se o texto "Sobre mim"'
  + ' aparece e clica no link de comentários', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const aboutText = screen.getByRole('heading', {
    level: 1,
    name: /página sobre mim/i,
  });
  expect(aboutText).toBeInTheDocument();

  const commentsLink = screen.getByRole('link', {
    name: /comentário/i,
  });
  expect(commentsLink).toBeInTheDocument();

  userEvent.click(commentsLink);

  const commentsText = screen.getByRole('heading', {
    level: 1,
    name: /comente/i,
  });
  expect(commentsText).toBeInTheDocument();
});

it('exibe a página "não encontrado" quando eu digitar endereço inválido', () => {
  const customHistory = createMemoryHistory();
  render(
    <Router history={ customHistory }>
      <App />
    </Router>,
  );
  customHistory.push('/rota-que-nao-existe');

  const notFoundText = screen.getByRole('heading', {
    level: 1,
    name: /página não encontrada/i,
  });
  expect(notFoundText).toBeInTheDocument();
});
