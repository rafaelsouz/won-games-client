import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Home from '.';

describe('<Home />', () => {
  it('deve renderizar o menu e o footer', () => {
    renderWithTheme(<Home />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument();
  });

  it('deve renderizar as secções', () => {
    renderWithTheme(<Home />);

    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Most Popular/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Upcoming/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Free Games/i })
    ).toBeInTheDocument();
  });
});
