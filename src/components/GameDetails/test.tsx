import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import GameDetails, { GameDetailsProps } from '.';

const props: GameDetailsProps = {
  developer: 'Different Tales',
  releaseDate: '2020-11-21T23:00:00',
  platforms: ['Windows', 'Mac', 'Linux'],
  publisher: 'Walkabout',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
};

describe('<GameDetails />', () => {
  it('deve renderizar os blocos ', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /platform/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /rating/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /genres/i })
    ).toBeInTheDocument();
  });

  it('deve renderizar os icones das plataformas', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
  });

  it('deve renderizar a data formatada', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  });

  it('deve renderizar 18+ quando for BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });

  it('deve renderizar FREE quando for BR0', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/FREE/i)).toBeInTheDocument();
  });

  it('deve renderizar FREE quando for BR0', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/FREE/i)).toBeInTheDocument();
  });

  it('deve renderizar a lista de gêneros', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument();
  });

  it('deve renderizar a publisher', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/Walkabout/i)).toBeInTheDocument();
  });

  it('deve renderizar render o desenvolvedor', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/Different Tales/i)).toBeInTheDocument();
  });
});
