import { useState } from 'react';
import styled from 'styled-components';

const ListContainer = styled.ul`
  flex: 30;
  overflow: auto;
  margin: 0;
  padding-left: 0;
  overflow: auto;

  li {
    list-style-type: none;
    margin-left: 50px;
    margin-top: 10px;
  }
`;

const Title = styled.span`
  padding-left: 30px;
`;

const Btn = styled.button`
  margin-left: 10px;
`;
const Done = ({ id, list, cnt, toggle }) => {
  return (
    <ListContainer>
      <Title>
        {id} ({cnt})
      </Title>
      {list.map((li) =>
        li.isDone ? (
          <li key={li.id}>
            {li.content}
            <Btn onClick={() => toggle(li.id)}>⬆️</Btn>
            <Btn id="delete">❌</Btn>
          </li>
        ) : undefined
      )}
    </ListContainer>
  );
};

export default Done;
