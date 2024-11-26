import { Link } from 'react-router-dom';
import { MockData } from '../../api/mock-data';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { useCart } from '../../contexts/cart';

export const Cart = () => {
  const { state } = useCart();

  const total = state.items.reduce((acc, item) => {
    const product = MockData.find((data) => data.id === item.id);
    return product ? acc + product.price * item.quantity : acc;
  }, 0);

  return (
    <>
      <Typography as="h2" size="large" weight="bold" uppercase>
        Carrinho
      </Typography>
      {state.items.length ? (
        <>
          {state.items.map((item, index) => {
            const product = MockData.find((data) => data.id === item.id);
            return (
              <div key={index}>
                <Typography as="p" size="medium">
                  {item.quantity} {product?.name} - R$ {product?.price}
                </Typography>
                <hr />
              </div>
            );
          })}
          <Typography as="p" size="medium">
            Total: R$ {total.toFixed(2)}
          </Typography>
        </>
      ) : (
        <Typography as="p" size="medium">
          Seu carrinho está vazio
        </Typography>
      )}

      <Link to="/pedido">
        <Button borderRadius="both">
          <Typography as="p" size="small" weight="bold">
            Continuar compra
          </Typography>
        </Button>
      </Link>
    </>
  );
};
