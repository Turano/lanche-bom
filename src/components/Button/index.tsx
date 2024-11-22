import { StyledButton } from './styles';

export type BorderRadiusType = 'left' | 'right' | 'both' | 'none';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  borderRadius?: BorderRadiusType;
  isMiddle?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  borderRadius = 'none',
  isMiddle = false,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      borderRadius={borderRadius}
      isMiddle={isMiddle}
    >
      {children}
    </StyledButton>
  );
};
