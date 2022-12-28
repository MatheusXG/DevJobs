import { InputHTMLAttributes } from 'react';
import { Button } from '../Button';
import MediaMatch from '../MediaMatch';
import * as S from './styles';

import { BsFunnelFill } from 'react-icons/Bs';

export type InputTypes = InputHTMLAttributes<HTMLInputElement>;

export type InputProps = {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
} & InputTypes;

export function Input({ icon, iconPosition = 'left', ...props }: InputProps) {
  return (
    <S.Wrapper>
      {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}

      <MediaMatch lessThan="small">
        <Button fullWidth variant="none">
          <S.IconButton>{<BsFunnelFill size={24} />}</S.IconButton>
        </Button>
      </MediaMatch>

      <S.Input iconPosition={iconPosition} {...props} />
    </S.Wrapper>
  );
}
