export interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  img: string;
  imgUrl: string;
}

export interface User {
  id: string;
  name: string;
  tel: string;
  cep: string;
  logradouro: string;
  numero: number;
  complemento: string;
}

export interface SelectedItem {
  id: string;
  quantity: number;
  obs?: string;
}

export interface Pedido {
  id: string;
  userId: string;
  items: SelectedItem[];
  status: 'Em preparo';
}

export interface Info {
  id: string;
  userId: string;
  itemId: string;
  date: string;
  quantity: number;
  obs: string;
  price: number;
  status: 'Em preparo' | 'Preparado' | 'Finalizado';
}
