import React, { useState } from 'react';
import styled from 'styled-components';

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

function TodoItem(id, text) {
  return (
    <>
      {console.log(id + ' ' + text)}
      <RowContainer key={id}>
        <text>{text}</text>
        <DeleteButton />
      </RowContainer>
      ;
    </>
  );
}

export default TodoItem;
