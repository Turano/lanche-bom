import { useState } from 'react';
import { Card } from '../../components/Card';
import { Typography } from '../../components/Typography';
import { Modal } from '../../components/Modal';
import { Item } from '../Item';
import { CartButton } from '../../components/CartButton';
import { useCart } from '../../contexts/cart';
import { useNavigate } from 'react-router-dom';
import { usePocket } from '../../contexts/api/usePocket';
import { Break, CardGroupContainer } from './styles';
import { useTheme } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

export const Cardapio: React.FC = () => {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const { getCardapio, getCategorias } = usePocket();
  const { state } = useCart();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery({ query: theme.media.lteMedium });

  const closeItemModal = () => {
    setIsItemModalOpen(false);
  };

  const handleItemClick = async (
    e: React.MouseEvent<HTMLDivElement>,
    itemId: string,
  ) => {
    e.preventDefault();
    setIsItemModalOpen(true);
    navigate(`?itemId=${itemId}`);
  };

  if (isItemModalOpen) {
    return (
      <Modal isOpen={isItemModalOpen}>
        <Item closeModal={closeItemModal} />
      </Modal>
    );
  }

  if (getCardapio.isLoading || getCategorias.isLoading) {
    return <Typography>Carregando...</Typography>;
  }

  if (getCardapio.isError || getCategorias.isError) {
    return <Typography>Erro ao carregar cardápio</Typography>;
  }

  return (
    <>
      {getCategorias.data?.map((category) => {
        const filteredItems = getCardapio.data?.filter(
          (item) => item.categoria === category.id,
        );
        return (
          <div key={category.id} id={category.nome}>
            <Typography size="large" as="h2" weight="bold">
              {category.nome}
            </Typography>
            <CardGroupContainer>
              {filteredItems?.map((item) => (
                <div style={isMediumScreen ? { width: '48%' } : undefined}>
                  <Card
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                      handleItemClick(e, item.id)
                    }
                    nome={item.nome}
                    price={item.preco}
                    description={item.descricao}
                    imgUrl={item.imgUrl}
                    alt={item.alt}
                  />
                  <Break />
                </div>
              ))}
            </CardGroupContainer>
          </div>
        );
      })}
      {state.items.length ? (
        <CartButton onClick={() => navigate('/carrinho')} />
      ) : null}
    </>
  );
};
