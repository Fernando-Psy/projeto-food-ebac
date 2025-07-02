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

  @media (max-width: 768px) {
    height: 140px;
  }

  @media (max-width: 480px) {
    height: 120px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  max-width: 1200px;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
    flex-direction: column;
    gap: 12px;
  }
`;

export const LogoHeader = styled.img`
  width: 125px;
  height: 57.5px;

  @media (max-width: 480px) {
    width: 100px;
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

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    text-align: center;
  }
`;
