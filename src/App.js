import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    background: #000000;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  width: 30rem;
  height: 40rem;
  border-radius: 20px;
  background: #000000;
  border: 1px solid white;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
  }
  &::-webkit-scrollbar-track {
    background-color: black;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  line-height: 2rem;
`;

const Title = styled.div`
  margin-top: 1rem;
  color: white;
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
`;

const TodoForm = styled.div`
  flex-direction: row;
  margin-bottom: 1rem;
`;

const TodoInput = styled.input`
  width: 15rem;
  height: 2rem;
`;

const EnterButton = styled.button`
  margin-left: 0.5rem;
  height: 2rem;
  width: 2rem;
  margin-bottom: -0.8rem;
  background-image: url('./img/plus.png');
`;

const DeleteButton = styled.button`
  line-height: 2rem;
  margin-left: 0.5rem;
  height: 2rem;
  width: 2rem;
`;

const TodoText = styled.div`
  line-height: 2rem;
  padding: 1rem;
  font-size: 1rem;
  text-align: center;
  color: white;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title> To-Do</Title>
        <TodoForm>
          <TodoInput />
          <EnterButton />
        </TodoForm>

        <Title> Doing</Title>

        <RowContainer>
          <TodoText> 첫번째 할 일</TodoText>
          <DeleteButton />
        </RowContainer>

        <RowContainer>
          <TodoText> 첫번째 할 일</TodoText>
          <DeleteButton />
        </RowContainer>

        <RowContainer>
          <TodoText> 첫번째 할 일</TodoText>
          <DeleteButton />
        </RowContainer>

        <RowContainer>
          <TodoText> 첫번째 할 일</TodoText>
          <DeleteButton />
        </RowContainer>

        <RowContainer>
          <TodoText> 첫번째 할 일</TodoText>
          <DeleteButton />
        </RowContainer>

        <RowContainer>
          <TodoText> 첫번째 할 일</TodoText>
          <DeleteButton />
        </RowContainer>

        <Title> Done</Title>
      </Container>
    </>
  );
}

export default App;
