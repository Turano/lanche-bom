import { useNavigate } from 'react-router-dom';
import { MockData } from '../../api/mock-data';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { useCart } from '../../contexts/cart';
import { Container, ItemContainer } from './styles';

export const Confirmação = () => {
  const { state, dispatch } = useCart();

  const navigate = useNavigate();

  const finalizarPedido = () => {
    console.log(state);
    dispatch({ type: 'CLEAR_CART' });
    navigate('/historico');
  };
  return (
    <Container>
      <Typography>Resumo</Typography>
      <hr />
      <ul>
        {state.items.map((item) => {
          const product = MockData.find((data) => data.id === item.id);
          return (
            <li key={item.id}>
              <ItemContainer>
                <Typography>
                  {item.quantity} {product?.name}
                </Typography>
                <Typography>R$ {product?.price.toFixed(2)}</Typography>
              </ItemContainer>
              {item.obs ? <Typography>Obs: {item.obs}</Typography> : null}
            </li>
          );
        })}
      </ul>
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
      <Button borderRadius="both" onClick={finalizarPedido}>
        Finalizar Pedido
      </Button>
    </Container>
  );
};
