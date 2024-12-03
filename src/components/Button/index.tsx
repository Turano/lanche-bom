import { StyledButton } from './styles';

export type BorderRadiusType = 'left' | 'right' | 'both' | 'none';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  borderRadius?: BorderRadiusType;
  isMiddle?: boolean;
  type?: 'button' | 'submit';
  form?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  borderRadius = 'none',
  isMiddle = false,
  type = 'button',
  form,
  disabled,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      borderRadius={borderRadius}
      isMiddle={isMiddle}
      type={type}
      form={form}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
