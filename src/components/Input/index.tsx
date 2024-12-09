import React from 'react';
import { ErrorMessage, StyledInputMask, StyledLabel } from './styles';
import { Controller, useFormContext } from 'react-hook-form';

interface InputProps {
  name: string;
  mask?: string | Array<string | RegExp>;
  alwaysShowMask?: boolean;
  type?: string;
  placeholder?: string;
  rules?: object;
}

export const Input: React.FC<InputProps> = ({
  name,
  mask = '',
  alwaysShowMask = false,
  type = 'text',
  placeholder,
  rules = {},
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <>
          <StyledInputMask
            {...field}
            mask={mask}
            type={type}
            placeholder=""
            error={!!errors[name]}
            alwaysShowMask={alwaysShowMask}
            maskPlaceholder=""
          />
          <StyledLabel>{placeholder}</StyledLabel>
          {errors[name] && (
            <ErrorMessage>{String(errors[name]?.message)}</ErrorMessage>
          )}
        </>
      )}
    />
  );
};
