import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Button from '.';

describe('<Button />', () => {
  it('deve renderizar tamanho médio por padrão', () => {
    renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    });
  });

  it('deve renderizar tamanho pequeno', () => {
    renderWithTheme(<Button size={'small'}>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    });
  });

  it('deve renderizar tamanho maior', () => {
    renderWithTheme(<Button size={'large'}>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    });
  });

  it('deve renderizar a botão com 100% de largura', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    });
  });
});
