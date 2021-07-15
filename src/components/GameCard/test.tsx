import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import GameCard from '.';

const props = {
  title: 'Red Dead Redemption',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/rafael/300x144',
  price: '235,00'
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
});
