import { Typography } from '../../components/Typography';
import { usePocket } from '../../contexts/api/usePocket';
import { useCart } from '../../contexts/cart';
import { Info } from '../../types';
import { formatDate } from '../../utils/formatDate';
import {
  HistoryCard,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from './styles';

export const Histórico: React.FC = () => {
  const { state } = useCart();

  const { useHistorico, getCardapio } = usePocket();
  const { data, isLoading, isError } = useHistorico(state.userId);

  if (isLoading) {
    return <Typography>Carregando...</Typography>;
  }

  if (isError) {
    return <Typography>Ocorreu um erro ao carregar o histórico</Typography>;
  }

  const groupedItems = data?.reduce(
    (acc, item) => {
      const date = item.date;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    },
    {} as Record<string, Info[]>,
  );

  return (
    <div>
      <Typography as="h3" weight="bold" size="medium">
        Pedidos
      </Typography>
      {groupedItems &&
        Object.keys(groupedItems).map((date) => {
          return (
            <HistoryCard key={date}>
              <CardHeader>
                <span>{formatDate(date)}</span>
                <span>{groupedItems[date][0].status}</span>
              </CardHeader>

              <CardBody>
                {groupedItems[date].map((item, index) => {
                  const itemInfo = getCardapio.data?.find(
                    (i) => i.id === item.itemId,
                  );

                  return (
                    <p key={index}>
                      {item.quantity}x {itemInfo?.name}
                    </p>
                  );
                })}
              </CardBody>

              <CardFooter>
                <span>
                  R${' '}
                  {groupedItems[date]
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0,
                    )
                    .toFixed(2)}
                </span>
                <div>
                  <Button>Cancelar</Button>
                </div>
                <div>
                  <Button primary>Peça de novo</Button>
                </div>
              </CardFooter>
            </HistoryCard>
          );
        })}
    </div>
  );
};
