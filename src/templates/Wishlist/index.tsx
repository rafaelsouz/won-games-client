import Base from 'templates/Base';
import { Container } from 'components/Container';
import Heading from 'components/Heading';

import * as S from './styles';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import Showcase from 'components/Showcase';

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Wishlist = ({
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
);

export default Wishlist;
