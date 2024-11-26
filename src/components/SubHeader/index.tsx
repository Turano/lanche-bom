import { Typography } from '../Typography';
import {
  Container,
  StyledBackIcon,
  StyledButton,
  StyledCloseIcon,
} from './styles';

interface SubHeaderProps {
  children: React.ReactNode;
  icon: 'back' | 'close';
  onClick?: () => void;
}

export const SubHeader: React.FC<SubHeaderProps> = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <Container>
      {props.icon === 'close' ? (
        <StyledButton onClick={handleClick}>
          <StyledCloseIcon />
        </StyledButton>
      ) : (
        <StyledButton onClick={handleClick}>
          <StyledBackIcon />
        </StyledButton>
      )}
      <Typography weight="bold" as="h2" align="center" size="medium">
        {props.children}
      </Typography>
      <div />
    </Container>
  );
};
