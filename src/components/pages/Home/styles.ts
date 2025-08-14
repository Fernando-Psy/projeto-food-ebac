import { styled } from 'styled-components';
import { theme } from '../../../styles/theme';

export const HomeContainer = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    padding: 0 14px;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }

  @media (max-width: 360px) {
    padding: 0 4px;
  }
`;

export const FoodGrid = styled.div`
  max-width: 1024px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 80px;
  gap: 48px 80px;

  @media (max-width: 1200px) {
    gap: 40px 60px;
    margin-top: 70px;
  }

  @media (max-width: 1024px) {
    gap: 32px 48px;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
    margin-top: 40px;
    gap: 32px;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 32px;
    gap: 24px;
    max-width: 100%;
  }

  @media (max-width: 360px) {
    margin-top: 24px;
    gap: 20px;
  }

  @media (max-height: 600px) {
    margin-top: 24px;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;

  @media (max-width: 768px) {
    padding: 32px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 24px;
    font-size: 15px;
  }

  @media (max-width: 360px) {
    padding: 20px;
    font-size: 14px;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: ${theme.colors.corPrincipal};
  background-color: ${theme.colors.corSecundaria};
  border-radius: 8px;
  margin: 20px;

  @media (max-width: 768px) {
    padding: 32px;
    font-size: 16px;
    margin: 16px;
  }

  @media (max-width: 480px) {
    padding: 24px;
    font-size: 15px;
    margin: 12px;
  }

  @media (max-width: 360px) {
    padding: 20px;
    font-size: 14px;
    margin: 8px;
  }
`;
