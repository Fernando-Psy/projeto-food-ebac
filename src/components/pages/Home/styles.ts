import { styled } from 'styled-components';
import { theme } from '../../../styles/theme';

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 1024px) {
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    padding: 0 14px;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

export const FoodGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 80px;
  max-width: 1024px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 60px;
    max-width: 800px;
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
    max-width: 100%;
  }

  @media (max-height: 360px) {
    gap: 12px;
    margin-top: 24px;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: ${theme.colors.corPrincipal};
  background-color: ${theme.colors.corSecundaria};
  border-radius: 8px;
  margin: 20px;
`;
