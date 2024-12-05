import { createContext } from 'react';
import { Categoria, Info, Item, SelectedItem } from '../../types';
import { UseMutationResult, UseQueryResult } from 'react-query';

// Contexto e Provider
export interface PocketContextProps {
  finalizarPedido: UseMutationResult<
    void,
    Error,
    {
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
