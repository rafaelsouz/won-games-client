import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Footer from '.';

describe('<Footer />', () => {
  it('deve renderizar a 4 colunas de informações', () => {
    const { container } = renderWithTheme(<Footer />);

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
