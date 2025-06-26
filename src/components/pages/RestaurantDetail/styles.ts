import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  margin-top: -93px;
  z-index: -1;

  @media (max-width: 768px) {
    height: 220px;
    margin-top: -70px;
  }

  @media (max-width: 480px) {
    height: 180px;
    margin-top: -60px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
`;

export const HeroContent = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: left;
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;

  @media (max-width: 768px) {
    bottom: 24px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    bottom: 16px;
    padding: 0 16px;
    text-align: center;
  }
`;

export const CategoryTag = styled.span`
  font-size: 32px;
  font-weight: 100;
  opacity: 0.8;
  display: block;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const RestaurantTitle = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 56px 40px 0;

  @media (max-width: 768px) {
    padding: 40px 20px 0;
  }

  @media (max-width: 480px) {
    padding: 32px 16px 0;
  }
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const MenuItem = styled.div`
  width: 320px;
  height: 338px;
  position: relative;
  top: 56px;
  background-color: ${theme.colors.corPrincipal};
  border: 8px solid ${theme.colors.corPrincipal};
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const MenuImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`;

export const MenuInfo = styled.div`
  padding: 16px;
`;

export const MenuTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${theme.colors.corSecundaria};
  margin-bottom: 8px;
`;

export const MenuDescription = styled.p`
  font-size: 14px;
  color: ${theme.colors.corSecundaria};
  line-height: 1.4;
  margin-bottom: 12px;
`;

export const AddButton = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${theme.colors.corSecundaria};
  color: ${theme.colors.corPrincipal};
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5d5b8;
    transform: translateY(-1px);
  }
`;
