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
  Modal,
  ModalContent,
  ModalHeader,
  ModalImage,
  ModalButton,
  ModalCloseButton,
  ModalDescription,
  ModalTitle,
  ModalUl,
} from './styles';
import { apiService } from '../../../services/api';
import { Restaurant, MenuItem as MenuItemType } from '../../../types';

const RestaurantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (item: MenuItemType) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              </MenuInfo>
              <AddButton onClick={() => openModal(item)}>
                Adicionar ao carrinho
              </AddButton>
            </MenuItem>
          ))}
        </MenuGrid>
      </ContentSection>

      {isModalOpen && selectedItem && (
        <Modal>
          <ModalContent>
            <ModalCloseButton onClick={closeModal}>×</ModalCloseButton>
            <ModalHeader>
              <ModalImage src={selectedItem.foto} alt={selectedItem.nome} />
              <ModalUl>
                <ModalTitle>{selectedItem.nome}</ModalTitle>
                <ModalDescription>{selectedItem.descricao}</ModalDescription>
                <ModalDescription>
                  Serve: {selectedItem.porcao}
                </ModalDescription>
                <ModalButton>
                  Adicionar ao carrinho - R$ {selectedItem.preco.toFixed(2)}
                </ModalButton>
              </ModalUl>
            </ModalHeader>
          </ModalContent>
        </Modal>
      )}

      <Footer />
    </PageContainer>
  );
};

export default RestaurantDetail;
