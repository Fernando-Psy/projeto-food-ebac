import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const CardContainer = styled.div`
  position: relative;
  max-width: 472px;
  max-height: 398px;
  width: 100%;
  height: 100%;
  border: 1px solid ${theme.colors.corPrincipal};
  display: flex;
  flex-direction: column;
  align-items: relative;
  background-color: ${theme.colors.corBranco};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    max-width: 420px;
    max-height: 380px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 16px 32px 16px;
    max-height: none;
    min-height: 380px;
  }

  @media (max-width: 480px) {
    margin: 0 8px 24px 8px;
    min-height: 350px;
  }

  @media (max-width: 360px) {
    margin: 0 4px 20px 4px;
    min-height: 320px;
  }

  span {
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.corPrincipal};
    margin: 8px;

    @media (max-width: 768px) {
      font-size: 15px;
      margin: 6px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }

    @media (max-width: 360px) {
      font-size: 13px;
      margin: 4px;
    }
  }
`;

export const ContainerTitle = styled.div`
  min-width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  list-style: none;

  @media (max-width: 480px) {
    padding: 6px;
  }

  li {
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.corPrincipal};
    margin: 8px;

    @media (max-width: 768px) {
      font-size: 15px;
      margin: 6px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }

    @media (max-width: 360px) {
      font-size: 13px;
      margin: 4px;
    }
  }
`;

export const AssessmentImg = styled.img`
  padding-top: 8px;
  width: 21px;
  height: 21px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    margin-left: 4px;
  }

  @media (max-width: 360px) {
    width: 16px;
    height: 16px;
  }
`;

export const DescriptionCard = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  margin: 8px;
  color: ${theme.colors.corPrincipal};
  line-height: 1.5;
  padding-bottom: 64px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin: 6px;
    padding-bottom: 60px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 1.4;
    padding-bottom: 56px;
  }

  @media (max-width: 360px) {
    font-size: 11px;
    margin: 4px;
    padding-bottom: 52px;
  }
`;

export const FoodImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 200px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }

  @media (max-width: 360px) {
    height: 140px;
  }
`;

export const DishButton = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
  left: auto;
  background-color: ${theme.colors.corPrincipal};
  color: ${theme.colors.corSecundaria};
  padding: 6px 12px;
  font-size: 14px;
  font-weight: bold;
  z-index: 1;

  @media (max-width: 768px) {
    top: 12px;
    right: 6px;
    font-size: 13px;
    padding: 4px 8px;
  }

  @media (max-width: 480px) {
    top: 8px;
    right: 4px;
    padding: 4px 6px;
    font-size: 12px;
  }

  @media (max-width: 360px) {
    top: 6px;
    right: 3px;
    padding: 3px 5px;
    font-size: 11px;
  }
`;

export const EmphasisButton = styled.div`
  position: absolute;
  top: 16px;
  right: 96px;
  left: auto;
  background-color: ${theme.colors.corPrincipal};
  color: ${theme.colors.corSecundaria};
  padding: 6px 12px;
  font-size: 14px;
  font-weight: bold;
  z-index: 1;

  @media (max-width: 768px) {
    top: 12px;
    right: 90px;
    font-size: 13px;
    padding: 4px 8px;
  }

  @media (max-width: 480px) {
    top: 8px;
    right: 70px;
    padding: 4px 6px;
    font-size: 12px;
  }

  @media (max-width: 360px) {
    top: 6px;
    right: 60px;
    padding: 3px 5px;
    font-size: 11px;
  }
`;

export const Button = styled.button`
  width: 98px;
  height: 32px;
  background-color: ${theme.colors.corPrincipal};
  color: ${theme.colors.corSecundaria};
  text-decoration: none;
  padding: 6px 12px;
  position: absolute;
  text-align: center;
  border: none;
  margin: 24px 8px 0 8px;
  bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin: 6px;
    margin-bottom: 12px;
    font-size: 13px;
    height: 30px;
  }

  @media (max-width: 480px) {
    margin: 4px;
    margin-bottom: 8px;
    font-size: 12px;
    height: 36px;
    padding: 8px 12px;
    width: calc(100% - 8px);
  }

  @media (max-width: 360px) {
    height: 34px;
    font-size: 11px;
    padding: 6px 10px;
  }
`;
