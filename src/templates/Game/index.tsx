import Base from 'templates/Base';

import * as S from './styles';

const Game = () => (
  <Base>
    <S.Cover
      src={
        'https://p2.trrsf.com/image/fget/cf/1200/628/middle/images.terra.com/2021/07/20/cyberpunk2077-05.jpg'
      }
      role="image"
      aria-label="cover"
    />
  </Base>
);

export default Game;
