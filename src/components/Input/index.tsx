import React, { forwardRef } from 'react';
import { InputWrapper, StyledInput, StyledLabel } from './styles';

type InputProps = {
  placeholder?: string;
  type?: string;
  children: React.ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder = '', type = 'text', children, ...rest }, ref) => {
    return (
      <InputWrapper>
        <StyledInput
          ref={ref}
          type={type}
          placeholder={placeholder} // Necessário para o rótulo flutuante
          {...rest} // Garante que os valores do react-hook-form sejam passados
        />
        <StyledLabel>{children}</StyledLabel>
      </InputWrapper>
    );
  },
);
