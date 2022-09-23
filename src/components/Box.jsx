import { useState } from 'react';
import styled from 'styled-components';
import Doing from './Doing';
import Done from './Done';
import Form from './Form';

const ToDoBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 500px;
  height: 700px;
  border: 10px black;
  border-radius: 7%;
  background-color: white;
  box-shadow: 1px 1px 3px 1px #dadce0;
  line-height: 1;
  margin: auto;

  hr {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const Header = styled.h1`
  flex: 5;
  align-self: center;
`;

const Box = () => {
  const [cnt, setCnt] = useState(0);
  const [list, setList] = useState([]);

  const [doingCnt, setDoingCnt] = useState(0);
  const [doneCnt, setDoneCnt] = useState(0);

  const getContent = (li) => {
    setCnt((cnt) => cnt + 1);
    const addLi = {
      id: cnt,
      content: li,
      isDone: false,
    };
    setList([
      ...list,
      { id: addLi.id, content: addLi.content, isDone: addLi.isDone },
    ]);
  };

  const toggle = (id) => {
    setList(
      list.map((li) => {
        return li.id === id ? { ...li, isDone: !li.isDone } : li;
      })
    );
  };

  return (
    <ToDoBox>
      <Header>My To Do List ^^</Header>
      <Form getContent={getContent} />
      <hr />
      <Doing id="doing" list={list} cnt={doingCnt} toggle={toggle} />
      <hr />
      <Done id="done" list={list} cnt={doneCnt} toggle={toggle} />
    </ToDoBox>
  );
};

export default Box;
