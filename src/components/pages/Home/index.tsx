import React from 'react';
import Header from '../../Header';
import FoodCard from '../../FoodCard';
import { HomeContainer, FoodGrid } from './styles';

import sushiImg from '../../../assets/images/sushi.png';
import macarraoImg from '../../../assets/images/macarrao.png';

const foodData = [
  {
    image: sushiImg,
    title: 'Sushi',
    description: 'Delicious sushi with fresh ingredients.',
  },
  {
    image: macarraoImg,
    title: 'Macarrão',
    description: 'Tasty pasta with a variety of sauces.',
  },
];
const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <FoodGrid>
        {foodData.map((food, index) => (
          <FoodCard price={''} key={index} {...food} />
        ))}
      </FoodGrid>
    </HomeContainer>
  );
};

export default Home;
