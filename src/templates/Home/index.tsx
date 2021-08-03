import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import Heading from 'components/Heading';

import * as S from './styles';

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Most Popular
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Upcoming
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Free Games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
);

export default Home;
