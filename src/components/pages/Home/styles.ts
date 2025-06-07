import { styled } from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

export const FoodGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 80px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1024px) {
    max-width: 800px;
    gap: 24px;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 40px;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    gap: 16px;
    margin-top: 32px;
  }
`;
