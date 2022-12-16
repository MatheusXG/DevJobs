import styled, { css } from 'styled-components';

export type HeadingProps = {
  fontWeight?: 'regular' | 'bold';
  as?: 'h1' | 'h2' | 'h3' | 'h4';
};

const sizes = {
  h1: '2.8rem',
  h2: '2.4rem',
  h3: '2.0rem',
  h4: '1.4rem',
};

const linesHeights = {
  h1: '3.4rem',
  h2: '2.9rem',
  h3: '2.4rem',
  h4: '1.8rem',
};

export const Heading = styled('h1').attrs<HeadingProps>(({ as = 'h1' }) => ({
  as,
}))<HeadingProps>`
  ${({ fontWeight = 'bold', theme, as = 'h1' }) => css`
    color: ${theme.colors.headingColor};
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: ${fontWeight};
    font-size: ${sizes[as]};
    line-height: ${linesHeights[as]};
  `}
`;
