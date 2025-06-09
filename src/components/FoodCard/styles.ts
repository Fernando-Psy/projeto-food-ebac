import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const CardContainer = styled.div`
  position: relative;
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

export const ContainerTitle = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
`;

export const TitleCard = styled.h3`
  padding-left: 7px;
  font-size: 22px;
  font-weight: bold;
  margin: 16px 8px 8px 8px;
  color: ${theme.colors.corPrincipal};

  @media (max-width: 480px) {
    font-size: 18px;
    margin: 12px 6px 6px 6px;
  }
`;

export const AssessmentImg = styled.img`
  margin: 8px;
  width: 21px;
  height: 21px;
`;

export const DescriptionCard = styled.p`
  font-size: 14px;
  padding: 16px 8px;
  font-weight: 400;
  text-align: left;
  margin: 8px;
  color: ${theme.colors.corPrincipal};
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 13px;
    margin: 6px;
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

export const DishButton = styled.div`
  background-color: ${theme.colors.corPrincipal};
  color: ${theme.colors.corSecundaria};
  position: absolute;
  right: 8px;
  left: auto
  text-decoration: none;
  padding: 6px 12px;
  text-align: center;
  border: none;
  margin: 16px 8px 0 8px;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
  width: fit-content;
  z-index: 1;

  @media (max-width: 480px) {
    margin: 12px 6px 0 6px;
    font-size: 13px;
  }
`;

export const EmphasisButton = styled.div`
  position: absolute;
  top: 16px;
  right: 112px;
  left: auto;
  background-color: ${theme.colors.corPrincipal};
  color: ${theme.colors.corSecundaria};
  padding: 6px 12px;
  font-size: 14px;
  font-weight: bold;
  z-index: 1;
`;

export const Button = styled.button`
  width: 82px;
  height: 24px;
  background-color: ${theme.colors.corPrincipal};
  color: ${theme.colors.corSecundaria};
  text-decoration: none;
  padding: 4px;
  text-align: center;
  border: none;
  margin: 16px 8px 16px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
`;
