import { useState } from 'react';
import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import { Textarea } from '../../components/TextArea';
import { Typography } from '../../components/Typography';
import { useCart } from '../../contexts/cart';

interface ItemProps {
  id: number;
  name: string;
  price: number;
  description: string;
  closeModal: () => void;
}

export const Item = (props: ItemProps) => {
  const { dispatch } = useCart();

  const [count, setCount] = useState(1);
  const [obs, setObs] = useState('');

  const handleDecrement = () => setCount((prev) => Math.max(prev - 1, 1));
  const handleIncrement = () => setCount((prev) => prev + 1);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: props.id,
        quantity: count,
        obs: obs,
      },
    });
    props.closeModal();
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setObs(e.target.value);
  };

  return (
    <div>
      <Image src="src/assets/logo.png" alt="placeholder" width="75%" />
      <Typography size="large" as="h2" weight="bold" uppercase align="center">
        {props.name}
      </Typography>
      <Typography size="small" as="p">
        {props.description}
      </Typography>

      <Textarea
        placeholder="Observações"
        onChange={handleChangeTextArea}
        value={obs}
      />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button onClick={handleDecrement} borderRadius="left">
          -
        </Button>
        <Button onClick={handleAddToCart} isMiddle={true}>
          {count.toString()} - R$ {(count * props.price).toFixed(2)}
        </Button>
        <Button onClick={handleIncrement} borderRadius="right">
          +
        </Button>
      </div>
    </div>
  );
};
