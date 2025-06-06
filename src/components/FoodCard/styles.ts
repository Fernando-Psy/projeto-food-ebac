import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const CardContainer = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${theme.colors.corPrincipal};
  border-radius: 8px;
  background-color: ${theme.colors.corBranco};

  h3 {
    text-align: center;
    font-size: 20px;
    margin-top: 8px;
    color: ${theme.colors.corPrincipal};
  }

  p {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin-left: 8px;
    margin-right: 8px;
    color: ${theme.colors.corPrincipal};
  }
`;
export const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;
