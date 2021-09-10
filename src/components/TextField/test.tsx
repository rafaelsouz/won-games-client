import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/helper';

import TextField from '.';

describe('<TextField />', () => {
  it('Deve renderizar com label', () => {
    renderWithTheme(<TextField label="label" labelFor="Field" id="Field" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('Deve renderizar com placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('Muda o valor quando digitado dentro do input', async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    );

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('Is accessible by tab', () => {
    renderWithTheme(<TextField label="TextField" labelFor="TextField" />);

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
