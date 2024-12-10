import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Typography } from '../Typography';
import {
  Button,
  Container,
  StyledBackIcon,
  StyledButton,
  StyledCloseIcon,
} from './styles';
import { usePocket } from '../../contexts/api/usePocket';
import { ReactSVG } from 'react-svg';

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

  const { getCardapio, getCategorias } = usePocket();

  const [searchParams] = useSearchParams();
  const itemId = searchParams.get('itemId');

  const item = getCardapio.data?.find((item) => item.id === itemId);

  const handleScrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Se estiver na home
  if (location.pathname === '/') {
    // Se item for undefined (não estiver em um item específico e sim no cardápio)
    if (!itemId) {
      // Se estiver carregando as categorias
      if (getCategorias.isLoading) {
        return (
          <Container>
            <Button />
          </Container>
        );
      }
      return (
        <Container>
          {getCategorias.data?.map((categoria) => (
            <Button
              key={categoria.id}
              onClick={() => handleScrollToElement(categoria.nome)}
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault(); // Evita scroll ao pressionar barra de espaço
                  handleScrollToElement(categoria.nome);
                }
              }}
            >
              <ReactSVG src={categoria.img} />
            </Button>
          ))}
        </Container>
      );
    } else {
      return (
        <Container>
          <StyledButton onClick={() => navigate('/')}>
            <StyledBackIcon />
          </StyledButton>
          <Typography weight="bold" as="h2" align="center" size="medium">
            {
              getCategorias.data?.find(
                (categoria) => categoria.id === item?.categoria,
              )?.nome
            }
          </Typography>
          <div style={{ width: '40px' }} />
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

  if (
    location.pathname !== '/carrinho' &&
    location.pathname !== '/confirmar' &&
    location.pathname !== '/historico' &&
    location.pathname !== '/pedido'
  )
    return null;

  const subHeaderTitle = {
    '/carrinho': 'Carrinho',
    '/confirmar': 'Confirmar pedido',
    '/historico': 'Meus Pedidos',
    '/pedido': 'Pedido',
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
        {subHeaderTitle[location.pathname]}
      </Typography>
      <div />
    </Container>
  );
};
