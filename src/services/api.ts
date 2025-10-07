import { Restaurant } from '../types';

const API_BASE_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes';

export const apiService = {
  async getRestaurants(): Promise<Restaurant[]> {
    try {
      const response = await fetch(`${API_BASE_URL}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar restaurantes:', error);
      throw error;
    }
  },

  async getRestaurantById(id: string): Promise<Restaurant | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar restaurante:', error);
      throw error;
    }
  },
};
