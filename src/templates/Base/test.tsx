import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Base from '.';

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock menu"></div>;
    }
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock footer"></div>;
    }
  };
});

describe('<Base />', () => {
  it('Deve renderizar o menu, footer e children', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    );

    expect(screen.getByTestId(/Mock menu/i)).toBeInTheDocument();
    expect(screen.getByTestId(/Mock footer/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument();
  });
});
