import { useState, ReactNode } from 'react';
import { CardapioContext } from './CardapioContext';
import { Item } from '../../types';
import { usePocket } from '../api/usePocket';

type Props = {
  children: ReactNode;
};

export const CardapioProvider = ({ children }: Props) => {
  const { getCardapio, getCategorias } = usePocket();

  const categorias = getCategorias.data || [];
  const [cardapioItems] = useState<Item[]>(getCardapio.data || []);

  const getItemDetails = (id: string): Item | undefined => {
    return cardapioItems.find((item) => item.id === id);
  };

  return (
    <CardapioContext.Provider
      value={{ cardapioItems, getItemDetails, categorias }}
    >
      {children}
    </CardapioContext.Provider>
  );
};
