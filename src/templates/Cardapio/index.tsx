import { useState } from 'react';
import { Card } from '../../components/Card';
import { Typography } from '../../components/Typography';
import { Modal } from '../../components/Modal';
import { ScrollJumpButton } from '../../components/ScrollJumpButton';
import { Container, ScrollJump, Wrapper } from './styles';
import { Item } from '../Item';
import { CartButton } from '../../components/CartButton';
import { MockData } from '../../api/mock-data';
import { Cart } from '../Cart';
import { useCart } from '../../contexts/cart';
import { SubHeader } from '../../components/SubHeader';

interface CardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  onClick?: (item: CardProps) => void;
}

export const Cardapio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<CardProps | null>(null);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const { state } = useCart();

  const openItemModal = (item: CardProps) => {
    setSelectedItem(item);
    setIsItemModalOpen(true);
  };

  const closeItemModal = () => {
    setSelectedItem(null);
    setIsItemModalOpen(false);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  if (isItemModalOpen) {
    return (
      <>
        <SubHeader icon="back" onClick={closeItemModal}>
          Carrinho
        </SubHeader>

        <Modal isOpen={isItemModalOpen} onClose={closeItemModal}>
          {selectedItem && (
            <Item
              description={selectedItem.description}
              name={selectedItem.name}
              price={selectedItem.price}
              closeModal={closeItemModal}
              id={selectedItem.id}
            />
          )}
        </Modal>
      </>
    );
  }

  if (isCartModalOpen) {
    return (
      <>
        <SubHeader icon="back" onClick={closeCartModal}>
          Carrinho
        </SubHeader>
        <Modal isOpen={isCartModalOpen} onClose={closeCartModal}>
          <Cart />
        </Modal>
      </>
    );
  }

  return (
    <>
      <Wrapper>
        <>
          <ScrollJump>
            <ScrollJumpButton icon="hamburger" />
            <ScrollJumpButton icon="hotdog" />
            <ScrollJumpButton icon="drink" />
            <ScrollJumpButton icon="pastel" />
          </ScrollJump>
          <Container>
            <Typography size="large" as="h2" weight="bold" uppercase>
              Pastel
            </Typography>
            {MockData.map((item, index) => (
              <div key={index}>
                <Card
                  onClick={() => openItemModal(item)}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                />
                <hr />
              </div>
            ))}
          </Container>
        </>
      </Wrapper>
      {state.items.length && <CartButton openModal={openCartModal} />}
    </>
  );
};
