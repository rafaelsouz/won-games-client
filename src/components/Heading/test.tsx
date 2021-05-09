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
      'border-left': ' 0.7rem solid #F231A5'
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

  it('Deve renderizar o heading com um tamanho menor', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    });

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    );
  });

  it('Deve renderizar o heading com a linha na cor primaria', () => {
    renderWithTheme(
      <Heading lineBottom lineColor="primary" lineLeft>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: /Won Games/i });

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    });
  });

  it('Deve renderizar o heading com a linha na cor secundaria', () => {
    renderWithTheme(
      <Heading lineBottom lineColor="secondary" lineLeft>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: /Won Games/i });

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    });
  });
});
