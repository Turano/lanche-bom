import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { useCart } from '../../contexts/cart';
import { Card } from '../../components/Card';
import { ButtonContainer, ButtonGroupContainer } from './styles';
import { usePocket } from '../../contexts/api/usePocket';

export const Cart = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const { getCardapio } = usePocket();

  const handleDecrement = (id: string, quantity: number) => () => {
    if (quantity === 1) {
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: id,
      });
      return;
    }

    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id: id,
        quantity: quantity - 1,
      },
    });
  };

  const handleIncrement = (id: string, quantity: number) => () => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id: id,
        quantity: quantity + 1,
      },
    });
  };

  const total = state.items.reduce((acc, item) => {
    const product = getCardapio.data?.find((data) => data.id === item.id);
    return product ? acc + product.price * item.quantity : acc;
  }, 0);

  return (
    <>
      <Typography as="h2" size="medium" weight="bold">
        Itens escolhidos
      </Typography>
      {state.items.length ? (
        <>
          {state.items.map((item, index) => {
            const product = getCardapio.data?.find(
              (data) => data.id === item.id,
            );
            return product ? (
              <div key={index}>
                <Card
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  imgUrl={product.imgUrl}
                  onClick={() => {}}
                />
                <ButtonGroupContainer>
                  <Button
                    borderRadius="left"
                    onClick={handleDecrement(product.id, item.quantity)}
                  >
                    -
                  </Button>
                  <Button isMiddle disabled={true}>
                    {item.quantity}
                  </Button>
                  <Button
                    borderRadius="right"
                    onClick={handleIncrement(product.id, item.quantity)}
                  >
                    +
                  </Button>
                </ButtonGroupContainer>
                <hr />
              </div>
            ) : null;
          })}
          <Typography as="p" size="medium" weight="bold">
            Total: R$ {total.toFixed(2)}
          </Typography>
        </>
      ) : (
        <Typography as="p" size="medium">
          Seu carrinho está vazio
        </Typography>
      )}

      <ButtonContainer>
        <Button
          borderRadius="both"
          onClick={() => navigate('/pedido')}
          disabled={!state.items.length}
        >
          <Typography as="p" size="small">
            Continuar pedido
          </Typography>
        </Button>
      </ButtonContainer>
    </>
  );
};
