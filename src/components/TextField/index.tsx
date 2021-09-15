import { useState } from 'react';
import { InputHTMLAttributes } from 'react';

import * as S from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  icon?: JSX.Element;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  icon,
  label,
  labelFor = '',
  initialValue = '',
  iconPosition = 'left',
  onInput,
  disabled = false,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setValue(newValue);

    if (onInput) {
      onInput(newValue);
    }
  };

  return (
    <S.Wrapper disabled={disabled}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          iconPosition={iconPosition}
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default TextField;
