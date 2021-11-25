import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import '../../../.jest/match-media-mock';

import Gallery from '.';

import mockItems from './mock';

describe('<Gallery />', () => {
  it('deve renderizar a thumbnails como botões', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src);

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src);
  });

  it('Deve abrir o modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    // seleciona o modal
    const modal = screen.getByLabelText('modal');

    // Verifica se o modal está escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });

    // Clica na imagem e verifica se o modal abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    );

    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });

    // fireEvent.click(screen.getByLabelText(/close menu/i));

    // expect(modal.getAttribute('aria-hidden')).toBe('true');
    // expect(modal).toHaveStyle({ opacity: 0 });
  });
});
