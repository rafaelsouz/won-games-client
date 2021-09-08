import { waitFor, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import userEvent from '@testing-library/user-event';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('Deve renderizar com a label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });

  it('Deve renderizar o checkbox sem a label, caso não receba a label como prop', () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument();
  });

  it('Deve renderizar a label na cor preta', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    );

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    });
  });

  it('Deve disparar onCheck quando o status for alterado', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('Deve disparar onCheck e desmarcar o checkbox por causa da prop "isChecked" ', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('Deve está acessivel com a tecla "tab" ', async () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
  });
});
