import React from 'react';
import styled from 'styled-components';

//화면에 표시되는 todo형식
function Todo({ todo, onRemove, onToggle }) {
  return (
    <StyledText>
      <StyledLi onClick={() => onToggle(todo.input)}>{todo.input}</StyledLi>
      <StyledErase onClick={() => onRemove(todo.id)}>X</StyledErase>
    </StyledText>
  );
}

//app.js에 넘어가는 함수 구현
function TodoList({ todos, onRemove, onToggle }) {
  return (
    <StyledBlock>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </StyledBlock>
  );
}

//styled컴포넌트
const StyledBlock = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgrey;
  padding-inline-start: 0px;
  height: 175px;
  overflow-y: auto;
  margin-top: 0px;
  font-family: 'Jua', sans-serif;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Jua', sans-serif;
`;

const StyledErase = styled.button`
  margin-left: 5px;
  background: none;
  border-radius: 70%;
  border-color: pink;
`;

const StyledLi = styled.li`
  margin-left: 5px;
  margin-top: 6px;
`;

export default TodoList;
