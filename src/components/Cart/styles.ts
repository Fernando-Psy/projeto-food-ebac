import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const CartContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
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
  position: absolute;
  top: 0;
  right: 0;
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.corPrincipal};
  padding: 32px 8px 0px 8px;
  overflow-y: auto;
  z-index: 1001;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 20px 12px 0px 12px;
  }

  @media (max-width: 360px) {
    padding: 16px 8px 0px 8px;
  }

  h2 {
    color: ${theme.colors.corSecundaria};
    margin-bottom: 20px;
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 22px;
      margin-bottom: 18px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      margin-bottom: 16px;
    }

    @media (max-width: 360px) {
      font-size: 18px;
      margin-bottom: 14px;
    }
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

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    gap: 12px;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;

    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
    }

    @media (max-width: 480px) {
      width: 100%;
      max-width: 150px;
      height: auto;
      aspect-ratio: 1;
      margin-right: 0;
      align-self: center;
    }

    @media (max-width: 360px) {
      max-width: 120px;
    }
  }

  div {
    flex: 1;

    @media (max-width: 480px) {
      width: 100%;
    }

    h3 {
      color: ${theme.colors.corPrincipal};
      margin: 0 0 5px 0;
      font-size: 16px;

      @media (max-width: 768px) {
        font-size: 15px;
      }

      @media (max-width: 480px) {
        font-size: 14px;
        text-align: center;
      }

      @media (max-width: 360px) {
        font-size: 13px;
      }
    }

    p {
      margin: 0 0 10px 0;
      font-weight: bold;
      color: ${theme.colors.corPrincipal};

      @media (max-width: 480px) {
        text-align: center;
        font-size: 16px;
        margin-bottom: 12px;
      }

      @media (max-width: 360px) {
        font-size: 15px;
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      @media (max-width: 480px) {
        justify-content: center;
        gap: 15px;
      }

      button {
        width: 25px;
        height: 25px;
        border: none;
        background: ${theme.colors.corSecundaria};
        cursor: pointer;
        color: ${theme.colors.corPrincipal};
        font-weight: bold;

        @media (max-width: 480px) {
          width: 35px;
          height: 35px;
          font-size: 18px;
        }

        @media (max-width: 360px) {
          width: 32px;
          height: 32px;
          font-size: 16px;
        }

        &:hover {
          background: ${theme.colors.corPrincipal};
          color: ${theme.colors.corSecundaria};
        }
      }

      span {
        color: ${theme.colors.corPrincipal};
        min-width: 20px;
        text-align: center;

        @media (max-width: 480px) {
          min-width: 30px;
          font-size: 18px;
          font-weight: bold;
        }

        @media (max-width: 360px) {
          font-size: 16px;
        }
      }
    }
  }
`;

export const CartSummary = styled.div`
  background-color: ${theme.colors.corPrincipal};
  color: ${theme.colors.corSecundaria};
  margin-top: 20px;
  padding-top: 20px;

  @media (max-width: 480px) {
    margin-top: 16px;
    padding-top: 16px;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: right;

    @media (max-width: 768px) {
      font-size: 17px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
      text-align: center;
      margin-bottom: 12px;
    }

    @media (max-width: 360px) {
      font-size: 15px;
    }
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

    @media (max-width: 480px) {
      height: 44px;
      font-size: 16px;
      margin-bottom: 24px;
    }

    @media (max-width: 360px) {
      height: 40px;
      font-size: 15px;
      margin-bottom: 20px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
