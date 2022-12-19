import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = {
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  color = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <S.Button color={color} {...props}>
      {children}
    </S.Button>
  );
};
