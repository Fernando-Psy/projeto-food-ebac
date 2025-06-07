import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.corPrincipal};
  background-color: ${theme.colors.corBranco};
  margin-bottom: 48px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  // Responsividade
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }

  h3 {
    font-size: 20px;
    margin: 16px 8px 8px 8px;
    color: ${theme.colors.corPrincipal};

    @media (max-width: 480px) {
      font-size: 18px;
      margin: 12px 6px 6px 6px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    margin: 8px;
    color: ${theme.colors.corPrincipal};
    line-height: 1.5;

    @media (max-width: 480px) {
      font-size: 13px;
      margin: 6px;
    }
  }

  span {
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.corPrincipal};
    margin: 8px;

    @media (max-width: 480px) {
      font-size: 15px;
      margin: 6px;
    }
  }
`;

export const FoodImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 180px;
  }
`;

export const Button = styled.button`
  width: 82px;
  min-width: 40px;
  height: 24px;
  background-color: ${theme.colors.corPrincipal};
  color: ${theme.colors.corSecundaria};
  border: none;
  margin: 16px 8px 16px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    margin: 12px 6px;
    height: 36px;
    font-size: 13px;
  }
`;
