import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import 'jest-styled-components';

import Logo from '.';

describe('<Logo />', () => {
  it('deve renderizar o texto da logo em branco por padrão', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('deve renderizar o texto da logo na cor preta', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    });
  });

  it('deve renderizar a logo no tamanho normal', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    });
  });

  it('deve renderizar a logo grande', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    });
  });

  it('deve renderizar a logo grande sem o texto, se tiver a prop hideText e na resolução de celular', () => {
    renderWithTheme(<Logo hideText />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    );
  });
});
