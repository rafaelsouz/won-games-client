import { screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helper';

import GameCard from '.';

const props = {
  title: 'Red Dead Redemption',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/rafael/300x144',
  price: 'R$  235,00'
};

describe('<GameCard />', () => {
  it('deve renderizar o game card corretamente', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('deve renderizar o preço sem desconto e com estilos padrões', () => {
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText('R$ 235,00');

    expect(price).not.toHaveStyleRule('text-decoration', 'line-through');
    expect(price).toHaveStyle({ color: theme.colors.white });
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
  });

  it('deve renderizar o preço descontado e com estilos de promoção', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 100,00" />);

    const promocionalPrice = screen.getByText('R$ 100,00');
    const priceWithoutDiscount = screen.getByText('R$ 235,00');

    expect(priceWithoutDiscount).toHaveStyleRule(
      'text-decoration',
      'line-through'
    );
    expect(priceWithoutDiscount).toHaveStyle({ color: theme.colors.gray });

    expect(promocionalPrice).not.toHaveStyleRule(
      'text-decoration',
      'line-through'
    );
  });
});
