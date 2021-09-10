import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helper';
import theme from 'styles/theme';

import Radio from '.';

describe('<Radio />', () => {
  it('deve renderizar com a  label na cor branca', () => {
    const { container } = renderWithTheme(
      <Radio label="Radio" labelFor="check" value="anyValue" />
    );

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.white });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('deve renderizar com a  label na cor preta', () => {
    renderWithTheme(<Radio label="Radio" labelColor="black" />);

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.black });
  });

  it('deve renderizar sem label', () => {
    renderWithTheme(<Radio />);

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument();
  });

  it('deve disparar o onCheck quando o status for alterado', async () => {
    const onCheck = jest.fn();
    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
        value="anyValue"
      />
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByLabelText('Radio'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith('anyValue');
  });

  it('Deve está acessível com a tecla "tab"', () => {
    renderWithTheme(<Radio label="Radio" labelFor="Radio" />);

    const radio = screen.getByLabelText('Radio');

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(radio).toHaveFocus();
  });
});
