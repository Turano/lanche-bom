import { createContext } from 'react';
import { Categoria, Info, Item, Pedido, User } from '../../types';
import { UseMutationResult, UseQueryResult } from 'react-query';

// Contexto e Provider
export interface PocketContextProps {
  cancelarPedido: UseMutationResult<void, Error, string>;
  finalizarPedido: UseMutationResult<
    void,
    Error,
    {
      pedidoInfo: Pedido;
      user: User;
    }
  >;
  getCardapio: UseQueryResult<Item[], Error>;
  useHistorico: (userId: string) => UseQueryResult<Info[], Error>;
  getLogo: UseQueryResult<string, Error>;
  getCategorias: UseQueryResult<Categoria[], Error>;
}

// Contexto vazio, será preenchido pelo `PocketProvider`
export const PocketContext = createContext<PocketContextProps | undefined>(
  undefined,
);
