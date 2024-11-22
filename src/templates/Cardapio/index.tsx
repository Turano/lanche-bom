import { useState } from 'react';
import { AccessibilityButton } from '../../components/AccessibilityButton';
import { Card } from '../../components/Card';
import { Typography } from '../../components/Typography';
import { MainHeader } from '../../components/MainHeader';
import { Modal } from '../../components/Modal';
import { ScrollJumpButton } from '../../components/ScrollJumpButton';
import { Container, ScrollJump, Wrapper } from './styles';
import { Image } from '../../components/Image';
import { Button } from '../../components/Button';

interface CardProps {
  name: string;
  price: number;
  description: string;
  onClick?: (item: CardProps) => void;
}

const MockData = [
  {
    name: 'Hamburguer',
    price: 10.0,
    description: 'Delicioso hamburguer com carne de primeira qualidade',
  },
  {
    name: 'Hotdog',
    price: 5.5,
    description: 'Hotdog com salsicha e pão fresquinho',
  },
  {
    name: 'Refrigerante',
    price: 3.2,
    description: 'Refrigerante geladinho',
  },
  {
    name: 'Pastel',
    price: 2.0,
    description: 'Pastel de carne ou queijo',
  },
];

export const Cardapio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<CardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: CardProps) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const [count, setCount] = useState(1);

  const handleDecrement = () => setCount((prev) => Math.max(prev - 1, 1));
  const handleIncrement = () => setCount((prev) => prev + 1);

  const handleMiddleClick = () => alert(`Current count: ${count}`);

  return (
    <>
      <Wrapper>
        <MainHeader />
        {isModalOpen ? (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {selectedItem && (
              <div>
                <Image
                  src="src/assets/logo.png"
                  alt="placeholder"
                  width="75%"
                />
                <Typography
                  size="large"
                  as="h2"
                  weight="bold"
                  uppercase
                  align="center"
                >
                  {selectedItem.name}
                </Typography>
                <Typography size="small" as="p">
                  {selectedItem.description}
                </Typography>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Button onClick={handleDecrement} borderRadius="left">
                    -
                  </Button>
                  <Button onClick={handleMiddleClick} isMiddle={true}>
                    {count.toString()} - R${' '}
                    {(count * selectedItem.price).toFixed(2)}
                  </Button>
                  <Button onClick={handleIncrement} borderRadius="right">
                    +
                  </Button>
                </div>
              </div>
            )}
          </Modal>
        ) : (
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
                    onClick={() => openModal(item)}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                  />
                  <hr />
                </div>
              ))}
            </Container>
          </>
        )}
      </Wrapper>
      <AccessibilityButton />
    </>
  );
};
