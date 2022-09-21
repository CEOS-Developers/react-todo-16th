import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

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

const TodoText = styled.text`
  line-height: 2rem;
  padding: 1rem;
  font-size: 1rem;
  text-align: center;
  color: white;
`;

const DeleteButton = styled.button`
  line-height: 2rem;
  margin-left: 0.5rem;
  height: 2rem;
  width: 2rem;
`;

function TodoList({ todos }) {
  return (
    <>
      <SubContainer>
        {todos.map((list) => {
          // <TodoItem id={list.id} text={list.text} />;
          <RowContainer>
            <TodoText>{list.text}</TodoText>
            <DeleteButton />
          </RowContainer>;
          {
            console.log(list.id + ' ' + list.text);
          }
        })}
      </SubContainer>
    </>
  );
}

export default TodoList;
