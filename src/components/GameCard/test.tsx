import { fireEvent, screen } from '@testing-library/react';
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

  it('deve renderizar o ícone de favorito preenchido quando tiver sido favoritado', () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('deve chamar onFav quando o botão de favorito for clicada.', () => {
    const onFav = jest.fn();

    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();
  });

  it('deve renderizar o ribbon quando houver a prop ribbon sendo passada.', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="20% Off"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );

    const ribbon = screen.getByText(/20% Off/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      backgroundColor: theme.colors.secondary
    });

    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });
});
