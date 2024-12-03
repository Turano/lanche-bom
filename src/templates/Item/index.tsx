import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import { Textarea } from '../../components/TextArea';
import { Typography } from '../../components/Typography';
import { useCart } from '../../contexts/cart';
import { useSearchParams } from 'react-router-dom';
import { usePocket } from '../../contexts/api/usePocket';

interface ItemProps {
  closeModal: () => void;
}

export const Item = (props: ItemProps) => {
  const { dispatch } = useCart();
  const { getCardapio } = usePocket();
  const [searchParams] = useSearchParams();
  const itemId = searchParams.get('itemId');

  useEffect(() => {
    if (!itemId) {
      props.closeModal();
    }
  }, [itemId, props]);

  const item = getCardapio.data?.find((item) => item.id === itemId);

  const [count, setCount] = useState(1);
  const [obs, setObs] = useState('');

  const handleDecrement = () => setCount((prev) => Math.max(prev - 1, 1));
  const handleIncrement = () => setCount((prev) => prev + 1);

  const handleAddToCart = () => {
    if (itemId) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          id: itemId,
          quantity: count,
          obs: obs,
        },
      });
    }
    props.closeModal();
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setObs(e.target.value);
  };

  if (!item) {
    return <p>Item não encontrado.</p>;
  }

  return (
    <div>
      <Image src="src/assets/logo.png" alt="placeholder" width="75%" />
      <Typography size="large" as="h2" weight="bold" uppercase align="center">
        {item.name}
      </Typography>
      <Typography size="small" as="p">
        {item.description}
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
          {count.toString()} - R$ {(count * item.price).toFixed(2)}
        </Button>
        <Button onClick={handleIncrement} borderRadius="right">
          +
        </Button>
      </div>
    </div>
  );
};
