import { Sun } from '../Icons/Sun';
import { Moon } from '../Icons/Moon';

import * as S from './styles';
import { InputHTMLAttributes } from 'react';

export const Slider = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <S.ToggleWrapper>
      <Sun />
      <S.Label>
        <S.Checkbox type="checkbox" {...props} />
        <S.Slider>
          <S.Button />
        </S.Slider>
      </S.Label>
      <Moon />
    </S.ToggleWrapper>
  );
};
