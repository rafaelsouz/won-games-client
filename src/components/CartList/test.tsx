import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import CartList from '.';
import mockItems from './mock';

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={mockItems} total={'R$ 330,00'} />
    );

    expect(screen.getAllByText('R$ 215,00')).toHaveLength(2);

    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#F231A5' });

    expect(container.firstChild).toMatchSnapshot();
  });
});
