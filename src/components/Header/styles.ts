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
  border-radius: 8px;
  padding: 40px 20px;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 32px 16px;
  }

  @media (max-width: 480px) {
    min-height: 250px;
    padding: 24px 12px;
  }

  p {
    text-align: center;
    font-size: 36px;
    font-weight: 900;
    color: ${theme.colors.corPrincipal};
    margin-top: 32px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 28px;
      margin-top: 24px;
    }

    @media (max-width: 480px) {
      font-size: 22px;
      margin-top: 20px;
      br {
        display: none;
      }
    }
  }
`;

export const LogoHeader = styled.img`
  width: 150px;
  height: auto;

  @media (max-width: 480px) {
    width: 120px;
  }
`;
