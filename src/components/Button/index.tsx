import React from 'react';
import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

export type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'none';
  children: React.ReactNode;
  fullWidth?: boolean;
} & ButtonTypes;

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Button variant={variant} {...props} fullWidth={fullWidth}>
      {children}
    </S.Button>
  );
};
