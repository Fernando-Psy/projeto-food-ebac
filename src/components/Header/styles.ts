import { styled } from 'styled-components';
import { theme } from '../../styles/theme';
import vector from '../../assets/images/Vector.svg';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 384px;
  background-image: url(${vector});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  @media (max-width: 1200px) {
    min-height: 350px;
    padding: 18px 16px;
  }

  @media (max-width: 1024px) {
    min-height: 320px;
    padding: 16px 14px;
  }

  @media (max-width: 768px) {
    min-height: 280px;
    padding: 16px 12px;
  }

  @media (max-width: 480px) {
    min-height: 240px;
    padding: 12px 8px;
  }

  @media (max-width: 360px) {
    min-height: 200px;
    padding: 10px 6px;
  }

  @media (max-height: 600px) {
    min-height: 220px;
    padding: 10px 6px;
  }

  p {
    text-align: center;
    font-size: 36px;
    font-weight: 900;
    color: ${theme.colors.corPrincipal};
    margin-top: 32px;
    line-height: 1.2;

    @media (max-width: 1200px) {
      font-size: 34px;
      margin-top: 30px;
    }

    @media (max-width: 1024px) {
      font-size: 32px;
      margin-top: 28px;
    }

    @media (max-width: 768px) {
      font-size: 28px;
      margin-top: 24px;
      max-width: 600px;
    }

    @media (max-width: 480px) {
      font-size: 22px;
      margin-top: 20px;
      max-width: 320px;
      br {
        display: none;
      }
    }

    @media (max-width: 360px) {
      font-size: 18px;
      margin-top: 16px;
      max-width: 280px;
    }

    @media (max-height: 600px) {
      font-size: 20px;
      margin-top: 16px;
      max-width: 280px;
    }
  }
`;

export const LogoHeader = styled.img`
  width: 150px;
  height: auto;

  @media (max-width: 1200px) {
    width: 145px;
  }

  @media (max-width: 1024px) {
    width: 140px;
  }

  @media (max-width: 768px) {
    width: 130px;
  }

  @media (max-width: 480px) {
    width: 120px;
  }

  @media (max-width: 360px) {
    width: 100px;
  }

  @media (max-height: 600px) {
    width: 100px;
  }
`;
