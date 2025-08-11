import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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

  &:hover {
    background-color: ${({ primary }) => (primary ? '#FFBF69' : '#e0e0e0')};
  }
`;
