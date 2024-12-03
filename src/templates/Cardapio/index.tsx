import { useState } from 'react';
import { Card } from '../../components/Card';
import { Typography } from '../../components/Typography';
import { Modal } from '../../components/Modal';
import { Container, Wrapper } from './styles';
import { Item } from '../Item';
import { CartButton } from '../../components/CartButton';
import { useCart } from '../../contexts/cart';
import { useNavigate } from 'react-router-dom';
import { usePocket } from '../../contexts/api/usePocket';

const categories = ['pastel', 'bebida', 'hotdog', 'hamburguer'];

export const Cardapio: React.FC = () => {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);

  const { getCardapio } = usePocket();

  const { state } = useCart();
  const navigate = useNavigate();

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
      <Modal isOpen={isItemModalOpen} onClose={closeItemModal}>
        <Item closeModal={closeItemModal} />
      </Modal>
    );
  }

  if (getCardapio.isLoading) {
    return <Typography>Carregando...</Typography>;
  }

  if (getCardapio.isError) {
    return <Typography>Erro ao carregar cardápio</Typography>;
  }

  const items = getCardapio.data || [];

  return (
    <>
      <Wrapper>
        <Container>
          {categories.map((category) => {
            const filteredItems = items?.filter(
              (item) => item.category === category,
            );
            return (
              <div key={category} id={category}>
                <Typography size="large" as="h2" weight="bold" uppercase>
                  {category}
                </Typography>
                {filteredItems?.map((item, index) => (
                  <div key={index}>
                    <Card
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        handleItemClick(e, item.id)
                      }
                      name={item.name}
                      price={item.price}
                      description={item.description}
                    />
                    <hr />
                  </div>
                ))}
              </div>
            );
          })}
        </Container>
      </Wrapper>
      {state.items.length ? (
        <CartButton onClick={() => navigate('/carrinho')} />
      ) : null}
    </>
  );
};
