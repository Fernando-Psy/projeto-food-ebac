import styled from 'styled-components';
import { theme } from '../../styles/theme';
import vector from '../../assets/images/Vector.svg';

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 186px;
  background-image: url(${vector});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    height: 160px;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    height: 140px;
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    height: 120px;
    padding: 16px 8px;
  }

  @media (max-width: 360px) {
    height: 100px;
    padding: 12px 6px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;

  @media (max-width: 1024px) {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
  }

  @media (max-width: 360px) {
    gap: 8px;
    padding: 0 4px;
  }
`;

export const LogoHeader = styled.img`
  width: 125px;
  height: 57.5px;

  @media (max-width: 1024px) {
    width: 110px;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 90px;
    height: auto;
    order: 2;
  }

  @media (max-width: 360px) {
    width: 80px;
  }
`;

export const NavLink = styled.a`
  font-size: 18px;
  font-weight: 900;
  color: ${theme.colors.corPrincipal};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    text-align: center;
    padding: 4px 0;
  }

  @media (max-width: 360px) {
    font-size: 13px;
    padding: 3px 0;
  }

  &:last-child {
    @media (max-width: 480px) {
      order: 1;
    }
  }

  &:first-child {
    @media (max-width: 480px) {
      order: 3;
    }
  }
`;
