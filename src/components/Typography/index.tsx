import { useAppTheme } from '../../contexts/theme/useTheme';
import * as Styled from './styles';

export type TypographyProps = {
  children: React.ReactNode;
  color?: string;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'huge';
  uppercase?: boolean;
  weight?: 'normal' | 'bold' | 'bolder';
  align?: 'left' | 'center' | 'right' | 'justify';
  overflow?: 'none' | 'ellipsis';
  limitLines?: number | 'none';
  fontSize?: number;
};

export const Typography = ({
  children,
  color = '',
  as = 'p',
  size = 'medium',
  uppercase = false,
  weight = 'normal',
  align = 'left',
  overflow = 'none',
  limitLines = 'none',
}: TypographyProps) => {
  const { fontSize } = useAppTheme();

  return (
    <Styled.Text
      color={color}
      as={as}
      size={size}
      uppercase={uppercase}
      weight={weight}
      align={align}
      overflow={overflow}
      limitLines={limitLines}
      fontSize={fontSize}
    >
      {children}
    </Styled.Text>
  );
};
