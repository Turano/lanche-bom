import { Image } from '../Image';
import { Typography } from '../Typography';
import {
  CardContainer,
  CardContent,
  CardHeader,
  ImageContainer,
} from './styles';

interface CardProps {
  image?: string;
  name: string;
  price: number;
  description: string;
  onClick?: () => void;
}

export const Card = (props: CardProps) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <CardContainer onClick={handleClick}>
      <ImageContainer>
        <Image src="src/assets/logo.png" alt="placeholder" height="100%" />
      </ImageContainer>
      <CardContent>
        <CardHeader>
          <Typography as="h3" size="medium" weight="bold">
            {props.name}
          </Typography>
          <Typography as="p" size="small" weight="bold">
            R$ {props.price.toFixed(2)}
          </Typography>
        </CardHeader>
        <Typography as="p" size="small">
          {props.description}
        </Typography>
      </CardContent>
    </CardContainer>
  );
};
