import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
}) => {
  return (
    <Styled.Button onClick={onClick} disabled={disabled} variant={variant}>
      {children}
    </Styled.Button>
  );
};
