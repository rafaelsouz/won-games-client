import { screen } from '@testing-library/react';

import galleryMock from 'components/Gallery/mock';
import gameInfoMock from 'components/GameInfo/mock';
import gameDetailsMock from 'components/GameDetails/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import textContentMock from 'components/TextContent/mock';

import { GameDetailsProps } from 'components/GameDetails';
import Game, { GameTemplateProps } from '.';
import { renderWithTheme } from 'utils/tests/helper';

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<h1>Custom HTML</h1>`,
  details: gameDetailsMock as GameDetailsProps,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendedGames: gamesMock
};

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />;
  }
}));

jest.mock('components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery" />;
  }
}));

jest.mock('components/GameDetails', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameDetails" />;
  }
}));

jest.mock('components/GameInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameInfo" />;
  }
}));

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  }
}));

describe('<Game />', () => {
  it('deve renderizar o template com os componentes', () => {
    renderWithTheme(<Game {...props} />);

    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument();
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument();
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2);
    expect(screen.getByText(/custom html/i)).toBeInTheDocument();
  });

  it('não deve renderizar a galeria se não tiver imagens', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />);

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument();
  });

  it('não deve renderizar a galeria se tiver no mobile', () => {
    renderWithTheme(<Game {...props} />);

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none'
    });

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    );
  });

  it('deve renderizar a imagem do cover', () => {
    renderWithTheme(<Game {...props} />);

    const cover = screen.getByRole('image', { name: /cover/i });

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    });

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    });

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    );
  });
});
