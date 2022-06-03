import { Download } from '@styled-icons/boxicons-solid/Download';

import * as S from './styles';

export type GameItemProps = {
  img: string;
  title: string;
  price: string;
  downloadLink?: string;
};

const GameItem = ({ img, price, title, downloadLink }: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.TitleBox>
          <S.Title>{title}</S.Title>

          {!!downloadLink && (
            <S.DownloadLink
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
            >
              <Download size={22} />
            </S.DownloadLink>
          )}
        </S.TitleBox>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>
  </S.Wrapper>
);

export default GameItem;
