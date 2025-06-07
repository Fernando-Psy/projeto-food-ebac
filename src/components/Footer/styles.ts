import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 384px;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  height: 384px;
  background-color: ${theme.colors.corFooter};

  p {
    text-align: center;
    font-size: 10px;
    color: ${theme.colors.corPrincipal};
    margin-top: 80px;
  }
`;

export const SocialFooter = styled.div`
  display: flex;
  padding-top: 32px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: color.$secondary-color;
    color: color.$white;
    border-radius: 50%;
    margin-right: 8px;
    transition: background-color 0.3s;
    text-decoration: none;
  }
`;

export const LogoFooter = styled.img`
  width: 150px;
  height: auto;
  margin-top: 40px;
`;
