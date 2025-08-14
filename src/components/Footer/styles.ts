import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 384px;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  background-color: ${theme.colors.corFooter};
  padding: 40px 20px;

  @media (max-width: 1024px) {
    margin-top: 100px;
    min-height: 350px;
    padding: 36px 18px;
  }

  @media (max-width: 768px) {
    margin-top: 80px;
    min-height: 300px;
    padding: 32px 16px;
  }

  @media (max-width: 480px) {
    margin-top: 60px;
    min-height: 250px;
    padding: 24px 12px;
  }

  @media (max-width: 360px) {
    margin-top: 40px;
    min-height: 200px;
    padding: 20px 8px;
  }

  p {
    text-align: center;
    font-size: 10px;
    color: ${theme.colors.corPrincipal};
    margin-top: 32px;
    max-width: 600px;
    line-height: 1.4;

    @media (max-width: 768px) {
      font-size: 9px;
      margin-top: 24px;
      br {
        display: none;
      }
    }

    @media (max-width: 480px) {
      font-size: 8px;
      margin-top: 20px;
      max-width: 400px;
    }

    @media (max-width: 360px) {
      font-size: 7px;
      margin-top: 16px;
      max-width: 300px;
    }
  }
`;

export const LogoFooter = styled.img`
  width: 150px;
  height: auto;

  @media (max-width: 768px) {
    width: 130px;
  }

  @media (max-width: 480px) {
    width: 120px;
  }

  @media (max-width: 360px) {
    width: 100px;
  }
`;

export const SocialFooter = styled.div`
  display: flex;
  padding-top: 32px;
  gap: 12px;

  @media (max-width: 768px) {
    padding-top: 28px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    padding-top: 24px;
    gap: 8px;
  }

  @media (max-width: 360px) {
    padding-top: 20px;
    gap: 6px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: all 0.3s ease;
    text-decoration: none;

    @media (max-width: 480px) {
      width: 28px;
      height: 28px;
    }

    @media (max-width: 360px) {
      width: 24px;
      height: 24px;
    }

    img {
      width: 24px;
      height: 24px;

      @media (max-width: 480px) {
        width: 20px;
        height: 20px;
      }

      @media (max-width: 360px) {
        width: 16px;
        height: 16px;
      }
    }
  }
`;
