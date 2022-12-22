import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import HeaderImg from '../.././assets/desktop/bg-pattern-header.svg';
import headerTabletImg from '../.././assets/tablet/bg-pattern-header.svg';
import headerMobileImg from '../.././assets/mobile/bg-pattern-header.svg';

export const Wrapper = styled.header`
  ${media.lessThan('large')`
  background-image: url(${headerTabletImg});
`}
  ${media.lessThan('small')`
  border-radius: 0;
  background-image: url(${headerMobileImg});

`}

  width: 100%;
  height: 15rem;

  border-radius: 0px 0px 0px 100px;
  background-image: url(${HeaderImg});
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.spacings.large};
  `}
`;
