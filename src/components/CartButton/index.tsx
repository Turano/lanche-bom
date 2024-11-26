import { Button } from './styles';
import { FaCartShopping } from 'react-icons/fa6';

interface CartButtonProps {
  openModal: () => void;
}

export const CartButton = (props: CartButtonProps) => {
  return (
    <Button onClick={props.openModal}>
      <FaCartShopping size={24} />
    </Button>
  );
};
