import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { InputProps } from '.';

type IconPositionProps = Pick<InputProps, 'iconPosition'>;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    /* padding: ${theme.spacings.small}, ${theme.spacings.small},
      ${theme.spacings.medium}; */

    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
    padding-left: ${theme.spacings.medium};

    background-color: ${theme.colors.background};
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    width: ${theme.spacings.medium};
    color: #5964e0;

    order: ${iconPosition !== 'right' ? 1 : 0};
    & > svg {
      width: 100%;
    }
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    margin-left: ${theme.spacings.xxsmall};

    outline: none;
    border: 0;

    ::placeholder {
      color: ${theme.colors.placeholderColor};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weight.regular};
    }

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.regular};
  `}
`;
