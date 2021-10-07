import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import FormSignUp from '.';

describe('<FormSignUp />', () => {
  it('Deve renderiza o formulario', () => {
    const { container } = renderWithTheme(<FormSignUp />);

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve renderiza o texto e o link para fazer login', () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByRole('link', { name: /Sign in/i })).toBeInTheDocument();
    expect(screen.getByText('Already have an account?')).toBeInTheDocument();
  });
});
