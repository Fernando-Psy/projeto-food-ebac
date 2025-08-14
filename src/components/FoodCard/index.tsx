import React from 'react';
import { Link } from 'react-router-dom';
import Estrela from '../../assets/images/estrela.png';
import {
  Button,
  CardContainer,
  ContainerTitle,
  DescriptionCard,
  DishButton,
  EmphasisButton,
  FoodImage,
} from './styles';

interface FoodCardProps {
  id?: string;
  image: string;
  title: string;
  emphasis?: string;
  dish?: string;
  assessment: string;
  description: string;
}

const truncateText = (text: string, maxLength: 250): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

const FoodCard: React.FC<FoodCardProps> = ({
  id = '1',
  image,
  title,
  emphasis,
  dish,
  assessment,
  description,
}) => {
  return (
    <div style={{ alignContent: 'center', width: '100%' }}>
      <CardContainer>
        <FoodImage src={image} alt={title} />
        {emphasis && <EmphasisButton>{emphasis}</EmphasisButton>}
        {dish && <DishButton>{dish}</DishButton>}
        <ContainerTitle>
          <li>{title}</li>
          <li>
            <span>{assessment}</span>
            <img src={Estrela} alt="Avaliação" />
          </li>
        </ContainerTitle>
        <DescriptionCard>{truncateText(description, 250)}</DescriptionCard>
        <br />
        <Button as={Link} to={`/restaurant/${id}`}>
          Saiba mais
        </Button>
      </CardContainer>
    </div>
  );
};

export default FoodCard;
