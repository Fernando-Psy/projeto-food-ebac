import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FormContainer = styled.div`
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

  @media (max-width: 480px) {
    margin-bottom: 12px;
  }

  label {
    color: ${theme.colors.corSecundaria};
    display: block;
    margin-bottom: 5px;
    font-weight: bold;

    @media (max-width: 480px) {
      font-size: 15px;
    }

    @media (max-width: 360px) {
      font-size: 14px;
    }
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    border: none;
    font-size: 16px;

    @media (max-width: 480px) {
      padding: 12px;
      font-size: 16px;
    }

    @media (max-width: 360px) {
      padding: 10px;
    }
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
  }
`;

export const Button = styled.button<{ primary?: boolean }>`
  padding: 12px 24px;
  background-color: ${theme.colors.corSecundaria};
  color: ${theme.colors.corPrincipal};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;

  @media (max-width: 480px) {
    width: 100%;
    padding: 16px 24px;
    font-size: 16px;
  }

  @media (max-width: 360px) {
    padding: 14px 20px;
    font-size: 15px;
  }
`;
