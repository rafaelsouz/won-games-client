import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it('Deve renderiza o formulario', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Sign in now/i })
    ).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });

  it('Deve renderiza o link de esqueci minha senha', () => {
    renderWithTheme(<FormSignIn />);

    expect(
      screen.getByRole('link', { name: /Forgot your password?/i })
    ).toBeInTheDocument();
  });

  it('Deve renderiza o texto para cria conta', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument();
    expect(screen.getByText('Don´t have an account?')).toBeInTheDocument();
  });
});
