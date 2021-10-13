import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import highlightMock from 'components/Highlight/mock';
import gamesMock from 'components/GameCardSlider/mock';

import Showcase from '.';

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
};

describe('<ShowCase />', () => {
  it('deve renderizar showcase completo', () => {
    renderWithTheme(<Showcase {...props} />);

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument();
  });

  it('deve renderizar sem titulo', () => {
    renderWithTheme(
      <Showcase games={props.games} highlight={props.highlight} />
    );

    screen.getByRole('heading', { name: highlightMock.title });
    screen.getByRole('heading', { name: gamesMock[0].title });

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument();
  });

  it('deve renderizar sem highlight', () => {
    renderWithTheme(<Showcase title={props.title} games={props.games} />);

    screen.getByRole('heading', { name: /most popular/i });
    screen.getByRole('heading', { name: gamesMock[0].title });

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument();
  });

  it('deve renderizar sem jogos', () => {
    renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    );

    screen.getByRole('heading', { name: /most popular/i });
    screen.getByRole('heading', { name: highlightMock.title });

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument();
  });
});
