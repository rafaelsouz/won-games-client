import { render, screen } from '@testing-library/react';

import Logo from '.';

describe('<Logo />', () => {
  it('deve renderizar o texto em branco por padrão', () => {
    const { container } = render(<Logo />);

    expect(screen.getByRole('heading', { name: /Logo/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
