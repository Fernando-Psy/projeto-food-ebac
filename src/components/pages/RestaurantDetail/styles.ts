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
  margin-top: -23px;
  z-index: 1;

  @media (max-width: 1024px) {
    height: 240px;
    margin-top: -20px;
  }

  @media (max-width: 768px) {
    height: 200px;
    margin-top: -18px;
  }

  @media (max-width: 480px) {
    height: 160px;
    margin-top: -15px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);

  @media (max-width: 480px) {
    padding-top: 16px;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: left;
  width: 100%;
  max-width: 1024px;
  padding: 0 40px;

  @media (max-width: 1024px) {
    bottom: 28px;
    padding: 0 32px;
  }

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
  margin-bottom: 156.5px;

  @media (max-width: 1024px) {
    font-size: 28px;
    margin-bottom: 86px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 84px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 64px;
  }
`;

export const RestaurantTitle = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 56px 40px 0;

  @media (max-width: 1024px) {
    align-itens: center;
  }

  @media (max-width: 768px) {
    align-itens: center;
  }

  @media (max-width: 480px) {
    padding: 32px 16px 0;
  }
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 40px;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding-bottom: 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding-bottom: 24px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding-bottom: 16px;
  }
`;

export const MenuItem = styled.div`
  width: 100%;
  max-width: 320px;
  min-width: 220px;
  min-height: 338px;
  position: relative;
  background-color: ${theme.colors.corPrincipal};
  border: 8px solid ${theme.colors.corPrincipal};
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 1024px) {
    min-height: 320px;
  }

  @media (max-width: 768px) {
    min-height: 300px;
  }

  @media (max-width: 480px) {
    min-width: auto;
    max-width: 100%;
    border: 6px solid ${theme.colors.corPrincipal};
  }
`;

export const MenuImage = styled.img`
  height: 167px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  max-width: 304px;
  width: 100%;

  @media (max-width: 1024px) {
    height: 150px;
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 140px;
    width: 100%;
  }

  @media (max-width: 480px) {
    height: 160px;
    width: 100%;
  }
`;

export const MenuInfo = styled.div`
  padding-top: 8px;

  @media (max-width: 480px) {
    padding: 6px;
    gap: 6px;
  }
`;

export const MenuTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${theme.colors.corSecundaria};
  margin-bottom: 8px;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const MenuDescription = styled.p`
  font-size: 14px;
  color: ${theme.colors.corSecundaria};
  line-height: 1.4;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    -webkit-line-clamp: 2;
  }
`;

export const AddButton = styled.button`
  display: inline-block;
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: auto;
  width: 304px;
  height: 24px;
  background-color: ${theme.colors.corSecundaria};
  color: ${theme.colors.corPrincipal};
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    height: 32px;
    font-size: 12px;
    width: 100%;
  }
`;

export const LoadingMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${theme.colors.corPrincipal};
  padding: 32px;
  border-radius: 8px;
  max-width: 1024px;
  width: 80%;
  color: ${theme.colors.corSecundaria};
  position: relative;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  color: ${theme.colors.corSecundaria};
  cursor: pointer;
`;

export const ModalHeader = styled.header`
  text-align: center;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${theme.colors.corSecundaria};
`;

export const ModalDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const ModalImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const ModalPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
`;

export const ModalButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  background-color: ${theme.colors.corSecundaria};
  color: ${theme.colors.corPrincipal};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.corPrincipal};
    color: ${theme.colors.corSecundaria};
    border: 1px solid ${theme.colors.corSecundaria};
  }
`;
