import styled from 'styled-components';

export const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Step = styled.div<{ active: boolean }>`
  padding: 10px 20px;
  margin: 0 10px;
  border-bottom: 3px solid ${({ active }) => (active ? '#FF9F1C' : '#ddd')};
  color: ${({ active }) => (active ? '#FF9F1C' : '#777')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;

export const ConfirmationContainer = styled.div`
  text-align: center;
  padding: 20px;

  h2 {
    color: #ff9f1c;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
    font-size: 16px;
  }

  .order-number {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin: 20px 0;
  }
`;

export const Button = styled.button<{ primary?: boolean }>`
  padding: 12px 24px;
  background-color: ${({ primary }) => (primary ? '#FF9F1C' : '#f5f5f5')};
  color: ${({ primary }) => (primary ? 'white' : '#333')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#FFBF69' : '#e0e0e0')};
  }
`;
