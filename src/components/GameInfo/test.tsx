import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import GameInfo from '.';

const props = {
  title: 'My Game Title',
  description: 'Game description',
  price: '210,00'
};

describe('<GameInfo />', () => {
  it('Deve renderizar as informações do jogo', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { name: /My game title/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Game description/i)).toBeInTheDocument();
    expect(screen.getByText(/\$210,00/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve renderizar os botões', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(screen.getByRole('button', { name: /add to cart/i }));
    expect(screen.getByRole('button', { name: /Wishlist/i }));
  });
});
