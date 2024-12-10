import { useCart } from '../../contexts/cart';
import { Button, ButtonWrapper, CartCount } from './styles';
import { FaCartShopping } from 'react-icons/fa6';

interface CartButtonProps {
  onClick: () => void;
}

export const CartButton = (props: CartButtonProps) => {
  const { state } = useCart();

  return (
    <ButtonWrapper>
      <Button onClick={props.onClick}>
        <FaCartShopping size={24} />
      </Button>
      <CartCount>{state.items.length}</CartCount>
    </ButtonWrapper>
  );
};
