import { useMediaQuery } from 'react-responsive';
import { Image } from '../Image';
import { Typography } from '../Typography';
import {
  CardContainer,
  CardContent,
  CardHeader,
  ImageContainer,
} from './styles';
import { useTheme } from 'styled-components';

interface CardProps {
  image?: string;
  name: string;
  price: number;
  description: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  imgUrl: string;
  alt: string;
}

export const Card = (props: CardProps) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery({ query: theme.media.lteMedium });

  if (isMediumScreen) {
    return (
      <CardContainer
        onClick={props.onClick}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // Impede a rolagem da página ao pressionar "Espaço"
            const syntheticMouseEvent = new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window,
            });
            e.currentTarget.dispatchEvent(syntheticMouseEvent); // Chama a função passada como props
          }
        }}
      >
        <CardContent>
          <Typography as="h3" size="large">
            {props.name}
          </Typography>
          <Typography as="p" size="small" overflow="ellipsis" limitLines={2}>
            {props.description}
          </Typography>
          <Typography as="p" size="small">
            R$ {props.price.toFixed(2)}
          </Typography>
        </CardContent>
        <ImageContainer>
          <Image src={props.imgUrl} alt={props.alt} height="90%" />
        </ImageContainer>
      </CardContainer>
    );
  }

  return (
    <CardContainer
      onClick={props.onClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault(); // Impede a rolagem da página ao pressionar "Espaço"
          const syntheticMouseEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
          });
          e.currentTarget.dispatchEvent(syntheticMouseEvent); // Chama a função passada como props
        }
      }}
    >
      <ImageContainer>
        <Image src={props.imgUrl} alt={props.alt} height="100%" border="1px" />
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
