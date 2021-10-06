import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import FormSignUp from '.';

describe('<FormSignUp />', () => {
  it('Deve renderiza o formulario', () => {
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/confirm password/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument();
  });

  it('Deve renderiza o texto e o link para fazer login', () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument();
    expect(screen.getByText('Don´t have an account?')).toBeInTheDocument();
  });
});
