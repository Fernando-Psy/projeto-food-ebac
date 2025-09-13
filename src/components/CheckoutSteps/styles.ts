import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Step = styled.div<{ active: boolean }>`
  flex: 1;
  min-width: 100px;
  padding: 10px 20px;
  margin: 0 5px;
  text-align: center;
  border-bottom: 3px solid;

  @media (max-width: 768px) {
    padding: 8px 16px;
    margin: 0 8px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin: 5px 0;
    text-align: center;
    border-bottom: none;
    border-left: 3px solid;
  }

  @media (max-width: 360px) {
    padding: 8px;
    font-size: 13px;
  }
`;

export const ConfirmationContainer = styled.div`
  text-align: center;
  padding: 20px;

  @media (max-width: 480px) {
    padding: 16px;
  }

  @media (max-width: 360px) {
    padding: 12px;
  }

  h2 {
    color: ${theme.colors.corSecundaria};
    margin-bottom: 20px;

    @media (max-width: 480px) {
      font-size: 24px;
      margin-bottom: 16px;
    }

    @media (max-width: 360px) {
      font-size: 22px;
      margin-bottom: 14px;
    }
  }

  p {
    margin-bottom: 15px;
    font-size: 16px;

    @media (max-width: 480px) {
      font-size: 15px;
      margin-bottom: 12px;
    }

    @media (max-width: 360px) {
      font-size: 14px;
    }
  }

  .order-number {
    font-size: 24px;
    font-weight: bold;
    color: ${theme.colors.corSecundaria};
    margin: 20px 0;

    @media (max-width: 480px) {
      font-size: 22px;
      margin: 16px 0;
    }

    @media (max-width: 360px) {
      font-size: 20px;
      margin: 14px 0;
    }
  }
`;

export const Button = styled.button<{ primary?: boolean }>`
  padding: 12px 24px;
  background-color: ${theme.colors.corSecundaria};
  color: ${({ primary }) => (primary ? 'white' : theme.colors.corSecundaria)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  margin-top: 20px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 16px 24px;
    font-size: 16px;
    margin-top: 16px;
  }

  @media (max-width: 360px) {
    padding: 14px 20px;
    font-size: 15px;
    margin-top: 14px;
  }

  &:hover {
    background-color: ${theme.colors.corSecundaria};
  }
`;
