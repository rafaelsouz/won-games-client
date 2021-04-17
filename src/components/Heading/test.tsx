import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import 'jest-styled-components';

import Heading from '.';

describe('<Heading />', () => {
  it('Deve renderizar o heading branco por padrão', () => {
    renderWithTheme(<Heading>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('Deve renderizar o heading preto quando a cor for passada', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    });
  });

  it('Deve renderizar o heading com a linha no lado esquerdo', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': ' 0.7rem solid #3CD3C1'
    });
  });

  it('Deve renderizar o heading com a linha abaixo ', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    );
  });
});
