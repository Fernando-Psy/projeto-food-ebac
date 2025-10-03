import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const PaymentContainer = styled.div`
  padding: 24px;
  color: white;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 20px;
    margin: 0 16px;
  }

  @media (max-width: 360px) {
    padding: 16px;
  }
`;

export const PaymentHeader = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 24px 0;
  color: ${theme.colors.corFooter};

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 360px) {
    font-size: 15px;
    margin-bottom: 16px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;

  @media (max-width: 480px) {
    margin-bottom: 14px;
  }

  &.cvv {
    flex: 0 0 120px;
    margin-left: 12px;

    @media (max-width: 480px) {
      flex: 0 0 100px;
      margin-left: 10px;
    }
  }

  label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
    color: white;

    @media (max-width: 480px) {
      font-size: 13px;
      margin-bottom: 5px;
    }

    @media (max-width: 360px) {
      font-size: 12px;
    }
  }

  input {
    width: 100%;
    height: 32px;
    padding: 12px;
    border: none;
    font-size: 14px;
    background-color: ${theme.colors.corFooter};
    color: ${theme.colors.corPrincipal};
    box-sizing: border-box;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      background-color: white;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
    }

    &::placeholder {
      color: #999;
    }

    @media (max-width: 480px) {
      padding: 14px 12px;
      font-size: 16px; /* Evita zoom no iOS */
    }

    @media (max-width: 360px) {
      padding: 12px 10px;
    }
  }
`;

export const InputRow = styled.div`
  display: flex;
  gap: 0;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0;
  }

  > div:first-child {
    flex: 1;
  }

  /* Reset margin for mobile */
  @media (max-width: 480px) {
    > div.cvv {
      margin-left: 0;
      flex: 1;
    }
  }
`;

export const ErrorText = styled.div`
  color: ${theme.colors.corFooter};
  font-size: 12px;
  margin-top: 4px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;

  @media (max-width: 480px) {
    margin-top: 20px;
    gap: 10px;
  }
`;

export const Button = styled.button<{ primary?: boolean }>`
  color: ${theme.colors.corPrincipal};
  background-color: ${theme.colors.corFooter};
  width: 100%;
  height: 24px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 480px) {
    padding: 16px 20px;
    font-size: 15px;
  }

  @media (max-width: 360px) {
    padding: 14px 18px;
    font-size: 14px;
  }
`;
