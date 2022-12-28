import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const buttonModifiers = {
  primary: css`
    color: ${({ theme }) => theme.colors.primary.color};
    background-color: ${({ theme }) => theme.colors.primary.buttonBackground};
    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.primary.buttonHoverBackground};
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.secondary.color};
    background-color: ${({ theme }) => theme.colors.secondary.buttonBackground};
    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.secondary.buttonHoverBackground};
    }
  `,
  none: css`
    border: none;
    background: none;
  `,
  fullWidth: css`
    width: 100%;
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant, fullWidth }) => css`
    width: 100%;
    height: 4.8rem;
    border-radius: ${theme.border.radius.xsmall};
    border: 0;
    cursor: pointer;
    padding-block: ${theme.spacings.xsmall};

    ${!!variant && buttonModifiers[variant]};
    ${!!fullWidth && buttonModifiers.fullWidth};

    transition: background-color 0.3s;

    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.lineHeights.none};

    &:disabled {
      cursor: not-allowed;
    }
  `};
`;
