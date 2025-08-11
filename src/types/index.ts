// src/types/index.ts
export type DeliveryInfo = {
  name: string;
  address: string;
  number: string;
  complement: string; // Garanta que não seja opcional
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
  phone: string;
};
