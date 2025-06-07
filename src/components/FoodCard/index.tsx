import { Button, CardContainer, FoodImage } from './styles';

interface FoodCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const FoodCard: React.FC<FoodCardProps> = ({
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
      <Button>Saiba mais</Button>
    </CardContainer>
  );
};

export default FoodCard;
