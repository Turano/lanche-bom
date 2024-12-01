import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Typography } from '../Typography';
import {
  Button,
  Container,
  ScrollJump,
  StyledBackIcon,
  StyledButton,
  StyledCloseIcon,
} from './styles';
import { FaBirthdayCake, FaHamburger, FaHotdog } from 'react-icons/fa';
import { FaGlassWater } from 'react-icons/fa6';
import { useCardapio } from '../../contexts/cardapio/useCardapio';

const routes = [
  {
    actual: '/historico',
    previous: '/',
  },
  {
    actual: '/confirmar',
    previous: '/pedido',
  },
  {
    actual: '/pedido',
    previous: '/carrinho',
  },
  {
    actual: '/carrinho',
    previous: '/',
  },
  {
    actual: '/',
    previous: '/',
  },
];

export const SubHeader: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { getItemDetails } = useCardapio();
  const [searchParams] = useSearchParams();
  const itemId = Number(searchParams.get('itemId'));

  const item = getItemDetails(itemId);

  if (location.pathname === '/') {
    if (!itemId) {
      return (
        <ScrollJump>
          <Button onClick={() => navigate('#pastel')}>
            <FaHamburger />
          </Button>
          <Button>
            <FaHotdog />
          </Button>
          <Button>
            <FaGlassWater />
          </Button>
          <Button>
            <FaBirthdayCake />
          </Button>
        </ScrollJump>
      );
    } else {
      return (
        <Container>
          <StyledButton onClick={() => navigate('/')}>
            <StyledBackIcon />
          </StyledButton>
          <Typography weight="bold" as="h2" align="center" size="medium">
            {item?.category}
          </Typography>
          <div />
        </Container>
      );
    }
  }

  const handleClick = () => {
    const route = routes.find((route) => route.actual === location.pathname);

    if (route) {
      navigate(route.previous);
    }
  };

  return (
    <Container>
      <StyledButton onClick={handleClick}>
        {location.pathname === '/historico' ? (
          <StyledCloseIcon />
        ) : (
          <StyledBackIcon />
        )}
      </StyledButton>
      <Typography weight="bold" as="h2" align="center" size="medium">
        Carrinho
      </Typography>
      <div />
    </Container>
  );
};
