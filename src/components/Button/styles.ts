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
  fullWidth: css`
    width: 100%;
  `,
};

export const Button = styled.button<ButtonProps>`
  max-width: 141px;
  height: 48px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  ${(props) => props.color && buttonModifiers[props.color]}
  ${(props) => props.fullWidth && buttonModifiers.fullWidth}


  transition: background-color 0.3s;

  font-family: 'Kumbh Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  margin: 5px 4px;
`;
