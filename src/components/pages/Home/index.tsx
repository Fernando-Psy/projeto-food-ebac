import React from 'react';
import Header from '../../Header';
import FoodCard from '../../FoodCard';
import { HomeContainer, FoodGrid } from './styles';

import sushiImg from '../../../assets/images/sushi.png';
import macarraoImg from '../../../assets/images/macarrao.png';
import Footer from '../../Footer';

const foodData = [
  {
    id: '1',
    image: sushiImg,
    title: 'Hioki Sushi ',
    emphasis: 'Destaque da semana',
    dish: 'japonesa',
    assessment: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
  },
  {
    id: '2',
    image: macarraoImg,
    title: 'La Dolce Vita Trattoria',
    dish: 'Italiana',
    assessment: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: '3',
    image: macarraoImg,
    title: 'La Dolce Vita Trattoria',
    dish: 'Italiana',
    assessment: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: '4',
    image: macarraoImg,
    title: 'La Dolce Vita Trattoria',
    dish: 'Italiana',
    assessment: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: '5',
    image: macarraoImg,
    title: 'La Dolce Vita Trattoria',
    dish: 'Italiana',
    assessment: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: '6',
    image: macarraoImg,
    title: 'La Dolce Vita Trattoria',
    dish: 'Italiana',
    assessment: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
];
const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <FoodGrid>
        {foodData.map((food, index) => (
          <FoodCard key={food.id} {...food} />
        ))}
      </FoodGrid>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
