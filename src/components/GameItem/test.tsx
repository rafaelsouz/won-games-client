import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import GameItem from '.';

const props = {
  img: 'https://source.unsplash.com/random/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00',
  downloadLink: 'https://link'
};

describe('<GameItem />', () => {
  it('deve renderizar o item', () => {
    renderWithTheme(<GameItem {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );

    expect(screen.getByText(props.price)).toBeInTheDocument();
  });

  it('deve renderizar o item com link de download', () => {
    renderWithTheme(<GameItem {...props} />);

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', props.downloadLink);
  });

  it('deve renderizar as informações de pagamento', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    };

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />);

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    );

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument();
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument();
  });
});
