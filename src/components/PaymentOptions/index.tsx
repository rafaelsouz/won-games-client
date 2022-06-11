import Heading from 'components/Heading';
import Radio from 'components/Radio';
import { Add, ShoppingCart } from '@styled-icons/material-outlined';

import * as S from './styles';
import Button from 'components/Button';

export type PaymentCard = {
  number: string;
  flag: string;
  img: string;
};

export type PaymentOptionsProps = {
  cards?: PaymentCard[];
  handlePayment: () => void;
};

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => (
  <S.Wrapper>
    <S.Body>
      <Heading color="black" lineBottom size="small">
        Payment
      </Heading>

      <S.CardsList>
        {cards &&
          cards.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => ({})}
              />
            </S.CardItem>
          ))}
      </S.CardsList>

      <S.AddCard role="button">
        <Add size={14} /> Add a new credit card
      </S.AddCard>
    </S.Body>

    <S.Footer>
      <Button as="a" fullWidth minimal>
        Continue a shipping
      </Button>
      <Button fullWidth icon={<ShoppingCart />} onClick={handlePayment}>
        Buy Now
      </Button>
    </S.Footer>
  </S.Wrapper>
);

export default PaymentOptions;
