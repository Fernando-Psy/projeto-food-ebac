// src/components/Checkout/shared/styles.ts
// Estilos compartilhados entre os componentes de checkout
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.corPrincipal};
  padding: 20px;
  overflow-y: auto;
  z-index: 1000;

  h2 {
    color: ${theme.colors.corSecundaria};
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  color: ${theme.colors.corSecundaria};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${theme.colors.corSecundaria};
  color: ${theme.colors.corPrincipal};
  font-size: 14px;
  box-sizing: border-box;

  &::placeholder {
    color: ${theme.colors.corPrincipal};
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  }
`;

export const ErrorText = styled.span`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${theme.colors.corSecundaria};
  color: ${theme.colors.corPrincipal};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ButtonSecondary = styled.button`
  width: 100%;
  padding: 12px;
  background-color: transparent;
  color: ${theme.colors.corSecundaria};
  border: 2px solid ${theme.colors.corSecundaria};
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.corSecundaria};
    color: ${theme.colors.corPrincipal};
  }
`;

export const FlexContainer = styled.div<{ gap?: string }>`
  display: flex;
  gap: ${props => props.gap || '10px'};
`;

export const FlexItem = styled.div<{ flex?: number }>`
  flex: ${props => props.flex || 1};
`;