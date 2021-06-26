import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { HighLightProps } from '.';

type WrapperProps = Pick<HighLightProps, 'backgroundImage'>;

export const Wrapper = styled.main<WrapperProps>`
  ${({ backgroundImage }) => css`
    position: relative;
    display: grid;

    height: 23rem;

    background-position: center center;
    background-size: cover;
    background-image: url(${backgroundImage});

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    text-align: right;
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      align-self: end;

      padding: ${theme.spacings.large};


    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}
  `};
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.large};
    `}
  `};
`;
