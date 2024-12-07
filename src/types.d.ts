export interface Item {
  id: string;
  categoria: string;
  nome: string;
  preco: number;
  descricao: string;
  img: string;
  imgUrl: string;
  alt: string;
  disponivel: boolean;
}

export interface User {
  id: string;
  nome: string;
  tel: string;
  rua?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  tipoEntrega: 'entrega' | 'retirada';
}

export interface SelectedItem {
  id?: string;
  item: string; // itemId
  quantidade: number;
  obs?: string;
}

export interface Pedido {
  id?: string;
  items: SelectedItem[];
  status: 'Em preparo';
  desejaCancelar?: boolean;
}

interface ExpandItem {
  obs: string;
  quantidade: number;
  expand: {
    item: {
      nome: string;
      preco: number;
    };
  };
}

export interface Info {
  id: string;
  cliente: string;
  expand: {
    itens: ExpandItem[];
  };
  created: string;
  status: 'Em preparo' | 'Preparado' | 'Finalizado';
  precoTotal: number;
}

export interface Categoria {
  id: string;
  nome: string;
  img: string;
}
