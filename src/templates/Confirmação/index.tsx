import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { useCart } from '../../contexts/cart';
import { ButtonContainer, Container, ItemContainer } from './styles';
import { usePocket } from '../../contexts/api/usePocket';

export const Confirmação = () => {
  const { state, dispatch } = useCart();

  const { finalizarPedido, getCardapio } = usePocket();

  const navigate = useNavigate();

  const handleFinalizar = async () => {
    finalizarPedido.mutate(
      {
        userId: state.userId,
        name: state.name,
        tel: state.tel,
        cep: state.cep,
        rua: state.rua,
        numero: state.numero,
        complemento: state.complemento,
        tipoEntrega: state.tipoEntrega,
        itensSelecionados: state.items,
        status: 'Em preparo',
      },
      {
        onSuccess: () => {
          console.log('Pedido finalizado com sucesso!');
        },
        onError: (error) => {
          console.error('Erro ao finalizar o pedido:', error);
        },
      },
    );

    dispatch({ type: 'CLEAR_CART' });
    navigate('/historico');
  };

  const total = state.items.reduce((acc, item) => {
    const product = getCardapio.data?.find((data) => data.id === item.id);
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
            const product = getCardapio.data?.find(
              (data) => data.id === item.id,
            );
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
        <Typography size="small">Nome: {state.name}</Typography>
        <Typography size="small">Telefone: {state.tel}</Typography>
        {state.tipoEntrega === 'retirada' ? null : (
          <>
            <Typography size="small">CEP: {state.cep}</Typography>
            <Typography size="small">Rua: {state.rua}</Typography>
            <Typography size="small">Número: {state.numero}</Typography>
            <Typography size="small">
              Complemento: {state.complemento}
            </Typography>
          </>
        )}
        <ButtonContainer>
          <Button borderRadius="both" onClick={handleFinalizar}>
            <Typography as="p" size="small">
              Finalizar Pedido
            </Typography>
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};
