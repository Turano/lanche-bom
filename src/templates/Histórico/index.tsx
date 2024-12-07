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
    <>
      <Typography as="h3" weight="bold" size="medium">
        Pedidos
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2%' }}>
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
              <Typography as="span" size="small">
                R$ {item.precoTotal.toFixed(2)}
              </Typography>
              <div>
                {item.status === 'Finalizado' ? null : (
                  <Button>Cancelar</Button>
                )}

                <Button primary>Peça de novo</Button>
              </div>
            </CardFooter>
          </HistoryCard>
        ))}
      </div>
    </>
  );
};
