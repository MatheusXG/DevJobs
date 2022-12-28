import styled, { css } from 'styled-components';
import { CheckboxProps } from '.';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: ${theme.spacings.medium};
    padding-right: ${theme.spacings.medium};
    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
  `}
`;

type LabelProps = Pick<CheckboxProps, 'labelColor'>;

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: ${theme.border.radius.xxsmall};
    background: ${theme.colors.backgroundInputCheckbox};
    transition: background border ${theme.transition.default};
    position: relative;
    outline: none;

    &:before {
      content: '';
      width: 0.3em;
      height: 1.2rem;
      border: 2px solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.3rem;
      left: 0.9rem;
      opacity: 0;
      transition: ${theme.transition.default};
    }

    &:checked {
      border-color: ${theme.colors.primary.buttonBackground};
      background: ${theme.colors.primary.buttonBackground};

      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<LabelProps>`
  ${({ theme }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.xsmall};

    color: ${theme.colors.labelInputColor};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.lineHeights.small};
  `}
`;
