import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid ${theme.colors.corPrincipal};
  border-radius: 8px;
  background-color: ${theme.colors.corBranco};
  width: 250px;
`;
export const FoodImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

export const FoodTitle = styled.h3`
  font-size: 20px;
  margin-top: 8px;
  color: ${theme.colors.corPrincipal};
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
  color: ${theme.colors.corPrincipal};
`;

export const FoodPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
  color: ${theme.colors.corPrincipal};
`;
