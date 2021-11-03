import { Windows, Linux, Apple } from 'styled-icons/fa-brands';

import Heading from 'components/Heading';
import MediaMatch from 'components/MediaMatch';
import * as S from './styles';

type Platform = 'Windows' | 'Linux' | 'Mac';

export type GameDetailsProps = {
  platforms: Platform[];
};

const GameDetails = ({ platforms }: GameDetailsProps) => {
  const platformIcons = {
    Linux: <Linux title="Linux" size={18} />,
    Windows: <Windows title="Windows" size={18} />,
    Mac: <Apple title="mac" size={18} />
  };

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>Nov 16, 2019</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>2K</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>18+</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>Action / Adventure</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameDetails;
