import { Restaurant } from '../types';

const API_BASE_URL = 'https://fake-api-tau.vercel.app/api/efood';

export const apiService = {
  async getRestaurants(): Promise<Restaurant[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/restaurantes`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar restaurantes:', error);
      throw error;
    }
  },

  async getRestaurantById(id: string): Promise<Restaurant | null> {
    try {
      const restaurants = await this.getRestaurants();
      return (
        restaurants.find((restaurant) => restaurant.id === parseInt(id)) || null
      );
    } catch (error) {
      console.error('Erro ao buscar restaurante:', error);
      throw error;
    }
  },
};
