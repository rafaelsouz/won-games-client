import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Highlight from '.';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: '/img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
};

describe('<Highlight />', () => {
  it('deve renderizar os cabeçalhos e botões', () => {
    renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument();
  });

  it('deve renderizar a imagem de fundo', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    });
  });
});
