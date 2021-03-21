import styled from 'styled-components';

import { LogoProps } from './index';

export const Wrapper = styled.div<LogoProps>`
  color: ${({ theme, color = 'white' }) => theme.colors[color]};
`;
