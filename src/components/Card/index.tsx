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
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  imgUrl: string;
}

export const Card = (props: CardProps) => {
  return (
    <CardContainer onClick={props.onClick}>
      <ImageContainer>
        <Image src={props.imgUrl} alt="placeholder" height="100%" />
      </ImageContainer>
      <CardContent>
        <CardHeader>
          <Typography as="h3" size="small" weight="bold">
            {props.name}
          </Typography>
          <Typography as="p" size="small" weight="bold">
            R$ {props.price.toFixed(2)}
          </Typography>
        </CardHeader>
        <Typography as="p" size="small" overflow="ellipsis" limitLines={2}>
          {props.description}
        </Typography>
      </CardContent>
    </CardContainer>
  );
};
