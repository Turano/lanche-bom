import { useNavigate } from 'react-router-dom';
import { Typography } from '../../components/Typography';
import { usePocket } from '../../contexts/api/usePocket';
import { useCart } from '../../contexts/cart';
import { formatDate } from '../../utils/formatDate';
import {
  HistoryCard,
  CardHeader,
  CardBody,
  CardFooter,
  ModalFooter,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  Loader,
} from './styles';
import { Info } from '../../types';
import { useState } from 'react';
import { Button } from '../../components/Button';

export const Histórico: React.FC = () => {
  const { state, dispatch } = useCart();

  const { useHistorico, cancelarPedido } = usePocket();
  const { data, isLoading, isError, refetch } = useHistorico(state.userId);

  const [isCancelarLoading, setIsCancelarLoading] = useState(false);

  const navigate = useNavigate();

  const handleCancelar = (id: string) => {
    setIsCancelarLoading(true);
    cancelarPedido.mutate(id, {
      onSuccess: () => {
        console.log('Pedido cancelado com sucesso!');
        closeModal();
        refetch();
      },
      onError: (error) => {
        console.error('Erro ao cancelar o pedido:', error);
        alert('Erro ao cancelar o pedido');
      },
      onSettled: () => {
        setIsCancelarLoading(false);
      },
    });
  };

  const handleReorder = (item: Info) => {
    dispatch({ type: 'CLEAR_CART' });
    item.expand.itens.forEach((item) => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          item: item.expand.item.id,
          quantidade: item.quantidade,
          obs: item.obs,
        },
      });
    });
    navigate('/carrinho');
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const openModal = (id: string) => {
    setSelectedId(id);
    setModalOpen(true);
    console.log(id);
  };

  const closeModal = () => {
    setSelectedId(null);
    setModalOpen(false);
  };

  if (isLoading) {
    return <Typography>Carregando...</Typography>;
  }

  if (isError) {
    return <Typography>Ocorreu um erro ao carregar o histórico</Typography>;
  }

  const sortedData = data?.slice().sort((a, b) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  });

  return (
    <>
      <Typography as="h3" weight="bold" size="medium">
        Pedidos
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2%' }}>
        {sortedData?.map((item) => (
          <HistoryCard key={item.id}>
            <div>
              <CardHeader>
                <span>{formatDate(item.created)}</span>
                <span>
                  {item.desejaCancelar &&
                  item.status !== 'Finalizado' &&
                  item.status !== 'Cancelado'
                    ? 'Cancelando...'
                    : item.status}
                </span>
              </CardHeader>
              <div style={{ marginTop: '2rem' }} />
              <CardBody>
                {item.expand.itens.map((item, index) => (
                  <div key={index}>
                    <p>
                      {item.quantidade}x {item.expand.item.nome}
                    </p>
                    {item.obs ? <p>&emsp;-&gt; {item.obs}</p> : null}
                  </div>
                ))}
              </CardBody>
            </div>
            <CardFooter>
              <Typography as="span" size="small">
                R$ {item.precoTotal.toFixed(2)}
              </Typography>
              <div>
                {item.status === 'Finalizado' ||
                item.status === 'Cancelado' ||
                item.desejaCancelar ? null : (
                  <Button
                    borderRadius="left"
                    onClick={() => openModal(item.id)}
                    bgColor="white"
                  >
                    <Typography size="xsmall" weight="bold">
                      Cancelar
                    </Typography>
                  </Button>
                )}

                <Button
                  borderRadius="right"
                  onClick={() => handleReorder(item)}
                >
                  <Typography size="xsmall" weight="bold">
                    Peça de novo
                  </Typography>
                </Button>
              </div>
            </CardFooter>
          </HistoryCard>
        ))}

        {/* Modal de confirmação */}
        {isModalOpen && (
          <ModalOverlay>
            <ModalContainer>
              <ModalHeader>
                <Typography weight="bold">Confirmar Cancelamento</Typography>
              </ModalHeader>
              <ModalBody>
                <Typography>
                  Você tem certeza que deseja cancelar este pedido?
                </Typography>
              </ModalBody>
              <ModalFooter>
                <Button
                  borderRadius="both"
                  bgColor="primary"
                  onClick={closeModal}
                >
                  <Typography>Voltar</Typography>
                </Button>
                <Button
                  isLoading={isCancelarLoading}
                  borderRadius="both"
                  bgColor="white"
                  onClick={() => selectedId && handleCancelar(selectedId)}
                >
                  <Typography>
                    {isCancelarLoading ? <Loader /> : 'Cancelar'}
                  </Typography>
                </Button>
              </ModalFooter>
            </ModalContainer>
          </ModalOverlay>
        )}
      </div>
    </>
  );
};
