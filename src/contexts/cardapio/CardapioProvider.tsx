import { useState, ReactNode } from 'react';
import { CardapioContext, CardapioItem } from './CardapioContext';
import { MockData } from '../../api/mock-data';

type Props = {
  children: ReactNode;
};

export const CardapioProvider = ({ children }: Props) => {
  const [cardapioItems] = useState<CardapioItem[]>(MockData);

  const getItemDetails = (id: number): CardapioItem | undefined => {
    return cardapioItems.find((item) => item.id === id);
  };

  return (
    <CardapioContext.Provider value={{ cardapioItems, getItemDetails }}>
      {children}
    </CardapioContext.Provider>
  );
};
