import React from 'react';
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
} from './styles';

import restaurantHero from '../../../assets/images/macarrao.png';
import dish1 from '../../../assets/images/marguerita.png';

const menuItems = [
  {
    id: 1,
    image: dish1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 2,
    image: dish1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 3,
    image: dish1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 4,
    image: dish1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 5,
    image: dish1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 6,
    image: dish1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
];

const RestaurantDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <PageContainer>
      <HeaderInternal />

      <HeroSection>
        <HeroImage src={restaurantHero} alt="La Dolce Vita Trattoria" />
        <HeroContent>
          <CategoryTag>Italiana</CategoryTag>
          <RestaurantTitle>La Dolce Vita Trattoria</RestaurantTitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <MenuGrid>
          {menuItems.map((item) => (
            <MenuItem key={item.id}>
              <MenuImage src={item.image} alt={item.title} />
              <MenuInfo>
                <MenuTitle>{item.title}</MenuTitle>
                <MenuDescription>{item.description}</MenuDescription>
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
