import { Typography } from '../../components/Typography';
import { usePocket } from '../../contexts/api/usePocket';
import { useCart } from '../../contexts/cart';
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

  const { useHistorico } = usePocket();
  const { data, isLoading, isError } = useHistorico(state.userId);

  if (isLoading) {
    return <Typography>Carregando...</Typography>;
  }

  if (isError) {
    return <Typography>Ocorreu um erro ao carregar o histórico</Typography>;
  }

  console.log(data);

  return (
    <div>
      <Typography as="h3" weight="bold" size="medium">
        Pedidos
      </Typography>
      {data?.map((item) => (
        <HistoryCard key={item.id}>
          <CardHeader>
            <span>{formatDate(item.created)}</span>
            <span>{item.status}</span>
          </CardHeader>

          <CardBody>
            {item.expand.itens.map((item, index) => (
              <p key={index}>
                {item.quantidade}x {item.expand.item.nome}
              </p>
            ))}
          </CardBody>

          <CardFooter>
            <span>R$ {item.precoTotal.toFixed(2)}</span>
            <div>
              <Button>Cancelar</Button>
            </div>
            <div>
              <Button primary>Peça de novo</Button>
            </div>
          </CardFooter>
        </HistoryCard>
      ))}
    </div>
  );
};
