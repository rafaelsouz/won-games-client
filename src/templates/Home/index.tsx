import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import Heading from 'components/Heading';

import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import Highlight, { HighlightProps } from 'components/Highlight';

import * as S from './styles';
import BannerSlider from 'components/BannerSlider';
import GameCardSlider from 'components/GameCardSlider';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  upcomingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

const Home = ({
  banners,
  freeGames,
  freeHighlight,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>

        <GameCardSlider items={newGames} />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary" color="white">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary" color="white">
          Upcoming
        </Heading>

        <GameCardSlider items={upcomingGames} />
        <Highlight {...upcomingHighlight} />
        <GameCardSlider items={upcomingMoreGames} />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary" color="white">
          Free Games
        </Heading>

        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Home;
