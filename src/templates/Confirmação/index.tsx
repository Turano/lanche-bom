import { useNavigate } from 'react-router-dom';
import { MockData } from '../../api/mock-data';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { useCart } from '../../contexts/cart';
import { ButtonContainer, Container, ItemContainer } from './styles';

export const Confirmação = () => {
  const { state, dispatch } = useCart();

  const navigate = useNavigate();

  const finalizarPedido = () => {
    dispatch({ type: 'CLEAR_CART' });
    navigate('/historico');
  };

  const total = state.items.reduce((acc, item) => {
    const product = MockData.find((data) => data.id === item.id);
    return acc + (product ? product.price * item.quantity : 0);
  }, 0);

  return (
    <>
      <Container>
        <Typography size="large" as="h3" weight="bold">
          Resumo
        </Typography>
        <hr />
        <ul>
          {state.items.map((item) => {
            const product = MockData.find((data) => data.id === item.id);
            return (
              <li key={item.id} style={{ listStyleType: 'none' }}>
                <ItemContainer>
                  <Typography size="small">
                    {item.quantity} {product?.name}
                  </Typography>
                  <Typography size="small">
                    R$ {product?.price.toFixed(2)}
                  </Typography>
                </ItemContainer>
                {item.obs ? (
                  <Typography size="small">-&gt; Obs: {item.obs}</Typography>
                ) : null}
              </li>
            );
          })}
        </ul>
        <hr />
        <ItemContainer>
          <Typography size="medium" weight="bold">
            Total:
          </Typography>
          <Typography size="medium" weight="bold">
            R$ {total.toFixed(2)}
          </Typography>
        </ItemContainer>
        <hr />
        <Typography>Nome: {state.name}</Typography>
        <Typography>Telefone: {state.tel}</Typography>
        {state.tipoEntrega === 'retirada' ? null : (
          <>
            <Typography>CEP: {state.cep}</Typography>
            <Typography>Rua: {state.rua}</Typography>
            <Typography>Número: {state.numero}</Typography>
            <Typography>Complemento: {state.complemento}</Typography>
          </>
        )}
        <ButtonContainer>
          <Button borderRadius="both" onClick={finalizarPedido}>
            <Typography as="p" size="small">
              Finalizar Pedido
            </Typography>
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};
