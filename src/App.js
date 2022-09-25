import React, { useState } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

function App() {
  const [todoList, setTodoList] = useState([]);
  const proverbs = [
    '한줄 코드라도 서로 거들면 낫다',
    '발없는 오픈소스 천리간다',
    '코딩하다 곧 중지하면 아니한만 못하니라',
    '보기 좋은 코드가 디버깅 하기도 좋다',
    '늦게 배운 코딩 날새는줄 모른다',
    '완벽한 코드도 생각해보고 컴파일하자',
    '코딩 전 마음 다르고, 코딩 후 마음 다르다',
  ];

  function randomProverbs(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Title>투두리스트</Title>
          <Input todoList={todoList} setTodoList={setTodoList} />
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </Container>
        <Proverbs>"{randomProverbs(proverbs)}"</Proverbs>
      </Wrapper>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Helvetica", "Arial", sans-serif;
        width: 100%;
        height: 100%;
        background-color: pink;
    }

    button {
        background-color: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }

`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 400px;
  height: 600px;
  box-shadow: 1px 1px 10px white;
  padding: 30px;
`;

const Title = styled.h1`
  text-align: center;
  color: pink;
`;

const Proverbs = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

export default App;
