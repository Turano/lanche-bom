import { ButtonWrapper } from './styles';

export type BorderRadiusType = 'left' | 'right' | 'both' | 'none';

export type ToggleButtonProps = {
  children: React.ReactNode;
  isSelected: boolean;
  borderRadius?: BorderRadiusType;
  onClick: () => void;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  children,
  isSelected,
  borderRadius = 'none',
  onClick,
}) => {
  return (
    <ButtonWrapper
      isSelected={isSelected}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};
