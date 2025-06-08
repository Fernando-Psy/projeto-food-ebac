import React from 'react';
import { Link } from 'react-router-dom';
import { Button, CardContainer, FoodImage } from './styles';

interface FoodCardProps {
  id?: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

const FoodCard: React.FC<FoodCardProps> = ({
  id = '1',
  image,
  title,
  description,
  price,
}) => {
  return (
    <CardContainer>
      <FoodImage src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{price}</span>
      <Button as={Link} to={`/restaurant/${id}`}>
        Saiba mais
      </Button>
    </CardContainer>
  );
};

export default FoodCard;
