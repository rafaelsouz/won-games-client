import { render, screen } from '@testing-library/react';

import Wishlist from '.';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import { renderWithTheme } from 'utils/tests/helper';

const props = {
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock
};

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  }
}));

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist {...props} />);

    expect(
      screen.getByRole('heading', { name: /Wishlist/i })
    ).toBeInTheDocument();

    expect(screen.getByTestId(/mock showcase/i)).toBeInTheDocument();
  });
});
