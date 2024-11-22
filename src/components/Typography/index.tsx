import * as Styled from './styles';

export type TypographyProps = {
  children: React.ReactNode;
  colorDark?: boolean;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'huge';
  uppercase?: boolean;
  weight?: 'normal' | 'bold' | 'bolder';
  align?: 'left' | 'center' | 'right' | 'justify';
};

export const Typography = ({
  children,
  colorDark = true,
  as = 'p',
  size = 'medium',
  uppercase = false,
  weight = 'normal',
  align = 'left',
}: TypographyProps) => {
  return (
    <Styled.Text
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
      weight={weight}
      align={align}
    >
      {children}
    </Styled.Text>
  );
};
