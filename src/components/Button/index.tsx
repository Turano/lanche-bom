import { Loader, StyledButton } from './styles';

export type BorderRadiusType = 'left' | 'right' | 'both' | 'none';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  borderRadius?: BorderRadiusType;
  isMiddle?: boolean;
  type?: 'button' | 'submit';
  form?: string;
  disabled?: boolean;
  isLoading?: boolean;
  bgColor?: 'primary' | 'white';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  borderRadius = 'none',
  isMiddle = false,
  type = 'button',
  form,
  disabled,
  isLoading = false,
  bgColor = 'primary',
}) => {
  if (isLoading) disabled = true;
  return (
    <StyledButton
      onClick={onClick}
      borderRadius={borderRadius}
      isMiddle={isMiddle}
      type={type}
      form={form}
      disabled={disabled}
      bgColor={bgColor}
    >
      {isLoading ? <Loader /> : children}
    </StyledButton>
  );
};
