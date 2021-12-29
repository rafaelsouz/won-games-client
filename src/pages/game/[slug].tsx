import Game, { GameTemplateProps } from 'templates/Game';

const game = (props: GameTemplateProps) => {
  return <Game {...props} />;
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false
  };
}

export async function getStaticProps() {
  return {
    props: {
      cover:
        'https://p2.trrsf.com/image/fget/cf/1200/628/middle/images.terra.com/2021/07/20/cyberpunk2077-05.jpg',
      gameInfo: {
        title: 'Cyberpunk 2077',
        price: '59.00',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
      }
    }
  };
}
export default game;
