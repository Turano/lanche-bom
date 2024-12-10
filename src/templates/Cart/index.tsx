import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { useCart } from '../../contexts/cart';
import { Card } from '../../components/Card';
import { Break, ButtonGroupContainer } from './styles';
import { usePocket } from '../../contexts/api/usePocket';
import { BottomButtonContainer } from '../../styles';
import { useTheme } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

export const Cart = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const { getCardapio } = usePocket();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery({ query: theme.media.lteMedium });

  const handleDecrement =
    (id: string, quantidade: number, obs: string = '') =>
    () => {
      if (quantidade === 1) {
        dispatch({
          type: 'REMOVE_FROM_CART',
          payload: { id: id, obs: obs },
        });
        return;
      }

      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: {
          id: id,
          quantidade: quantidade - 1,
          obs: obs,
        },
      });
    };

  const handleIncrement =
    (id: string, quantidade: number, obs: string = '') =>
    () => {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: {
          id: id,
          quantidade: Math.min(quantidade + 1, 20),
          obs: obs,
        },
      });
    };

  const total = state.items.reduce((acc, item) => {
    const product = getCardapio.data?.find((data) => data.id === item.item);
    return product ? acc + product.preco * item.quantidade : acc;
  }, 0);

  return (
    <>
      <Typography as="h2" size="medium" weight="bold">
        Itens escolhidos
      </Typography>
      {state.items.length ? (
        <>
          <div
            style={
              isMediumScreen
                ? {
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }
                : undefined
            }
          >
            {state.items.map((item, index) => {
              const product = getCardapio.data?.find(
                (data) => data.id === item.item,
              );
              return product ? (
                <div
                  key={index}
                  style={
                    isMediumScreen
                      ? {
                          width: '48%',
                          display: 'flex',
                          flexDirection: 'column',
                        }
                      : undefined
                  }
                >
                  <Card
                    nome={product.nome}
                    price={product.preco}
                    description={product.descricao}
                    imgUrl={product.imgUrl}
                    onClick={() => {}}
                    alt={product.alt}
                  />
                  <Typography as="p" size="small">
                    {item.obs ? `Observação: ${item.obs}` : null}
                  </Typography>
                  <ButtonGroupContainer>
                    <Button
                      borderRadius="left"
                      onClick={handleDecrement(
                        product.id,
                        item.quantidade,
                        item.obs,
                      )}
                    >
                      <Typography as="span" size="small">
                        -
                      </Typography>
                    </Button>
                    <Button isMiddle disabled={true}>
                      <Typography as="span" size="small">
                        {item.quantidade}
                      </Typography>
                    </Button>
                    <Button
                      borderRadius="right"
                      onClick={handleIncrement(
                        product.id,
                        item.quantidade,
                        item.obs,
                      )}
                    >
                      <Typography as="span" size="small">
                        +
                      </Typography>
                    </Button>
                  </ButtonGroupContainer>
                  <Break />
                </div>
              ) : null;
            })}
          </div>
          <Typography as="p" size="medium" weight="bold">
            Total: R$ {total.toFixed(2)}
          </Typography>
          <div style={{ marginBottom: '8rem' }} />
        </>
      ) : (
        <Typography as="p" size="medium">
          Seu carrinho está vazio
        </Typography>
      )}

      <BottomButtonContainer>
        <Button
          borderRadius="both"
          onClick={() => navigate('/pedido')}
          disabled={!state.items.length}
        >
          <Typography as="p" size="small">
            Continuar pedido
          </Typography>
        </Button>
      </BottomButtonContainer>
    </>
  );
};
