import React from 'react';
import { Link } from 'react-router-dom';
import Estrela from '../../assets/images/estrela.png';
import {
  AssessmentImg,
  Button,
  CardContainer,
  ContainerTitle,
  DescriptionCard,
  DishButton,
  EmphasisButton,
  FoodImage,
  TitleCard,
  TitleCards,
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
    <CardContainer>
      <FoodImage src={image} alt={title} />
      {emphasis && <EmphasisButton>{emphasis}</EmphasisButton>}
      {dish && <DishButton>{dish}</DishButton>}
      <ContainerTitle>
        <TitleCard>{title}</TitleCard>
        <li>
          <span>{assessment}</span>
          <AssessmentImg src={Estrela} alt="Avaliação" />
        </li>
      </ContainerTitle>
      <DescriptionCard>{description}</DescriptionCard>
      <Button as={Link} to={`/restaurant/${id}`}>
        Saiba mais
      </Button>
    </CardContainer>
  );
};

export default FoodCard;
