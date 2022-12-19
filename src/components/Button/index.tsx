import React from 'react';
import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

export type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  color?: 'primary' | 'secondary';
  children?: React.ReactNode;
  fullWidth?: boolean;
};

export const Button = ({
  children,
  color = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Button color={color} fullWidth={fullWidth} {...props}>
      {children}
    </S.Button>
  );
};
