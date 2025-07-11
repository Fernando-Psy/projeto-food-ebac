import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderInternal from '../../HeaderInternal';
import Footer from '../../Footer';
import {
  PageContainer,
  HeroSection,
  HeroImage,
  HeroContent,
  CategoryTag,
  RestaurantTitle,
  ContentSection,
  MenuGrid,
  MenuItem,
  MenuImage,
  MenuInfo,
  MenuTitle,
  MenuDescription,
  AddButton,
  LoadingMessage,
  ErrorMessage,
} from './styles';
import { apiService } from '../../../services/api';
import { Restaurant } from '../../../types';

const RestaurantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const data = await apiService.getRestaurantById(id);
        setRestaurant(data);
        if (!data) {
          setError('Restaurante não encontrado');
        }
      } catch (error) {
        setError('Erro ao carregar dados do restaurante');
        console.error('Erro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (loading) {
    return (
      <PageContainer>
        <HeaderInternal />
        <LoadingMessage>Carregando...</LoadingMessage>
        <Footer />
      </PageContainer>
    );
  }

  if (error || !restaurant) {
    return (
      <PageContainer>
        <HeaderInternal />
        <ErrorMessage>{error || 'Restaurante não encontrado'}</ErrorMessage>
        <Footer />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <HeaderInternal />

      <HeroSection>
        <HeroImage src={restaurant.capa} alt={restaurant.titulo} />
        <HeroContent>
          <CategoryTag>{restaurant.tipo}</CategoryTag>
          <RestaurantTitle>{restaurant.titulo}</RestaurantTitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <MenuGrid>
          {restaurant.cardapio.map((item) => (
            <MenuItem key={item.id}>
              <MenuImage src={item.foto} alt={item.nome} />
              <MenuInfo>
                <MenuTitle>{item.nome}</MenuTitle>
                <MenuDescription>{item.descricao}</MenuDescription>
                <AddButton>Adicionar ao carrinho</AddButton>
              </MenuInfo>
            </MenuItem>
          ))}
        </MenuGrid>
      </ContentSection>

      <Footer />
    </PageContainer>
  );
};

export default RestaurantDetail;
