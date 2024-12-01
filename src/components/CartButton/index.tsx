import { Button } from './styles';
import { FaCartShopping } from 'react-icons/fa6';

interface CartButtonProps {
  onClick: () => void;
}

export const CartButton = (props: CartButtonProps) => {
  return (
    <Button onClick={props.onClick}>
      <FaCartShopping size={24} />
    </Button>
  );
};
