import React from 'react';
import * as S from './styles';

export type ButtonProps = {
  color?: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

export const Button = ({
  onClick,
  children,
  color = 'primary',
}: ButtonProps) => {
  return (
    <S.Button color={color} onClick={onClick}>
      {children}
    </S.Button>
  );
};
