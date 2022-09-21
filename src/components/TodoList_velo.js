import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
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

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
