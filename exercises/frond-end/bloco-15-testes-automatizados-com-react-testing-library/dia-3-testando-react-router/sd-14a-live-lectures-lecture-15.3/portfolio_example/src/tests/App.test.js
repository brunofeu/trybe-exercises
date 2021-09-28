import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';
import renderWithRouter from './util/renderWithRouter';

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
  const { history } = renderWithRouter(<App />);

  history.push('/rota-que-nao-existe');

  const notFoundText = screen.getByRole('heading', {
    level: 1,
    name: /página não encontrada/i,
  });
  expect(notFoundText).toBeInTheDocument();
});

it('ao entrar na página de comentários, verificar se é possivel add comentário', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/comments');

  const commentsText = screen.getByRole('heading', {
    level: 1,
    name: /comente/i,
  });
  expect(commentsText).toBeInTheDocument();
  const commentInput = screen.getByRole('textbox');
  const buttonAddComment = screen.getByRole('button', {
    name: /add comment/i,
  });
  userEvent.type(commentInput, 'xablau');
  userEvent.click(buttonAddComment);

  const xablauText = screen.getByText(/xablau/i);
  expect(xablauText).toBeInTheDocument();
});
