import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Empty from '.';

const props = {
  title: 'A simple title',
  description: 'A simple description'
};

describe('<Empty />', () => {
  it('deve renderizar corretamente', () => {
    renderWithTheme(<Empty {...props} hasLink />);

    expect(
      screen.getByRole('img', {
        name: /a gamer in a couch playing videogame/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/');
  });

  it('Deve renderizar link quando hasLink não for passado', () => {
    renderWithTheme(<Empty {...props} />);

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument();
  });
});
