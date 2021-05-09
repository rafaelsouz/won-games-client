import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import Menu from '.';

describe('<Menu />', () => {
  it('deve renderizar a navbar', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  });

  it('deve abri/fechar o menu quando os botões responsável forem clicados ', () => {
    renderWithTheme(<Menu />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    fireEvent.click(screen.getByLabelText(/open menu/i));

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByLabelText(/close menu/i));

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('deve mostrar o container de autenticação quando estiver deslogado.', () => {
    renderWithTheme(<Menu />);

    expect(screen.queryByText(/log in now/i)).toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).toBeInTheDocument();

    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument();
  });

  it('deve mostrar o botão da "wishlist" e "my account" quando estiver logado.', () => {
    renderWithTheme(<Menu username="Rafael" />);

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();

    expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
    expect(screen.getByText(/my account/i)).toBeInTheDocument();
  });
});
