// src/components/Cart/styles.ts
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const CartContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1000;
  top: 0;
  left: 0;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

export const CartAside = styled.aside`
  position: relative;
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.corPrincipal};
  padding: 32px 8px 0px 8px;
  overflow-y: auto;
  z-index: 1001;

  h2 {
    color: ${theme.colors.corSecundaria};
    margin-bottom: 20px;
    font-size: 24px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 8px;
  background: ${theme.colors.corSecundaria};
  color: ${theme.colors.corPrincipal};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    flex: 1;

    h3 {
      colors: ${theme.colors.corSecundaria};
      margin: 0 0 5px 0;
      font-size: 16px;
    }

    p {
      margin: 0 0 10px 0;
      font-weight: bold;
      color: ${theme.colors.corPrincipal};
    }

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      button {
        width: 25px;
        height: 25px;
        border: none;
        background: ${theme.colors.corSecundaria};
        cursor: pointer;
        color: ${theme.colors.corPrincipal};
        font-weight: bold;

        &:hover {
          background: ${theme.colors.corPrincipal};
          color: ${theme.colors.corSecundaria};
        }
      }

      span {
        color: ${theme.colors.corPrincipal};
        min-width: 20px;
        text-align: center;
      }
    }
  }
`;

export const CartSummary = styled.div`
  background-color: ${theme.colors.corPrincipal};
  color: ${theme.colors.corSecundaria};
  margin-top: 20px;
  padding-top: 20px;

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: right;
  }

  button {
    width: 100%;
    height: 24px;
    margin-bottom: 32px;
    background-color: ${theme.colors.corSecundaria};
    color: ${theme.colors.corPrincipal};
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-align: center;

    &:hover {
      opacity: 0.8;
    }
  }
`;
