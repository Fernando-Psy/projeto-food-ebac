export interface DeliveryFormData {
  name: string;
  address: string;
  city: string;
  cep: string;
  number: string;
  complement: string;
}

export interface PaymentFormData {
  cardName: string;
  cardNumber: string;
  cvv: string;
  expiryMonth: string;
  expiryYear: string;
}

export interface OrderData {
  id: string;
  delivery: DeliveryFormData;
  payment: Omit<PaymentFormData, 'cvv'>;
  total: number;
  items: CartItem[];
  createdAt: Date;
}

export interface CartItem {
  id: string;
  nome: string;
  preco: number;
  foto: string;
  quantidade: number;
}

export type CheckoutStep = 'delivery' | 'payment' | 'confirmation';
