import { InputHTMLAttributes, useState } from 'react';
import { Button } from '../Button';
import * as S from './styles';

export type checkboxInputTypes = InputHTMLAttributes<HTMLInputElement>;

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'midnight';
  isChecked?: boolean;
  value?: string | ReadonlyArray<string> | number | undefined;
} & checkboxInputTypes;

const Checkbox = ({
  onCheck,
  label,
  labelFor = '',
  isChecked = false,
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked;

    setChecked(status);

    !!onCheck && onCheck(status);
  };

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        name=""
        id={labelFor}
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
    </S.Wrapper>
  );
};

export default Checkbox;
