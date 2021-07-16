import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Banner from '.';

describe('<Banner />', () => {
  it('deve renderizar o banner corretamente', () => {
    const { container } = renderWithTheme(
      <Banner
        title="Promoção de verão"
        subtitle="Desconto de 50% em todos os jogos."
        img="https://source.unsplash.com/random/1042x580"
        buttonLabel="Compre agora"
        buttonLink="/games/defy-death"
      />
    );

    expect(
      screen.getByRole('heading', { name: /Promoção de verão/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /Desconto de 50% em todos os jogos./i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', {
        name: /Promoção de verão/i
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('deve renderizar o badge', () => {
    renderWithTheme(
      <Banner
        title="Promoção de verão"
        subtitle="Desconto de 50% em todos os jogos."
        img="https://source.unsplash.com/random/1042x580"
        buttonLabel="Compre agora"
        buttonLink="/games/defy-death"
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );

    const ribbon = screen.getByText(/My Ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });
});
