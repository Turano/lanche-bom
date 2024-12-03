import PocketBase from 'pocketbase';
import { useMutation, useQuery } from 'react-query';
import { Info, Item, Pedido, SelectedItem } from '../../types';
import { PocketContext } from './PocketContext';

// Instância do PocketBase
const pocketBaseUrl = 'https://lanche-bom.pockethost.io';
const pb = new PocketBase(pocketBaseUrl);

export const PocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // React Query para finalizar pedido
  const finalizarPedido = useMutation({
    mutationFn: async ({
      userId,
      name,
      tel,
      cep,
      rua,
      numero,
      complemento,
      tipoEntrega,
      itensSelecionados,
    }: {
      userId: string;
      name: string;
      tel: string;
      cep?: string;
      rua?: string;
      numero?: string;
      complemento?: string;
      tipoEntrega: 'entrega' | 'retirada';
      itensSelecionados: SelectedItem[];
      status: 'Em preparo';
    }): Promise<void> => {
      const pedido = await pb.collection('pedidos').create<Pedido>({
        userId,
        name,
        tel,
        cep,
        rua,
        numero,
        complemento,
        tipoEntrega,
        status: 'Em preparo',
      });

      const itemSelectedPromises = itensSelecionados.map((item) =>
        pb.collection('requestedItems').create<SelectedItem>(
          {
            item: item.id,
            quantity: item.quantity,
            obs: item.obs,
            pedidoId: pedido.id,
          },
          { requestKey: item.id },
        ),
      );

      await Promise.all(itemSelectedPromises);
    },
    onSuccess: () => {
      console.log('Pedido finalizado com sucesso!');
    },
    onError: (error: Error) => {
      console.error('Erro ao finalizar o pedido:', error);
    },
  });

  // React Query para buscar itens
  const getCardapio = useQuery<Item[], Error>({
    queryKey: 'cardapio',
    queryFn: async () => {
      const cardapio = await pb.collection('itens').getFullList<Item>();
      return cardapio.map((item) => ({
        ...item,
        imgUrl: pb.files.getURL(item, item.img),
      }));
    },
  });

  const getLogo = useQuery<string, Error>({
    queryKey: 'logo',
    queryFn: async () => {
      const config = await pb.collection('config').getFirstListItem('');
      return pb.files.getURL(config, config.logo);
    },
  });

  const useHistorico = (userId: string) => {
    return useQuery<Info[], Error>({
      queryKey: ['historico', userId], // Adiciona o userId na queryKey
      queryFn: async () =>
        await pb.collection('pedidosLista').getFullList({
          filter: `userId = "${userId}"`, // Filtra pedidos pelo userId
        }),
    });
  };

  return (
    <PocketContext.Provider
      value={{
        finalizarPedido,
        getCardapio,
        useHistorico,
        getLogo,
      }}
    >
      {children}
    </PocketContext.Provider>
  );
};
