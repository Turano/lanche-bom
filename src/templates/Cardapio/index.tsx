import { useState } from 'react';
import { Card } from '../../components/Card';
import { Typography } from '../../components/Typography';
import { Modal } from '../../components/Modal';
import { Container, Wrapper } from './styles';
import { Item } from '../Item';
import { CartButton } from '../../components/CartButton';
import { MockData } from '../../api/mock-data';
import { useCart } from '../../contexts/cart';
import { useNavigate } from 'react-router-dom';

const categories = ['Pastel', 'Bebida', 'Hotdog', 'Hamburguer'];

export const Cardapio: React.FC = () => {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);

  const { state } = useCart();
  const navigate = useNavigate();

  const closeItemModal = () => {
    setIsItemModalOpen(false);
  };

  const handleItemClick = (itemId: number) => {
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

  return (
    <>
      <Wrapper>
        <Container>
          {categories.map((category) => {
            const filteredItems = MockData.filter(
              (item) => item.category === category,
            );
            return (
              <>
                <Typography size="large" as="h2" weight="bold" uppercase>
                  {category}
                </Typography>
                {filteredItems.map((item, index) => (
                  <div key={index}>
                    <Card
                      onClick={() => handleItemClick(item.id)}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                    />
                    <hr />
                  </div>
                ))}
              </>
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
