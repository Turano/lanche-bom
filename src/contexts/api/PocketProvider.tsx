import PocketBase from 'pocketbase';
import { useMutation, useQuery } from 'react-query';
import { Categoria, Info, Item, Pedido, SelectedItem, User } from '../../types';
import { PocketContext } from './PocketContext';

// Instância do PocketBase
const pocketBaseUrl = 'https://lanche-bom.pockethost.io';
const pb = new PocketBase(pocketBaseUrl);

export const PocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const cancelarPedido = useMutation({
    mutationFn: async (pedidoId: string): Promise<void> => {
      await pb.collection('pedidos').update(pedidoId, {
        desejaCancelar: true,
      });
    },
    onSuccess: () => {
      console.log('Requisição de cancelamento enviada!');
    },
    onError: (error: Error) => {
      console.error('Erro ao cancelar o pedido:', error);
    },
  });

  // React Query para finalizar pedido
  const finalizarPedido = useMutation({
    mutationFn: async ({
      pedidoInfo,
      user,
    }: {
      pedidoInfo: Pedido;
      user: User;
    }): Promise<void> => {
      const isAberto = await pb.collection('config').getFirstListItem('');

      if (!isAberto.aberto) {
        throw new Error('A lanchonete está fechada no momento.');
      }

      let userExists;

      try {
        userExists = await pb.collection('users').getFirstListItem('', {
          filter: `id = "${user.id}"`,
        });
      } catch (error) {
        console.error('Primeiro pedido do usuário:', error);
        userExists = false;
      }

      if (!userExists) {
        await pb.collection('users').create({
          id: user.id,
          nome: user.nome,
          telefone: user.tel,
          rua: user.rua,
          numero: user.numero,
          complemento: user.complemento,
          bairro: user.bairro,
        });
      } else {
        if (user.tipoEntrega === 'entrega') {
          await pb.collection('users').update(user.id, {
            nome: user.nome,
            telefone: user.tel,
            rua: user.rua,
            numero: user.numero,
            complemento: user.complemento,
            bairro: user.bairro,
          });
        } else {
          await pb.collection('users').update(user.id, {
            nome: user.nome,
            telefone: user.tel,
          });
        }
      }

      const itemSelectedPromises = pedidoInfo.items.map((item) =>
        pb.collection('requestedItems').create<SelectedItem>(
          {
            item: item.item,
            quantidade: item.quantidade,
            obs: item.obs,
          },
          { requestKey: `${item.item}${item.obs}` },
        ),
      );

      const itemSelected = await Promise.all(itemSelectedPromises);

      const itemSelectedIds = itemSelected.map((item) => item.id);

      await pb.collection('pedidos').create<Pedido>({
        ...pedidoInfo,
        cliente: user.id,
        itens: itemSelectedIds,
        tipoEntrega: user.tipoEntrega,
      });
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

  const getCategorias = useQuery<Categoria[], Error>({
    queryKey: 'categorias',
    queryFn: async () => {
      const categorias = await pb
        .collection('categorias')
        .getFullList<Categoria>();
      return categorias.map((categoria) => ({
        ...categoria,
        img: pb.files.getURL(categoria, categoria.img),
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
        await pb.collection('pedidos').getFullList({
          filter: `cliente = "${userId}"`,
          expand: 'itens.item',
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
        getCategorias,
        cancelarPedido,
      }}
    >
      {children}
    </PocketContext.Provider>
  );
};
