import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { useCart } from '../../contexts/cart';
import { Container, ItemContainer } from './styles';
import { usePocket } from '../../contexts/api/usePocket';
import { BottomButtonContainer } from '../../styles';
import { useState } from 'react';

export const Confirmação = () => {
  const { state, dispatch } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const { finalizarPedido, getCardapio } = usePocket();

  const navigate = useNavigate();

  const handleFinalizar = async () => {
    setIsLoading(true);
    finalizarPedido.mutate(
      {
        pedidoInfo: {
          status: 'Em preparo',
          items: state.items,
        },
        user: {
          id: state.userId,
          nome: state.nome,
          tel: state.tel,
          rua: state.rua,
          bairro: state.bairro,
          numero: state.numero,
          complemento: state.complemento,
          tipoEntrega: state.tipoEntrega,
        },
      },
      {
        onSuccess: () => {
          console.log('Pedido finalizado com sucesso!');
          dispatch({ type: 'CLEAR_CART' });
          navigate('/historico');
        },
        onError: (error) => {
          console.error('Erro ao finalizar o pedido:', error);
          setIsLoading(false);
        },
      },
    );
  };

  const total = state.items.reduce((acc, item) => {
    const product = getCardapio.data?.find((data) => data.id === item.item);
    return acc + (product ? product.preco * item.quantidade : 0);
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
              (data) => data.id === item.item,
            );
            return (
              <li key={item.item} style={{ listStyleType: 'none' }}>
                <ItemContainer>
                  <Typography size="small">
                    {item.quantidade}x {product?.nome}
                  </Typography>
                  <Typography size="small">
                    R$ {product?.preco.toFixed(2)}
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
        <Typography size="small">Nome: {state.nome}</Typography>
        <Typography size="small">Telefone: {state.tel}</Typography>
        {state.tipoEntrega === 'retirada' ? null : (
          <>
            <Typography size="small">Rua: {state.rua}</Typography>
            <Typography size="small">Número: {state.numero}</Typography>
            <Typography size="small">Bairro: {state.bairro}</Typography>
            <Typography size="small">
              Complemento: {state.complemento}
            </Typography>
          </>
        )}
        <BottomButtonContainer>
          <Button
            borderRadius="both"
            onClick={handleFinalizar}
            isLoading={isLoading}
          >
            <Typography as="p" size="small">
              Finalizar Pedido
            </Typography>
          </Button>
        </BottomButtonContainer>
      </Container>
    </>
  );
};
