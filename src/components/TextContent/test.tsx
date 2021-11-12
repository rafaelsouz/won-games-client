import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import TextContent from '.';

const textProps = {
  title: 'Description',
  content: `<h1>Content</h1>
  `
};

describe('<TextContent />', () => {
  it('deve renderizar o título e conteúdo', () => {
    renderWithTheme(<TextContent {...textProps} />);

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument();
  });

  it('deve renderizar sem o título', () => {
    renderWithTheme(<TextContent content={textProps.content} />);

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument();
  });

  it('deve renderizar o título e conteúdo', () => {
    renderWithTheme(<TextContent {...textProps} />);

    const wrapper = screen.getByRole('heading', { name: /description/i })
      .parentElement;

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA'
    });

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    });
  });
});
