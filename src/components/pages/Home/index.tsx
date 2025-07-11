import React, { useState, useEffect } from 'react';
import Header from '../../Header';
import FoodCard from '../../FoodCard';
import Footer from '../../Footer';
import {
  HomeContainer,
  FoodGrid,
  LoadingMessage,
  ErrorMessage,
} from './styles';
import { apiService } from '../../../services/api';
import { Restaurant } from '../../../types';

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const data = await apiService.getRestaurants();
        setRestaurants(data);
      } catch (error) {
        setError('Erro ao carregar restaurantes. Tente novamente mais tarde.');
        console.error('Erro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return (
      <HomeContainer>
        <Header />
        <LoadingMessage>Carregando restaurantes...</LoadingMessage>
        <Footer />
      </HomeContainer>
    );
  }

  if (error) {
    return (
      <HomeContainer>
        <Header />
        <ErrorMessage>{error}</ErrorMessage>
        <Footer />
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      <Header />
      <FoodGrid>
        {restaurants.map((restaurant) => (
          <FoodCard
            key={restaurant.id}
            id={restaurant.id.toString()}
            image={restaurant.capa}
            title={restaurant.titulo}
            emphasis={restaurant.destacado ? 'Destaque da semana' : undefined}
            dish={restaurant.tipo}
            assessment={restaurant.avaliacao.toString()}
            description={restaurant.descricao}
          />
        ))}
      </FoodGrid>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
