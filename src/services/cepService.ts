// src/services/cepService.ts
import axios from 'axios';

export interface CepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export const fetchAddressByCep = async (
  cep: string,
): Promise<CepResponse | null> => {
  const cleanCep = cep.replace(/\D/g, '');

  if (cleanCep.length !== 8) {
    throw new Error('CEP deve conter 8 dígitos');
  }

  try {
    const response = await axios.get<CepResponse>(
      `https://viacep.com.br/ws/${cleanCep}/json/`,
    );

    if (response.data && !response.data.erro) {
      return response.data;
    } else {
      throw new Error('CEP não encontrado');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('Erro na consulta do CEP. Verifique sua conexão.');
    }
    throw error;
  }
};

export const validateCep = (cep: string): boolean => {
  const cleanCep = cep.replace(/\D/g, '');
  return cleanCep.length === 8;
};
