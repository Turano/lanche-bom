import * as Styled from './styles';

export type ImageProps = {
  src: string;
  alt: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  border?: string;
};

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  borderRadius,
  border = 'none',
  width = 'auto',
  height = 'auto',
}) => {
  return (
    <Styled.Image
      src={src}
      alt={alt}
      borderRadius={borderRadius}
      width={width}
      height={height}
      border={border}
    />
  );
};
