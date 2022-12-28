import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { InputProps } from '.';

type IconPositionProps = Pick<InputProps, 'iconPosition'>;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('small')`
      padding-right: ${theme.spacings.xsmall};

`}
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
    padding-left: ${theme.spacings.medium};

    border-right: 1px solid rgba(110, 128, 152, 0.2);
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`S
    ${media.lessThan('small')`

      width: 55px;
      height: 45px;
      padding-top: 1.1rem;
      padding-bottom: 1.1rem;
      padding-left: 1.1rem;
      padding-right: 1.1rem;
      margin-left: ${theme.spacings.small};

      color: ${theme.colors.white};
      border-radius: ${theme.border.radius.xsmall};
      background: ${theme.colors.violet};


      order: ${iconPosition !== 'left' ? 1 : 0};
      & > svg {
        width: 100%;
      }
    `}

    color: ${theme.colors.violet};
    width: ${theme.spacings.medium};
    order: ${iconPosition !== 'right' ? 1 : 0};
    & > svg {
      width: 100%;
    }
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;  
    `}

    ${media.greaterThan('medium')`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;  
    `}

    ${media.lessThan('small')`
        margin-right: ${theme.spacings.small};
    `}


    width: 100%;
    height: 100%;

    padding-left: ${theme.spacings.xsmall};

    outline: none;
    border: 0;
    background: none;

    ::placeholder {
      color: ${theme.colors.placeholderColor};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weight.regular};
    }

    color: ${theme.colors.fontColor};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.regular};
  `}
`;

export const IconButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.iconButtonColor};
  `}
`;
