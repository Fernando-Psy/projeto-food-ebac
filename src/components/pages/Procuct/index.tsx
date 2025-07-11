import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <p>ID do Produto: {id}</p>
      <p>Conteúdo do produto será exibido aqui.</p>
    </div>
  );
};

export default Product;
