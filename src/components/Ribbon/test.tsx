import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('Deve renderizar o texto corretamente', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument();
  });

  it('Deve renderizar com a cor primária', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#f231a5'
    });
  });

  it('Deve renderizar com a cor secundária', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#3cd3c1'
    });
  });

  it('Deve renderizar no tamanho normal, como padrão', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    });
  });

  it('Deve renderizar o menor tamanho', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });
});
