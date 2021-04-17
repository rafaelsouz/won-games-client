import { render, screen } from '@testing-library/react';

import MediaMatch from '.';

describe('<MediaMatch />', () => {
  let desktopHeading: Element;
  let mobileHeading: Element;

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">mobile</h1>
        </MediaMatch>
      </>
    );

    desktopHeading = screen.getByTestId('desktop');
    mobileHeading = screen.getByTestId('mobile');
  });

  it('deve se esconder caso nenhum media query seja passada', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none');
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none');
  });

  it('deve mostrar ou esconder baseado na media que é passada', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    });

    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    });
  });
});
