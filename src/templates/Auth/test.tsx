import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Auth from '.';

describe('<Auth />', () => {
  it('Deve renderizar a logos, titulos, subtitulo, footer e o "children"', () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    );

    // Verifica se tem 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

    // Verifica se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in on place/i
      })
    ).toBeInTheDocument();

    // Verifica se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument();

    // Verifica se tem o title do content
    expect(
      screen.getByRole('heading', {
        name: /Auth title/i
      })
    ).toBeInTheDocument();

    // Verifica se o children tá sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
