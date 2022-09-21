import styled, { css } from 'styled-components';

const Input = () => {
  return (
        <>
      <InputForm>
        <InputText placeholder = "📍 Enter your to-do"/>
        <InputButton>+</InputButton>
      </InputForm>
        </>
    );
}

const InputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const InputText = styled.input`
  width: 80%;
  height: 30px;
  font-size: 18px;
  border: 0;
  border-radius: 15px;
  outline: none;
  background: rgba(213, 213, 213, 0.5);
`;

const InputButton = styled.button`
  border: 0;
  background: none;
  font-size: 25px;
  cursor: pointer;
`;

export default Input;

