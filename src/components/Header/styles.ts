import styled from 'styled-components';
import { theme } from '../../styles/theme';
import vector from '../../assets/images/Vector.svg';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 384px;
  background-image: url(${vector});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  height: 384px;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-top: 64px;
`;

export const Tagline = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: ${theme.colors.corPrincipal};
  margin-top: 140px;
`;
export const TaglineSecondary = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: ${theme.colors.corPrincipal};
  margin-bottom: 40px;
  margin-top: 0;
`;
