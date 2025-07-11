import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { Restaurant } from '../types';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getRestaurants();
        setRestaurants(data);
      } catch (error) {
        setError('Erro ao carregar restaurantes');
        console.error('Erro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { restaurants, loading, error, refetch: setRestaurants };
};

export const useRestaurant = (id: string) => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getRestaurantById(id);
        setRestaurant(data);
        if (!data) {
          setError('Restaurante não encontrado');
        }
      } catch (error) {
        setError('Erro ao carregar restaurante');
        console.error('Erro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  return { restaurant, loading, error };
};
