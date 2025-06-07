import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const CardContainer = styled.div`
  display: grid;
  align-items: center;
  border: 1px solid ${theme.colors.corPrincipal};
  background-color: ${theme.colors.corBranco};
  margin-bottom: 48px;

  h3 {
    font-size: 20px;
    margin-top: 8px;
    margin-left: 7px;
    color: ${theme.colors.corPrincipal};
  }

  p {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin: 16px 8px;
    color: ${theme.colors.corPrincipal};
  }
`;
export const FoodImage = styled.img`
  width: 472px;
  height: 217px;
`;

export const Assessment = styled.p`
  font-size: 20px;
  margin-top: 8px;
  margin-left: 7px;
  color: ${theme.colors.corPrincipal};
`;

export const Button = styled.button`
  width: 82px;
  height: 24px;
  background-color: ${theme.colors.corPrincipal};
  color: ${theme.colors.corSecundaria};
  border: none;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
`;
