import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import PaymentOptions from '.';
import cards from './mock';

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />);

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument();
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument();
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument();
  });
});
