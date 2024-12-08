import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import { Textarea } from '../../components/TextArea';
import { Typography } from '../../components/Typography';
import { useCart } from '../../contexts/cart';
import { useSearchParams } from 'react-router-dom';
import { usePocket } from '../../contexts/api/usePocket';
import { useTheme } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

interface ItemProps {
  closeModal: () => void;
}

export const Item = (props: ItemProps) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery({ query: theme.media.lteMedium });
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
          item: itemId,
          quantidade: count,
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

  if (isMediumScreen) {
    return (
      <div>
        <Image src={item.imgUrl} alt="placeholder" width="75%" border="2px" />
        <Typography size="large" as="h2" weight="bold" uppercase align="center">
          {item.nome}
        </Typography>
        <Typography size="small" as="p">
          {item.descricao}
        </Typography>

        <Textarea
          placeholder="Observações"
          onChange={handleChangeTextArea}
          value={obs}
        />

        <div style={{ marginBottom: '8rem' }} />

        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            maxWidth: '400px',
            display: 'flex',
          }}
        >
          <Button onClick={handleDecrement} borderRadius="left" bgColor="white">
            <Typography as="span" size="small">
              -
            </Typography>
          </Button>
          <Button onClick={handleAddToCart} isMiddle={true}>
            <Typography as="span" size="small">
              {count.toString()} - R$ {(count * item.preco).toFixed(2)}
            </Typography>
          </Button>
          <Button
            onClick={handleIncrement}
            borderRadius="right"
            bgColor="white"
          >
            <Typography as="span" size="small">
              +
            </Typography>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <Image src={item.imgUrl} alt="placeholder" width="75%" border="2px" />
      <Typography size="large" as="h2" weight="bold" uppercase align="center">
        {item.nome}
      </Typography>
      <Typography size="small" as="p">
        {item.descricao}
      </Typography>

      <Textarea
        placeholder="Observações"
        onChange={handleChangeTextArea}
        value={obs}
      />

      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          maxWidth: '400px',
          display: 'flex',
        }}
      >
        <Button onClick={handleDecrement} borderRadius="left" bgColor="white">
          <Typography as="span" size="small">
            -
          </Typography>
        </Button>
        <Button onClick={handleAddToCart} isMiddle={true}>
          <Typography as="span" size="small">
            {count.toString()} - R$ {(count * item.preco).toFixed(2)}
          </Typography>
        </Button>
        <Button onClick={handleIncrement} borderRadius="right" bgColor="white">
          <Typography as="span" size="small">
            +
          </Typography>
        </Button>
      </div>
    </div>
  );
};
