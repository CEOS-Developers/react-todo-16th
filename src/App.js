import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';

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
  height: 52rem;
  border-radius: 20px;
  background: #000000;
  border: 1px solid white;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  width: 25rem;
  height: 17rem;
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
  margin-bottom: 0.5rem;
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
  height: 1.5rem;
  border-radius: 20px;
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

const TodoText = styled.text`
  line-height: 2rem;
  padding: 1rem;
  font-size: 1rem;
  text-align: center;
  color: white;
`;

function App() {
  const [cnt, setCnt] = useState(1);
  // input 값
  const [text, setText] = useState('');
  // DoingList에 넣을 값
  const [doingList, setDoingList] = useState([]);
  // DoneList에 넣을 값
  const [doneList, setDoneList] = useState([]);

  const onChange = (e) => {
    setText(e.target.value);
    // setTextList([...textList, e.target.value]);
  };

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      onReset();
    }
  };

  const onReset = () => {
    const todo = {
      id: cnt,
      text: text,
    };
    setDoingList(doingList.concat(todo));
    setCnt(cnt + 1);
    setText('');
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title> To-Do</Title>
        <TodoForm>
          <TodoInput onKeyPress={onKeyPress} onChange={onChange} value={text} />
          <EnterButton onClick={onReset} onChange={onChange} />
        </TodoForm>

        <Title> Doing ( {doingList.length} )</Title>
        <TodoList todos={doingList} />

        <Title> Done ( {doneList.length} )</Title>
        <DoneList todos={doneList} />
      </Container>
    </>
  );
}

export default App;
