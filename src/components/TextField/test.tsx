import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Email } from '@styled-icons/material-outlined/Email';

import { renderWithTheme } from 'utils/tests/helper';

import TextField from '.';

describe('<TextField />', () => {
  it('Deve renderizar com label', () => {
    renderWithTheme(<TextField label="label" labelFor="Field" id="Field" />);

    expect(screen.getByLabelText('label')).toBeInTheDocument();
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

  it('É acessivel com o tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    );

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('Deve renderizar com o icone', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        icon={<Email data-testid="icon" />}
      />
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
