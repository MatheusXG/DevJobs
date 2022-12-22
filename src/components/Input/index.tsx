import { InputHTMLAttributes } from 'react';
import * as S from './styles';

export type InputTypes = InputHTMLAttributes<HTMLInputElement>;

export type InputProps = {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
} & InputTypes;

export function Input({ icon, iconPosition = 'left', ...props }: InputProps) {
  return (
    <S.Wrapper>
      {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
      <S.Input iconPosition={iconPosition} {...props} />
    </S.Wrapper>
  );
}
